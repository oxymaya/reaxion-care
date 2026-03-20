export function SafetySection() {
  const safetyPoints = [
    "軽量設計",
    "ケーブルレス構造",
    "座位での使用が可能",
    "職員の見守り下で安全に使用",
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-[var(--brand-blue)] tracking-widest uppercase mb-3">Safety</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-heading)] text-balance">
              安全性
            </h2>
          </div>

          <div className="bg-[var(--hero-bg)] rounded-2xl border border-[var(--border)] p-8 md:p-10">
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {safetyPoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--brand-blue)] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[var(--text-heading)]">{point}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-[var(--divider)] pt-6">
              <p className="text-sm text-[var(--text-body)] leading-relaxed text-center">
                高齢者施設での使用を想定し、安全性と運用しやすさに配慮した設計です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
