"use client";

import { useState, useEffect } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowsClockwise,
  Bank,
  CheckCircle,
  CurrencyNgn,
  FileText,
  LockKey,
  LockSimple,
  LockSimpleOpen,
  Pause,
  Play,
  SealCheck,
  ShieldCheck,
  WarningOctagon,
} from "@phosphor-icons/react";
import styles from "./escrow-flow-simulator.module.css";

type Scenario = "success" | "refund";
type StepIndex = 0 | 1 | 2 | 3;

interface StepInfo {
  num: string;
  title: string;
  badge: string;
}

const STEPS: StepInfo[] = [
  { num: "01", title: "Funding Ingress", badge: "Dual-Rail Ingress" },
  { num: "02", title: "Neutral Escrow Lockbox", badge: "Soroban Smart Contract" },
  { num: "03", title: "AI Verification & Signatures", badge: "Vision + Multi-Sig" },
  { num: "04", title: "Settlement & Clearing", badge: "Automated Execution" },
];

export function EscrowFlowSimulator() {
  const [scenario, setScenario] = useState<Scenario>("success");
  const [currentStep, setCurrentStep] = useState<StepIndex>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Auto-play interval
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStep((prev) => ((prev + 1) % 4) as StepIndex);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className={styles.section} aria-labelledby="flow-simulator-title">
      <div className={styles.wrap}>
        {/* Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.pillBadge}>
            <ShieldCheck weight="fill" aria-hidden />
            <span>Interactive Architecture Walkthrough</span>
          </div>
          <h2 id="flow-simulator-title" className={styles.sectionTitle}>
            How Money &amp; Trust Move: The Zero-Custody Escrow Flow
          </h2>
          <p className={styles.sectionSub}>
            Demystifying trade finance for non-Web3 importers and international suppliers. Watch how funds lock securely in a neutral on-chain lockbox, verify through AI and port inspections, and settle directly to local bank accounts.
          </p>
        </div>

        {/* Interactive Controls Bar */}
        <div className={styles.controlBar}>
          <div className={styles.scenarioToggleGroup} role="tablist" aria-label="Trade Outcome Scenarios">
            <button
              type="button"
              role="tab"
              aria-selected={scenario === "success"}
              className={`${styles.scenarioBtn} ${scenario === "success" ? styles.activeScenario : ""}`}
              onClick={() => {
                setScenario("success");
                setCurrentStep(0);
              }}
            >
              <CheckCircle weight="fill" className={styles.scenarioIconSuccess} />
              <span>Happy Path: Successful Delivery &amp; Roqqu Payout</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={scenario === "refund"}
              className={`${styles.scenarioBtn} ${scenario === "refund" ? styles.activeScenarioRefund : ""}`}
              onClick={() => {
                setScenario("refund");
                setCurrentStep(0);
              }}
            >
              <WarningOctagon weight="fill" className={styles.scenarioIconRefund} />
              <span>Safety Net: Discrepancy &amp; Full Buyer Refund</span>
            </button>
          </div>

          <div className={styles.playbackControls}>
            <button
              type="button"
              className={styles.playPauseBtn}
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause automated flow" : "Play automated flow"}
              title={isPlaying ? "Pause automated flow" : "Play automated flow"}
            >
              {isPlaying ? <Pause weight="fill" /> : <Play weight="fill" />}
              <span>{isPlaying ? "Pause" : "Play"}</span>
            </button>

            {/* Stepper buttons */}
            <div className={styles.stepperDots}>
              {STEPS.map((s, idx) => (
                <button
                  key={s.num}
                  type="button"
                  onClick={() => {
                    setCurrentStep(idx as StepIndex);
                    setIsPlaying(false);
                  }}
                  className={`${styles.stepDotBtn} ${currentStep === idx ? styles.activeStepDot : ""}`}
                  aria-label={`Jump to stage ${s.num}: ${s.title}`}
                >
                  <span className={styles.stepDotNum}>{s.num}</span>
                  <span className={styles.stepDotLabel}>{s.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Visual Animated Workflow Diagram */}
        <div className={styles.flowCanvas}>
          {/* STAGE 1: FUNDING INGRESS */}
          <div className={`${styles.nodeCard} ${currentStep === 0 ? styles.activeNode : currentStep > 0 ? styles.completedNode : ""}`}>
            <div className={styles.nodeHeader}>
              <div className={styles.stepTag}>Stage 01 · Ingress</div>
              <span className={styles.nodeStatusPill}>
                {currentStep === 0 ? "⚡ Funds Depositing" : currentStep > 0 ? "✓ Funded in Full" : "Pending"}
              </span>
            </div>
            <div className={styles.nodeIconWrap}>
              <Bank weight="duotone" className={styles.nodeIcon} />
            </div>
            <h3 className={styles.nodeTitle}>Buyer Initiates Funding</h3>
            <p className={styles.nodeDesc}>
              Dangote Agro Allied (Lagos) funds the trade agreement. Non-Web3 importers pay directly via Nigerian banking rails without touching crypto wallets.
            </p>
            <div className={styles.railBadges}>
              <div className={styles.railBadge}>
                <span className={styles.railDotPaystack} />
                <span>Paystack (Naira Card / Bank Transfer)</span>
              </div>
              <div className={styles.railBadge}>
                <span className={styles.railDotRoqqu} />
                <span>Roqqu Liquidity Bridge (₦1,350 / USD)</span>
              </div>
            </div>
            <div className={styles.amountDisplay}>
              <span className={styles.amountLabel}>Total Trade Value:</span>
              <span className={styles.amountValue}>$148,600.00 DEMOUSD</span>
              <span className={styles.amountNaira}>≈ ₦200,610,000 NGN</span>
            </div>
          </div>

          {/* CONNECTOR 1 -> 2 */}
          <div className={`${styles.pipeConnector} ${currentStep >= 1 ? styles.pipeActive : ""}`} aria-hidden>
            <div className={styles.pipeTrack}>
              <div className={styles.streamParticle} />
            </div>
            <div className={styles.pipeIconWrap}>
              <ArrowDown className={styles.pipeArrow} />
            </div>
            <span className={styles.pipeLabel}>Locked into Smart Contract</span>
          </div>

          {/* STAGE 2: NEUTRAL ESCROW LOCKBOX */}
          <div className={`${styles.lockboxCard} ${currentStep === 1 ? styles.activeNode : currentStep > 1 ? styles.completedNode : ""}`}>
            <div className={styles.lockboxGlow} />
            <div className={styles.lockboxHeader}>
              <div className={styles.vaultPill}>
                <LockKey weight="fill" className={styles.vaultIcon} />
                <span>Zero-Custody Escrow Vault</span>
              </div>
              <span className={styles.lockboxStatusBadge}>
                {currentStep < 1
                  ? "Awaiting Ingress"
                  : currentStep === 1
                  ? "🔒 Encrypted & Sealed"
                  : currentStep === 2
                  ? "🔍 Verification in Progress"
                  : scenario === "success"
                  ? "🔓 Unlocked & Disbursing"
                  : "🛡️ Safety Reversal Triggered"}
              </span>
            </div>

            <div className={styles.lockboxMain}>
              <div className={styles.vaultVisual}>
                <div className={styles.padlockRing}>
                  {currentStep === 3 && scenario === "success" ? (
                    <LockSimpleOpen weight="fill" className={styles.padlockOpen} />
                  ) : (
                    <LockSimple weight="fill" className={styles.padlockShut} />
                  )}
                </div>
                <div className={styles.vaultInfo}>
                  <h3 className={styles.vaultTitle}>Neutral Soroban Escrow Contract</h3>
                  <p className={styles.vaultSubtitle}>
                    Contract ID: <code className={styles.codeHash}>CCEYFN...7Y47WX</code> (Stellar Testnet)
                  </p>
                </div>
              </div>

              <div className={styles.vaultRuleBox}>
                <p className={styles.vaultRuleText}>
                  <strong>The Zero-Trust Guarantee:</strong> Neither the Buyer nor the Supplier can seize, withdraw, or tamper with these funds while in escrow. Payout occurs strictly when predetermined cryptographic rules clear.
                </p>
              </div>

              <div className={styles.vaultMetricGrid}>
                <div className={styles.vaultMetric}>
                  <span className={styles.vMetricLabel}>Escrow Balance</span>
                  <span className={styles.vMetricVal}>$148,600 DEMOUSD</span>
                </div>
                <div className={styles.vaultMetric}>
                  <span className={styles.vMetricLabel}>Custody Mode</span>
                  <span className={styles.vMetricVal}>Non-Custodial</span>
                </div>
                <div className={styles.vaultMetric}>
                  <span className={styles.vMetricLabel}>Settlement Speed</span>
                  <span className={styles.vMetricVal}>5-Second Finality</span>
                </div>
              </div>
            </div>
          </div>

          {/* CONNECTOR 2 -> 3 */}
          <div className={`${styles.pipeConnector} ${currentStep >= 2 ? styles.pipeActive : ""}`} aria-hidden>
            <div className={styles.pipeTrack}>
              <div className={styles.streamParticle} />
            </div>
            <div className={styles.pipeIconWrap}>
              <ArrowDown className={styles.pipeArrow} />
            </div>
            <span className={styles.pipeLabel}>Audited by AI &amp; Human Quorum</span>
          </div>

          {/* STAGE 3: AI VERIFICATION & DUAL SIGNATURES */}
          <div className={`${styles.nodeCard} ${currentStep === 2 ? styles.activeNode : currentStep > 2 ? styles.completedNode : ""}`}>
            <div className={styles.nodeHeader}>
              <div className={styles.stepTag}>Stage 03 · Verification Gate</div>
              <span className={styles.nodeStatusPill}>
                {currentStep === 2 ? "⚡ Verifying Documents" : currentStep > 2 ? "✓ Evidence Anchored" : "Pending"}
              </span>
            </div>
            <div className={styles.nodeIconWrap}>
              <FileText weight="duotone" className={styles.nodeIcon} />
            </div>
            <h3 className={styles.nodeTitle}>AI Multimodal Check + Dual Signatures</h3>
            <p className={styles.nodeDesc}>
              Shipping documents are checked against contractual terms. Signatures from appointed human parties are captured to authorize release.
            </p>

            <div className={styles.checklistBox}>
              <div className={styles.checkItem}>
                <span className={styles.checkIconSuccess}>
                  <CheckCircle weight="fill" />
                </span>
                <span>
                  <strong>AI Document Cross-Check:</strong> Invoice &amp; Packing List matched (160/160 cartons).
                </span>
              </div>
              <div className={styles.checkItem}>
                <span className={styles.checkIconSuccess}>
                  <SealCheck weight="fill" />
                </span>
                <span>
                  <strong>Port Inspector Quorum:</strong> Apapa Marine Inspection certified seal &amp; container weight.
                </span>
              </div>
              <div className={styles.checkItem}>
                <span className={styles.checkIconSuccess}>
                  <CheckCircle weight="fill" />
                </span>
                <span>
                  <strong>Buyer Receipt Authorization:</strong> Dangote Agro Allied approves release tranche.
                </span>
              </div>
            </div>
          </div>

          {/* CONNECTOR 3 -> 4 */}
          <div className={`${styles.pipeConnector} ${currentStep >= 3 ? styles.pipeActive : ""}`} aria-hidden>
            <div className={styles.pipeTrack}>
              <div className={styles.streamParticle} />
            </div>
            <div className={styles.pipeIconWrap}>
              <ArrowDown className={styles.pipeArrow} />
            </div>
            <span className={styles.pipeLabel}>
              {scenario === "success" ? "Conditions Satisfied → Unlocking Escrow" : "Discrepancy Triggered → Safety Reverse"}
            </span>
          </div>

          {/* STAGE 4: FORKED OUTCOMES */}
          <div className={styles.outcomeRow}>
            {/* Outcome A: Success Supplier Payout */}
            <div
              className={`${styles.outcomeCard} ${scenario === "success" ? styles.outcomeCardActive : styles.outcomeCardDimmed} ${
                currentStep === 3 && scenario === "success" ? styles.activeNode : ""
              }`}
            >
              <div className={styles.outcomeHeader}>
                <div className={styles.outcomeTagSuccess}>Outcome A · Payout Unlocked</div>
                <span className={styles.outcomeBadgeSuccess}>Instant Liquidity</span>
              </div>
              <div className={styles.outcomeIconSuccess}>
                <CurrencyNgn weight="bold" />
              </div>
              <h4 className={styles.outcomeTitle}>Supplier Receives Payout via Roqqu</h4>
              <p className={styles.outcomeDesc}>
                Smart contract unlocks funds and streams them directly to the exporter. Roqqu converts stablecoins to local Naira (₦) or fiat and delivers funds directly into their commercial bank account.
              </p>
              <div className={styles.payoutDetail}>
                <div className={styles.payoutRow}>
                  <span>Disbursed from Escrow:</span>
                  <strong>$148,600.00 DEMOUSD</strong>
                </div>
                <div className={styles.payoutRow}>
                  <span>Roqqu FX Settlement:</span>
                  <strong className={styles.roqquRate}>₦1,350 / USD</strong>
                </div>
                <div className={styles.payoutRow}>
                  <span>Destination:</span>
                  <strong>Nigerian Commercial Bank (GTB / Zenith / Access)</strong>
                </div>
              </div>
            </div>

            {/* Outcome B: Safety Net Full Buyer Refund */}
            <div
              className={`${styles.outcomeCard} ${scenario === "refund" ? styles.outcomeCardActiveRefund : styles.outcomeCardDimmed} ${
                currentStep === 3 && scenario === "refund" ? styles.activeNodeRefund : ""
              }`}
            >
              <div className={styles.outcomeHeader}>
                <div className={styles.outcomeTagRefund}>Outcome B · Safety Net Reversal</div>
                <span className={styles.outcomeBadgeRefund}>100% Capital Protection</span>
              </div>
              <div className={styles.outcomeIconRefund}>
                <ShieldCheck weight="bold" />
              </div>
              <h4 className={styles.outcomeTitle}>Full 100% Refund to Buyer</h4>
              <p className={styles.outcomeDesc}>
                If supplier fails to ship, provides counterfeit documentation, or inspection fails, the contract strictly refuses release. The escrow automatically refunds the entire principal back to the Nigerian importer.
              </p>
              <div className={styles.refundDetail}>
                <div className={styles.payoutRow}>
                  <span>Protection Trigger:</span>
                  <strong>Unresolved Discrepancy / Non-Delivery</strong>
                </div>
                <div className={styles.payoutRow}>
                  <span>Escrow Action:</span>
                  <strong className={styles.refundAction}>Contract Invariant Lock</strong>
                </div>
                <div className={styles.payoutRow}>
                  <span>Refund Output:</span>
                  <strong>100% Capital Returned to Buyer</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Summary Footer */}
        <div className={styles.summaryGrid}>
          <div className={styles.summaryCard}>
            <div className={styles.summaryIcon}>🛡️</div>
            <h4>Zero Prepayment Risk for Buyers</h4>
            <p>You never wire money blindly to overseas suppliers. Your capital stays protected in neutral on-chain escrow until verified goods reach port.</p>
          </div>
          <div className={styles.summaryCard}>
            <div className={styles.summaryIcon}>📦</div>
            <h4>Zero Non-Payment Risk for Suppliers</h4>
            <p>You never manufacture or ship on credit. You see 100% of the funds verified and locked on the blockchain before loading a single container.</p>
          </div>
          <div className={styles.summaryCard}>
            <div className={styles.summaryIcon}>🏦</div>
            <h4>Zero Crypto Friction for Real Merchants</h4>
            <p>African importers pay via Paystack cards or bank transfers; suppliers receive funds in cash or local currency via Roqqu liquidity.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
