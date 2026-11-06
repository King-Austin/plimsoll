import {
  ArrowDown,
  ArrowRight,
  Brain,
  CheckCircle,
  Eye,
  FileText,
  LockSimple,
  Scales,
  ShieldCheck,
  UserCheck,
} from "@phosphor-icons/react/ssr";
import styles from "./ai-schematic.module.css";

export function AiZeroTrustSchematic() {
  return (
    <section className={styles.section} aria-labelledby="ai-schematic-title">
      <div className={styles.wrap}>
        <div className={styles.sectionHeader}>
          <div className={styles.pillBadge}>
            <Brain weight="fill" aria-hidden />
            <span>Multimodal Vision & Zero-Trust Governance</span>
          </div>
          <h2 id="ai-schematic-title" className={styles.sectionTitle}>
            Intelligent Vision Extraction with Zero-Trust Multi-Sig Custody
          </h2>
          <p className={styles.sectionSub}>
            Automating cross-border verification across Africa&apos;s busiest trade corridors. Advanced multimodal vision transcribes bills of lading, packing lists, and Apapa Port inspection slips in seconds, while decentralized smart contracts guarantee complete financial protection.
          </p>
        </div>

        {/* Schematic Flow Container */}
        <div className={styles.diagramCard}>
          <div className={styles.diagramGrid}>
            {/* Step 1: Ingestion */}
            <div className={styles.stepBlock}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNum}>Stage 01</span>
                <span className={styles.stepTag}>Ingestion</span>
              </div>
              <div className={styles.stepIconWrap}>
                <FileText weight="duotone" className={styles.stepIcon} aria-hidden />
              </div>
              <h3>Universal Document Ingestion</h3>
              <p className={styles.stepDesc}>
                Bills of lading, commercial invoices, customs manifests, and port survey slips ingested seamlessly across digital PDFs, scans, and mobile photographs.
              </p>
              <div className={styles.badgeRow}>
                <span className={styles.subPill}>Digital PDFs</span>
                <span className={styles.subPill}>Terminal Scans</span>
              </div>
            </div>

            <div className={styles.flowConnector} aria-hidden>
              <ArrowRight className={styles.desktopArrow} />
              <ArrowDown className={styles.mobileArrow} />
            </div>

            {/* Step 2: Vision Parsing */}
            <div className={styles.stepBlock}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNum}>Stage 02</span>
                <span className={styles.stepTag}>Vision AI</span>
              </div>
              <div className={styles.stepIconWrap}>
                <Eye weight="duotone" className={styles.stepIcon} aria-hidden />
              </div>
              <h3>Multimodal Vision Engine</h3>
              <p className={styles.stepDesc}>
                Neural vision extracts itemized SKU line items, container serials, net/gross weights, and customs numbers with pinpoint character-for-character accuracy.
              </p>
              <div className={styles.guardPill}>
                <ShieldCheck weight="bold" />
                <span>Sub-Second OCR Precision</span>
              </div>
            </div>

            <div className={styles.flowConnector} aria-hidden>
              <ArrowRight className={styles.desktopArrow} />
              <ArrowDown className={styles.mobileArrow} />
            </div>

            {/* Step 3: Deterministic Rule Gate */}
            <div className={styles.stepBlock}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNum}>Stage 03</span>
                <span className={styles.stepTag}>Audit Gate</span>
              </div>
              <div className={styles.stepIconWrap}>
                <Scales weight="duotone" className={styles.stepIcon} aria-hidden />
              </div>
              <h3>Deterministic Verification</h3>
              <p className={styles.stepDesc}>
                Cross-references invoice quantities against physical packing lists and trade terms. Any deviation beyond contracted tolerance immediately protects funds in escrow.
              </p>
              <div className={styles.rulePill}>
                <CheckCircle weight="bold" />
                <span>Deterministic Zero-Error Gate</span>
              </div>
            </div>

            <div className={styles.flowConnector} aria-hidden>
              <ArrowRight className={styles.desktopArrow} />
              <ArrowDown className={styles.mobileArrow} />
            </div>

            {/* Step 4: Human-in-the-Loop Custody */}
            <div className={`${styles.stepBlock} ${styles.humanBlock}`}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNum}>Stage 04</span>
                <span className={styles.stepTagHighlight}>Human Quorum</span>
              </div>
              <div className={styles.stepIconWrapHighlight}>
                <UserCheck weight="fill" className={styles.stepIconHighlight} aria-hidden />
              </div>
              <h3>Multi-Sig Cryptographic Release</h3>
              <p className={styles.stepDesc}>
                AI presents clear, plain-language summaries for rapid decision-making. Importers and accredited port inspectors sign final milestone payouts with Passkeys & wallets.
              </p>
              <div className={styles.successPill}>
                <LockSimple weight="bold" />
                <span>Absolute Human Quorum</span>
              </div>
            </div>
          </div>

          {/* Bottom Callout / Assurance Strip */}
          <div className={styles.schematicFooter}>
            <div className={styles.footerItem}>
              <CheckCircle weight="fill" className={styles.okIcon} aria-hidden />
              <div>
                <strong>Zero-Trust Architecture</strong>
                <p>AI assists with high-speed intelligence while human signers and audited smart contracts retain 100% custody.</p>
              </div>
            </div>
            <div className={styles.footerItem}>
              <CheckCircle weight="fill" className={styles.okIcon} aria-hidden />
              <div>
                <strong>Immutable On-Chain Evidence</strong>
                <p>Every reconciled document hash is cryptographically sealed to the Stellar ledger with SHA-256 proofs.</p>
              </div>
            </div>
            <div className={styles.footerItem}>
              <CheckCircle weight="fill" className={styles.okIcon} aria-hidden />
              <div>
                <strong>Institutional Reliability</strong>
                <p>Dual-engine verification guarantees continuous, high-performance execution across global trade corridors.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
