import { resolve } from "node:path";
import { Asset, Keypair } from "@stellar/stellar-sdk";
import { parseAmount } from "@plimsoll/domain";
import {
  EscrowGateway,
  accountExists,
  buildChangeTrust,
  friendbotFund,
  hasTrustline,
  issuePayment,
  resolveNetwork,
} from "@plimsoll/stellar";
import { readEnvFile, writeEnvFile } from "./env-file";

const ROOT = resolve(import.meta.dirname, "..");
const ENV_PATH = resolve(ROOT, "apps/web/.env.local");
const PERSONAS = ["BUYER", "SUPPLIER", "INSPECTOR", "FORWARDER", "RESOLVER"] as const;
const NEEDS_TRUSTLINE = new Set(["BUYER", "SUPPLIER"]);
const ASSET_CODE = "DEMOUSD";
const BUYER_FLOAT = parseAmount("2000000");

function keyFor(env: Record<string, string>, name: string): Keypair {
  const existing = env[name];
  return existing ? Keypair.fromSecret(existing) : Keypair.random();
}

async function ensureFunded(gw: EscrowGateway, kp: Keypair, label: string): Promise<void> {
  try {
    if (await accountExists(gw, kp.publicKey())) {
      console.log(`  ${label} (${kp.publicKey().slice(0, 8)}...) already funded.`);
      return;
    }
    console.log(`  funding ${label} (${kp.publicKey()}) via friendbot...`);
    await friendbotFund(gw, kp.publicKey());
    console.log(`  ✓ funded ${label}`);
  } catch (e: any) {
    console.warn(`  ! warning funding ${label}: ${e?.message ?? e}`);
  }
}

async function main() {
  const env = readEnvFile(ENV_PATH);
  const network = resolveNetwork(env.STELLAR_NETWORK ?? "testnet", env.STELLAR_RPC_URL || undefined);
  console.log(`Setting up demo keys & asset contracts on ${network.label}...`);

  const relayer = keyFor(env, "PLIMSOLL_RELAYER_SECRET");
  const issuer = keyFor(env, "PLIMSOLL_ISSUER_SECRET");
  const personas = Object.fromEntries(PERSONAS.map((p) => [p, keyFor(env, `DEMO_${p}_SECRET`)])) as Record<typeof PERSONAS[number], Keypair>;
  const gw = new EscrowGateway(network, relayer);

  await ensureFunded(gw, relayer, "relayer");
  await ensureFunded(gw, issuer, "demo issuer");
  for (const [name, kp] of Object.entries(personas)) {
    await ensureFunded(gw, kp, name.toLowerCase());
  }

  const asset = { code: ASSET_CODE, issuer: issuer.publicKey() };
  for (const name of PERSONAS) {
    if (!NEEDS_TRUSTLINE.has(name)) continue;
    const kp = personas[name];
    try {
      console.log(`  ensuring ${ASSET_CODE} trustline for ${name.toLowerCase()}...`);
      const tx = await buildChangeTrust(gw, kp.publicKey(), asset);
      tx.sign(kp);
      await gw.sendAndPoll(tx);
      console.log(`  ✓ trustline confirmed for ${name.toLowerCase()}`);
    } catch (e: any) {
      console.log(`  (trustline note: ${e?.message ?? e})`);
    }
  }

  try {
    console.log(`  issuing ${ASSET_CODE} float to buyer...`);
    await issuePayment(gw, issuer, personas.BUYER.publicKey(), asset, BUYER_FLOAT);
    console.log(`  ✓ float issued to buyer`);
  } catch (e: any) {
    console.log(`  (float note: ${e?.message ?? e})`);
  }

  console.log("  ensuring Stellar Asset Contract...");
  const tokenContractId = await gw.ensureAssetContract(new Asset(asset.code, asset.issuer));
  console.log(`  ✓ token contract ID: ${tokenContractId}`);

  const updates: Record<string, string> = {
    PLIMSOLL_RELAYER_SECRET: relayer.secret(),
    PLIMSOLL_ISSUER_SECRET: issuer.secret(),
    PLIMSOLL_ASSET_CODE: asset.code,
    PLIMSOLL_ASSET_ISSUER: asset.issuer,
    PLIMSOLL_ASSET_IS_DEMO: "true",
    PLIMSOLL_TOKEN_CONTRACT_ID: tokenContractId,
    ...Object.fromEntries(PERSONAS.map((p) => [`DEMO_${p}_SECRET`, personas[p].secret()])),
  };

  writeEnvFile(ENV_PATH, updates, "# Plimsoll Local Environment");
  console.log("Updated .env.local successfully with SAC contract and demo secrets!");
}

main().catch((e) => {
  console.error("Fatal:", e);
  process.exit(1);
});
