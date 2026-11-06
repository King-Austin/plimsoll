import {
  ArrowsLeftRight,
  Bank,
  CheckCircle,
  CurrencyCircleDollar,
  Handshake,
  Lightning,
  LockSimple,
  PlayCircle,
  ShieldCheck,
  UserCheck,
} from "@phosphor-icons/react/ssr";
import Link from "next/link";
import styles from "./roqqu-showcase.module.css";

export function VideoDemoShowcase() {
  return (
    <section className={styles.videoSection} aria-labelledby="video-demo-title">
      <div className={styles.wrap}>
        <div className={styles.sectionHeader}>
          <div className={styles.pillBadge}>
            <PlayCircle weight="fill" aria-hidden />
            <span>Product Walkthrough & Demo</span>
          </div>
          <h2 id="video-demo-title" className={styles.sectionTitle}>
            See how Plimsoll, Roqqu & Stellar eliminate trade risk
          </h2>
          <p className={styles.sectionSub}>
            Watch a live walkthrough of an end-to-end import agreement: funding via Roqqu liquidity, document reconciliation at Apapa Port, and milestone releases on Stellar Soroban.
          </p>
        </div>

        <div className={styles.videoContainer}>
          <div className={styles.videoPlayerWrapper}>
            <iframe
              className={styles.videoFrame}
              src="https://www.youtube-nocookie.com/embed/uQZe5YYR1PQ?rel=0&modestbranding=1"
              title="Plimsoll & Roqqu Cross-Border Trade Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className={styles.videoSidebar}>
            <h3>What this demo covers</h3>
            <ol className={styles.videoTimeline}>
              <li>
                <span className={styles.timeBadge}>01</span>
                <div>
                  <strong>Role Onboarding</strong>
                  <p>Onboard as Buyer (Lagos importer), Supplier, or Independent Inspector with verified identities.</p>
                </div>
              </li>
              <li>
                <span className={styles.timeBadge}>02</span>
                <div>
                  <strong>Funding & Roqqu Liquidity</strong>
                  <p>Deposit NGN via Paystack bank transfer or Roqqu on-ramp with guaranteed fx conversion.</p>
                </div>
              </li>
              <li>
                <span className={styles.timeBadge}>03</span>
                <div>
                  <strong>Document Mismatch Detection</strong>
                  <p>Deterministic checks compare invoice vs packing list before goods arrive at Apapa Port.</p>
                </div>
              </li>
              <li>
                <span className={styles.timeBadge}>04</span>
                <div>
                  <strong>Automated Soroban Payout</strong>
                  <p>Cryptographic escrow releases funds through Roqqu off-ramp directly into recipient accounts.</p>
                </div>
              </li>
            </ol>
            <div className={styles.videoCta}>
              <Link href="/sign-in" className="btn primary sm">
                Try the interactive demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RoqquLiquidityEngine() {
  return (
    <section className={styles.roqquSection} aria-labelledby="roqqu-title">
      <div className={styles.wrap}>
        <div className={styles.sectionHeader}>
          <div className={styles.pillBadgeRoqqu}>
            <Lightning weight="fill" aria-hidden />
            <span>Hackathon Liquidity & Ramp Partner</span>
          </div>
          <h2 id="roqqu-title" className={styles.sectionTitle}>
            Powered by Roqqu: The African trade liquidity engine
          </h2>
          <p className={styles.sectionSub}>
            Cross-border African commerce fails when foreign exchange is trapped or volatile. Plimsoll leverages Roqqu for deep local liquidity and instant on/off-ramping, pairing it with Stellar Soroban for unhackable smart contract custody.
          </p>
        </div>

        <div className={styles.architectureGrid}>
          {/* Card 1: Paystack Ingress */}
          <div className={styles.archCard}>
            <div className={styles.cardHeader}>
              <span className={styles.stepNum}>Rail 1</span>
              <Bank className={styles.cardIcon} aria-hidden />
            </div>
            <h3>Paystack Local Fiat Ingress</h3>
            <p className={styles.cardRole}>Designed for Non-Web3 Nigerian Businesses</p>
            <p className={styles.cardBody}>
              Nigerian importers don&apos;t need crypto wallets to get started. They fund agreement deposits in Nigerian Naira (₦) using standard bank transfers, NIBSS virtual accounts, or corporate debit cards.
            </p>
            <ul className={styles.cardSpecs}>
              <li><CheckCircle weight="fill" aria-hidden /> Instant NGN bank account generation</li>
              <li><CheckCircle weight="fill" aria-hidden /> No crypto knowledge required for buyers</li>
              <li><CheckCircle weight="fill" aria-hidden /> Automated reconciliation to deal references</li>
            </ul>
          </div>

          {/* Card 2: Roqqu Engine */}
          <div className={`${styles.archCard} ${styles.featuredCard}`}>
            <div className={styles.featuredBadge}>Core Liquidity Partner</div>
            <div className={styles.cardHeader}>
              <span className={styles.stepNum}>Rail 2</span>
              <ArrowsLeftRight className={styles.cardIconHighlight} aria-hidden />
            </div>
            <h3>Roqqu Liquidity & On/Off-Ramp</h3>
            <p className={styles.cardRole}>The Bridge Between Naira & Blockchain Escrow</p>
            <p className={styles.cardBody}>
              Roqqu converts incoming local fiat into stable digital liquidity and powers frictionless off-ramps. When milestone conditions are met on-chain, Roqqu dispatches automated payouts in the recipient&apos;s currency of choice.
            </p>
            <ul className={styles.cardSpecs}>
              <li><CheckCircle weight="fill" aria-hidden /> Real-time institutional NGN/USD fx rates</li>
              <li><CheckCircle weight="fill" aria-hidden /> Automated off-ramp to global or local accounts</li>
              <li><CheckCircle weight="fill" aria-hidden /> Deep orderbook liquidity with zero slippage</li>
            </ul>
          </div>

          {/* Card 3: Stellar Soroban */}
          <div className={styles.archCard}>
            <div className={styles.cardHeader}>
              <span className={styles.stepNum}>Rail 3</span>
              <LockSimple className={styles.cardIcon} aria-hidden />
            </div>
            <h3>Stellar Soroban Smart Escrow</h3>
            <p className={styles.cardRole}>Cryptographic Dispute & Milestone Enforcement</p>
            <p className={styles.cardBody}>
              Funds are never held in custodial company accounts. Capital is locked into audited Soroban WASM smart contracts that only release when buyer, inspector, and document hashes achieve quorum.
            </p>
            <ul className={styles.cardSpecs}>
              <li><CheckCircle weight="fill" aria-hidden /> Mathematical risk splitting across milestones</li>
              <li><CheckCircle weight="fill" aria-hidden /> Sub-5-second finality with sub-cent fees</li>
              <li><CheckCircle weight="fill" aria-hidden /> Transparent on-chain ledger audit trails</li>
            </ul>
          </div>
        </div>

        {/* Live Liquidity Flow Banner */}
        <div className={styles.flowBanner}>
          <div className={styles.flowStep}>
            <span className={styles.flowLabel}>1. Local Deposit</span>
            <strong>Importer Pays NGN</strong>
            <span className={styles.flowSub}>Via Paystack or Roqqu</span>
          </div>
          <span className={styles.flowArrow}>→</span>
          <div className={styles.flowStep}>
            <span className={styles.flowLabel}>2. Liquidity Bridge</span>
            <strong>Roqqu Mints Escrow Asset</strong>
            <span className={styles.flowSub}>Instant rate lock ($1 = ₦1,350)</span>
          </div>
          <span className={styles.flowArrow}>→</span>
          <div className={styles.flowStep}>
            <span className={styles.flowLabel}>3. Stellar Escrow</span>
            <strong>Soroban Milestone Locks</strong>
            <span className={styles.flowSub}>20% Deposit · 60% Port · 20% Receipt</span>
          </div>
          <span className={styles.flowArrow}>→</span>
          <div className={styles.flowStep}>
            <span className={styles.flowLabel}>4. Verified Payout</span>
            <strong>Roqqu Instant Off-Ramp</strong>
            <span className={styles.flowSub}>Settled to supplier bank</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RoleOnboardingSection() {
  return (
    <section className={styles.roleSection} aria-labelledby="roles-title">
      <div className={styles.wrap}>
        <div className={styles.sectionHeader}>
          <div className={styles.pillBadge}>
            <UserCheck weight="fill" aria-hidden />
            <span>Multi-Party Participation</span>
          </div>
          <h2 id="roles-title" className={styles.sectionTitle}>
            Engineered for every party in cross-border trade
          </h2>
          <p className={styles.sectionSub}>
            Trade risk is split fairly across each participant. Onboard seamlessly in under 2 minutes with Passkeys and linked wallets.
          </p>
        </div>

        <div className={styles.rolesGrid}>
          <div className={styles.roleCard}>
            <div className={styles.roleIconBadge}>
              <CurrencyCircleDollar weight="duotone" aria-hidden />
            </div>
            <h3>Importers & Buyers</h3>
            <p className={styles.roleWho}>Nigerian trading houses, manufacturers & distributors</p>
            <p className={styles.roleText}>
              Never wire 100% upfront to unknown overseas vendors. Fund once into Stellar escrow via Roqqu. Funds remain securely locked until shipping documents and Apapa Port inspection pass inspection.
            </p>
            <div className={styles.roleAction}>
              <Link href="/sign-in" className="btn sm">
                Onboard as Buyer
              </Link>
            </div>
          </div>

          <div className={styles.roleCard}>
            <div className={styles.roleIconBadge}>
              <Handshake weight="duotone" aria-hidden />
            </div>
            <h3>Suppliers & Exporters</h3>
            <p className={styles.roleWho}>International manufacturers (China, Europe, US, Asia)</p>
            <p className={styles.roleText}>
              Eliminate payment default risk and endless letter-of-credit delays. See escrow funded in full on-chain before commencing manufacturing. Receive automatic releases upon bill of lading issuance.
            </p>
            <div className={styles.roleAction}>
              <Link href="/sign-in" className="btn sm">
                Onboard as Supplier
              </Link>
            </div>
          </div>

          <div className={styles.roleCard}>
            <div className={styles.roleIconBadge}>
              <ShieldCheck weight="duotone" aria-hidden />
            </div>
            <h3>Inspectors & Resolvers</h3>
            <p className={styles.roleWho}>Independent surveyors, freight forwarders & Lagos Court of Arbitration</p>
            <p className={styles.roleText}>
              Perform physical cargo surveys at port terminals (Apapa, Onne). Attest inspection certificates cryptographically. Resolve contested tranches with binding on-chain split execution.
            </p>
            <div className={styles.roleAction}>
              <Link href="/sign-in" className="btn sm">
                Onboard as Inspector
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

