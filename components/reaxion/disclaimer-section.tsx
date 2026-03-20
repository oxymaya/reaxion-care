export function DisclaimerSection() {
  return (
    <section className="py-12 bg-[var(--section-alt)] border-y border-[var(--divider)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-[var(--border)]">
            <div className="w-8 h-8 rounded-lg bg-[var(--brand-blue-light)] flex items-center justify-center flex-shrink-0 mt-0.5">
              <InfoIcon />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[var(--text-heading)] mb-2">重要事項</h3>
              <p className="text-sm text-[var(--text-body)] leading-relaxed">
                本製品は医療機器ではありません。機能訓練および評価支援を目的とした機器です。利用者の状態に応じて適切に使用してください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--brand-blue)]">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" strokeLinecap="round" strokeWidth="2.5" />
    </svg>
  )
}
