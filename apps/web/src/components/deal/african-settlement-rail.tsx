'use client';

import * as React from 'react';
import {
  ArrowsClockwise,
  CheckCircle,
  Copy,
  CreditCard,
  Globe,
  ShieldCheck,
  X,
} from '@phosphor-icons/react';
import type { DealView } from '@/lib/views';
import styles from './african-settlement-rail.module.css';

interface AfricanSettlementRailProps {
  deal: DealView;
}

export function AfricanSettlementRail({ deal }: AfricanSettlementRailProps) {
  const fxRate = 1350;
  // Calculate total USD and NGN from deal milestones/total
  const totalUSD = deal.chain ? Number(deal.chain.total) : 148600;
  const totalNGN = totalUSD * fxRate;

  const [copied, setCopied] = React.useState(false);
  const [showPaystackModal, setShowPaystackModal] = React.useState(false);
  const [paystackStatus, setPaystackStatus] = React.useState<'idle' | 'processing' | 'success'>('idle');

  const virtualAccount = '9912048591';
  const virtualBank = 'Providus Bank / Roqqu Settlement Desk';

  const handleCopy = () => {
    navigator.clipboard.writeText(virtualAccount);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulatePayment = () => {
    setPaystackStatus('processing');
    setTimeout(() => {
      setPaystackStatus('success');
    }, 1800);
  };

  return (
    <section className={styles.rail} aria-labelledby="african-rail-title">
      <div className={styles.railHead}>
        <div className={styles.railHeadTitle}>
          <ShieldCheck size={20} weight="fill" color="#0ba4db" />
          <h2 id="african-rail-title">African Fiat Rail & Roqqu Liquidity Bridge</h2>
          <span className={styles.badge}>NIGERIA IMPORT CORRIDOR</span>
        </div>

        <div className={styles.ratePill}>
          <span>Roqqu OTC Rate:</span>
          <strong>$1.00 = ₦{fxRate.toLocaleString()} NGN</strong>
        </div>
      </div>

      <div className={styles.grid}>
        {/* Left: Local Nigerian Inflow */}
        <div className={styles.inflowCard}>
          <div className={styles.cardHead}>
            <h3 className={styles.cardTitle}>1. Local Naira Inflow (Buyer)</h3>
            <span className="tiny faint mono">Apapa Port / Lagos</span>
          </div>

          <div className={styles.bankDetails}>
            <div className={styles.row}>
              <label>Corridor Valuation:</label>
              <span>${totalUSD.toLocaleString()} USD (₦{totalNGN.toLocaleString()} NGN)</span>
            </div>
            <div className={styles.row}>
              <label>Beneficiary Bank:</label>
              <span>{virtualBank}</span>
            </div>
            <div className={styles.row}>
              <label>Virtual Account No:</label>
              <div className={styles.accNumber}>
                <span>{virtualAccount}</span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className={styles.copyBtn}
                  title="Copy account number"
                >
                  <Copy size={14} />
                </button>
                {copied && <span style={{ color: '#3fb950', fontSize: '10px' }}>Copied!</span>}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowPaystackModal(true)}
            className={styles.paystackBtn}
          >
            <CreditCard size={16} weight="bold" />
            <span>Test Paystack NGN Deposit (₦{totalNGN.toLocaleString()})</span>
          </button>
        </div>

        {/* Right: Roqqu Liquidity Telemetry & Off-Ramp */}
        <div className={styles.liquidityCard}>
          <div className={styles.liquidityHead}>
            <div className={styles.roqquBrand}>
              <ArrowsClockwise size={16} weight="bold" />
              <span>Roqqu Liquidity Bridge</span>
            </div>
            <span className="tiny mono" style={{ color: '#3fb950' }}>ACTIVE ENGINE</span>
          </div>

          <ul className={styles.telemetryList}>
            <li className={styles.telemetryItem}>
              <span className={`${styles.dot} ${styles.dotSuccess}`} />
              <div>
                <strong>Naira Settlement Captured:</strong> Direct NIP webhook verification via Paystack / Providus virtual rail.
              </div>
            </li>
            <li className={styles.telemetryItem}>
              <span className={`${styles.dot} ${styles.dotSuccess}`} />
              <div>
                <strong>Roqqu Treasury Conversion:</strong> Automated swap of ₦{totalNGN.toLocaleString()} to {totalUSD.toLocaleString()} DEMOUSD/USDC at ₦{fxRate}/$.
              </div>
            </li>
            <li className={styles.telemetryItem}>
              <span className={`${styles.dot} ${styles.dotActive}`} />
              <div>
                <strong>Stellar Soroban Settlement:</strong> Funds locked into Deal Tranches ({deal.reference}). Released strictly per milestone verification.
              </div>
            </li>
          </ul>

          <div style={{ borderTop: '1px solid #30363d', paddingTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '11px', color: '#8b949e' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Globe size={14} />
              <span>Overseas Exporter Off-Ramp:</span>
            </span>
            <strong style={{ color: '#e6edf3' }}>Roqqu Global USD Wire / Stellar USDC</strong>
          </div>
        </div>
      </div>

      {/* Paystack Test Modal */}
      {showPaystackModal && (
        <div className={styles.modalBackdrop} onClick={() => setShowPaystackModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHead}>
              <h3>Paystack Test Gateway (Nigeria)</h3>
              <button
                type="button"
                onClick={() => setShowPaystackModal(false)}
                className={styles.closeBtn}
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ fontSize: '13px', lineHeight: 1.5, color: '#444' }}>
              <p style={{ margin: '0 0 10px' }}>
                Simulating direct payment for trade <strong>{deal.reference}</strong>:
              </p>
              <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '14px', fontFamily: 'var(--font-data)' }}>
                <div>Amount: <strong>₦{totalNGN.toLocaleString()} NGN</strong></div>
                <div>Equivalent: <strong>${totalUSD.toLocaleString()} USD</strong> (Rate: ₦{fxRate})</div>
                <div>Customer: <strong>Amara Okafor (Lagos Auto & Solar Imports Ltd)</strong></div>
              </div>

              {paystackStatus === 'success' ? (
                <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', color: '#065f46', padding: '12px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                  <CheckCircle size={20} weight="fill" color="#059669" />
                  <span>Transaction Successful! Webhook relayed to Roqqu Bridge.</span>
                </div>
              ) : (
                <button
                  type="button"
                  disabled={paystackStatus === 'processing'}
                  onClick={handleSimulatePayment}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    background: '#0ba4db',
                    color: '#fff',
                    border: 0,
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: paystackStatus === 'processing' ? 'default' : 'pointer',
                  }}
                >
                  {paystackStatus === 'processing'
                    ? 'Confirming on NIP Switch...'
                    : `Authorize ₦${totalNGN.toLocaleString()} Transfer (Simulated)`}
                </button>
              )}
            </div>

            <div style={{ textAlign: 'center', fontSize: '10.5px', color: '#888', borderTop: '1px solid #f1f1f1', paddingTop: '8px' }}>
              Secured by Paystack Integration // Liquidity via Roqqu African Corridor
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

