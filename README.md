# Plimsoll

> **Next-Generation Cross-Border Trade Agreements with Programmable Settlement, AI Document Verification & Roqqu Dual-Rail Liquidity**

[![Live Deployment](https://img.shields.io/badge/Vercel-plimsoll--roqqu.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://plimsoll-roqqu.vercel.app)
[![Demo Video](https://img.shields.io/badge/YouTube-Watch%20Demo-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtu.be/uQZe5YYR1PQ)
[![Stellar Soroban](https://img.shields.io/badge/Stellar-Soroban%20Smart%20Contracts-black?style=for-the-badge&logo=stellar&logoColor=white)](https://stellar.expert/explorer/testnet/contract/CBD67OA7J66B56PDTG367GK3HSR3LSU6UE364CHC3C62PNJZMC77MNNM)
[![Roqqu Liquidity](https://img.shields.io/badge/Roqqu-Fiat%20%2F%20Crypto%20Bridge-0ba4db?style=for-the-badge)](https://plimsoll-roqqu.vercel.app)

---

## 🌐 Live Deployments & Key Links

- **🚀 Live Production Platform:** [https://plimsoll-roqqu.vercel.app](https://plimsoll-roqqu.vercel.app)
- **⚡ Backup Production Mirror:** [https://plimsoll-king-austin-s-projects.vercel.app](https://plimsoll-king-austin-s-projects.vercel.app)
- **🎥 End-to-End Walkthrough Video:** [https://youtu.be/uQZe5YYR1PQ](https://youtu.be/uQZe5YYR1PQ)
- **🔍 Public Ledger Proof (Live Deal):** [https://plimsoll-roqqu.vercel.app/verify/_5KVFzCbwyS3](https://plimsoll-roqqu.vercel.app/verify/_5KVFzCbwyS3)
- **📜 Verified Soroban Escrow Contract:** [View on Stellar Expert](https://stellar.expert/explorer/testnet/contract/CBD67OA7J66B56PDTG367GK3HSR3LSU6UE364CHC3C62PNJZMC77MNNM)
- **💻 GitHub Source Repository:** [https://github.com/King-Austin/plimsoll](https://github.com/King-Austin/plimsoll)

---

## 💡 Executive Summary

**Plimsoll** eliminates counterparty mistrust in cross-border commerce by replacing vulnerable paper letters of credit (LCs) with **self-executing, programmable trade agreements**. 

Buyer and supplier lock trade terms into an immutable **Stellar Soroban** smart contract. Milestone disbursements occur strictly when digital shipping documents pass **AI-powered cross-document verification** and appointed multi-party human signers anchor consensus on-chain.

To solve the liquidity bottleneck for African enterprises, Plimsoll bridges Web3 settlement directly to local banking infrastructure via **Roqqu** and **Paystack**, enabling seamless fiat ingress in Naira (₦) and instant off-ramping at competitive FX rates ($1 = ₦1,350).

---

## 🏗️ Core Architecture & Multi-Rail Ingress

```
                   [ Nigerian Importer / Buyer ]
                                 │
                 ┌───────────────┴───────────────┐
                 │                               │
        [ Paystack Rail ]                [ Roqqu Rail ]
     Naira Card / Bank Transfer     Crypto-to-Fiat Liquidity
                 │                         ($1 = ₦1,350)
                 └───────────────┬───────────────┘
                                 │ On-Ramp
                                 ▼
                     ┌───────────────────────┐
                     │ Stellar Soroban Smart │
                     │    Escrow Contract    │
                     └───────────┬───────────┘
                                 │
     ┌───────────────────────────┼───────────────────────────┐
     │                           │                           │
     ▼                           ▼                           ▼
[ Stage 1: Ingestion ]    [ Stage 2: Vision AI ]   [ Stage 3: Deterministic Gate ]
Invoices, BLs, Certs       Field/Line Extraction       Cross-document rule check:
PDF / Scans / OCR          (Groq / Vision Models)      quantities, values, ports
     │                           │                           │
     └───────────────────────────┼───────────────────────────┘
                                 │
                                 ▼
                    [ Stage 4: Multi-Party Quorum ]
                    Buyer + Independent Inspector Sign
                                 │
                                 ▼ Release Approved
                     ┌───────────────────────┐
                     │ Instant Payout Engine │
                     └───────────┬───────────┘
                                 │
                 ┌───────────────┴───────────────┐
                 │                               │
         [ Stellar Testnet ]             [ Roqqu Off-Ramp ]
         On-Chain Stablecoin             Instant NGN Bank Payout
             Settlement                  (GTBank, Zenith, Access)
```

### 1. 🪙 Stellar Soroban Smart Escrow
- **Zero-Custody Architecture:** Each trade instantiates its own isolated, immutable Rust contract (`contracts/trade-escrow`).
- **No Backdoors:** No admin keys, no upgrade proxies, and no sweep abilities.
- **Predicate Enforcement:** Milestone payouts are cryptographically locked until hashed evidence manifests match on-chain terms.

### 2. 💱 Roqqu Liquidity Gateway
- **Dual-Rail Settlement:** Allows exporters and suppliers to receive on-chain tokens (`DEMOUSD` / `USDC`) while providing automated off-ramps to Nigerian Naira (NGN).
- **Competitive FX Bridge:** Real-time conversion at ₦1,350 / USD.
- **Direct Bank Payouts:** Delivers liquidity directly to Nigerian commercial bank accounts via automated clearing.

### 3. 💳 Paystack Fiat Ingress
- **Non-Web3 Onboarding:** Importers without crypto wallets can fund transactions via local Naira bank transfers or debit cards.
- **Instant Credit:** Funds are programmatically minted/bridged into the deal's Soroban escrow contract.

### 4. 👁️ AI Vision & Zero-Trust Verification Engine
- **Universal Ingestion:** Ingests digital PDFs and high-resolution camera scans of Commercial Invoices, Packing Lists, Bills of Lading, and Quality Certificates.
- **Vision Model Extraction:** Powered by Groq's high-speed inference (Llama 3.2 Vision) and multilinear OCR for reliable field mapping.
- **Deterministic Discrepancy Gate:** Mathematical rules compare items across documents (e.g., checking 160 vs 148 carton mismatches).
- **Human-in-the-Loop Quorum:** AI flags discrepancies and highlights sources; release requires authorized cryptographic signatures from appointed human parties (Buyer, Inspector, Resolver).

### 5. 🇳🇬 Nigerian Trade Corridor Localization
- **Active Ports:** Apapa Port, Lagos and Onne Port, Port Harcourt.
- **Corporate Registry:** Verified against Nigerian Corporate Affairs Commission (CAC) / RC numbers.
- **Legal Jurisdiction:** Governed by the Laws of the Federal Republic of Nigeria (Arbitration and Mediation Act 2023) and the Lagos Court of Arbitration (LCA).

---

## 📁 Repository Structure

```
plimsoll/
├── contracts/
│   └── trade-escrow/            # Soroban smart contract in Rust (zero-custody escrow)
├── packages/
│   ├── domain/                  # Integer money arithmetic, terms/evidence digests, gating rules
│   ├── stellar/                 # Stellar RPC gateway, simulation, transaction assembly, fee-bumps
│   └── documents/               # PDF line extraction, bounding boxes, fixture rendering
├── apps/
│   └── web/                     # Full-stack Next.js web application & REST API
│       ├── src/app/             # App Router pages (Landing, Cockpit, Disputes, Settlements)
│       ├── src/components/      # UI components, Roqqu liquidity showcase, AI schematics
│       ├── src/server/          # Supabase client, auth, worker, indexing, and Stellar bridge
│       └── drizzle/             # Database migrations schema
├── scripts/                     # Testnet bootstrap, chain verification, E2E runner
└── evidence/                    # Immutable receipts of live testnet transactions on stellar.expert
```

---

## ⚡ Quickstart & Local Development

### Prerequisites
- **Node.js**: >= 22.0.0
- **pnpm**: >= 11.23.0
- **Rust**: `wasm32v1-none` target installed (`rustup target add wasm32v1-none`)
- **Stellar CLI**: `cargo install --locked stellar-cli`

### Installation & Launch

```bash
# 1. Clone the repository
git clone https://github.com/King-Austin/plimsoll.git
cd plimsoll

# 2. Install dependencies across workspace
pnpm install

# 3. Bootstrap testnet contracts and demo assets
# Generates keys, funds via friendbot, deploys Soroban wasm, and writes .env.local
pnpm bootstrap:testnet

# 4. Start local development server
pnpm dev
```

The application will launch on `http://localhost:3000` (or `3001`) with an embedded Postgres database (`PGlite`).

---

## 🧪 Comprehensive Verification & Test Suites

Plimsoll includes a multi-tier testing pipeline covering smart contracts, domain mathematics, ledger interaction, and browser journeys.

| Command | Suite Description |
|---|---|
| `pnpm test:contract` | **27 Soroban Rust unit tests**: tests lifecycle invariants, replay prevention, dispute freezes, quorum requirements, and TTL storage survival. |
| `pnpm -r test` | **97 TypeScript unit tests**: verifies integer arithmetic, canonical sha256 digests, reconciliation rules, and ABI conformance against wasm specs. |
| `pnpm contract:spec:check` | Verifies that client TypeScript types match the compiled Soroban wasm specification byte-for-byte. |
| `pnpm verify:chain` | Deploys a live contract to Stellar Testnet and executes 20 transaction sequences, verifying ledger state directly. |
| `pnpm e2e` | Runs an automated 28-step end-to-end API lifecycle with 5 authenticated personas. |
| `pnpm e2e:browser` | Drives Playwright across desktop and mobile viewports with accessibility checks (WCAG 2.2 AA). |

---

## 🚢 The Canonical Nigerian Trade Scenario

Plimsoll comes seeded with **`PL-2048`**, a real-world import deal:
- **Parties:** Dangote Agro Allied Ltd (Lagos, Nigeria) buying ceramic construction goods from Ningbo Oriental Ceramics.
- **Corridor:** Ningbo Port to **Apapa Port, Lagos, Nigeria** (FOB Ningbo / CIF Lagos).
- **Escrow Amount:** 148,600 DEMOUSD split into 20% Deposit, 60% Carrier Handoff, and 20% Port Clearance.

### The Zero-Trust Demo Path:
1. **Deposit Release:** Initial 20% deposit tranche is unlocked and confirmed on Stellar testnet.
2. **Discrepancy Trigger:** Supplier uploads a packing list stating **148 cartons** of `KC-TILE-30`, while commercial invoice stipulates **160 cartons**.
3. **Smart Contract Hold:** Plimsoll's AI engine detects the discrepancy and blocks release. An attempted payout is rejected by the smart contract.
4. **Correction & Re-anchoring:** Supplier uploads the amended packing list (`tests/fixtures/packing-list-v2-corrected.pdf`). Findings clear instantly.
5. **Multi-Party Consensus:** Independent inspector at Apapa Port and Dangote's buyer sign off on the evidence manifest.
6. **Ledger Settlement & Roqqu Payout:** Funds are distributed on-chain, with the exporter receiving instant liquidity.

---

## 🛡️ Production Deployment Specifications

- **Hosting Platform:** Vercel (Edge & Fluid Serverless Compute)
- **Database:** Supabase Managed PostgreSQL Pooler (`aws-0-eu-west-1.pooler.supabase.com`)
- **Smart Contracts:** Stellar Soroban Testnet (`https://soroban-testnet.stellar.org`)
- **Liquidity Ingress/Egress:** Roqqu Sandbox API + Paystack Test Gateway
- **Vision Model API:** Groq High-Speed Llama 3.2 Vision Inference

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
