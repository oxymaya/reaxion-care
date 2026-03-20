export function SpecsSection() {
  const specs = [
    { label: "製品名", value: "REAXION CARE" },
    { label: "型番", value: "RX-CAR-01-6P" },
    { label: "カテゴリ", value: "機能訓練支援機器" },
    { label: "電源", value: "充電式" },
    { label: "通信方式", value: "Bluetooth Low Energy" },
    { label: "使用環境", value: "屋内" },
    { label: "使用時間", value: "5〜10分 ／ 回" },
  ]

  return (
    <section id="specs" className="py-20 md:py-28 bg-[var(--section-alt)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-[var(--brand-blue)] tracking-widest uppercase mb-3">Specifications</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-heading)] text-balance">
              主な仕様
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden shadow-sm">
            {specs.map((spec, i) => (
              <div
                key={spec.label}
                className={`flex items-center ${
                  i !== specs.length - 1 ? "border-b border-[var(--border)]" : ""
                }`}
              >
                <div className="w-40 md:w-52 flex-shrink-0 px-6 py-4 bg-[var(--hero-bg)] border-r border-[var(--border)]">
                  <span className="text-xs font-semibold text-[var(--text-caption)] tracking-wide">{spec.label}</span>
                </div>
                <div className="flex-1 px-6 py-4">
                  <span className="text-sm font-medium text-[var(--text-heading)]">{spec.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
