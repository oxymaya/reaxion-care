export function TargetAndComposition() {
  const targets = [
    { icon: "◎", label: "要支援〜要介護1の方" },
    { icon: "◎", label: "フレイル高齢者" },
    { icon: "◎", label: "軽度認知機能低下（MCI）の方" },
  ]

  const components = [
    {
      icon: <DeviceIcon />,
      label: "反応測定デバイス",
      desc: "軽量・ケーブルレス設計",
    },
    {
      icon: <TabletIcon />,
      label: "タブレット端末",
      desc: "操作・表示用インターフェース",
    },
    {
      icon: <CloudIcon />,
      label: "クラウド管理システム",
      desc: "データ保存・履歴管理・CSV出力",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* 左：対象者 */}
          <div>
            <p className="text-xs font-semibold text-[var(--brand-blue)] tracking-widest uppercase mb-3">Target Users</p>
            <h2 className="text-xl md:text-2xl font-bold text-[var(--text-heading)] mb-2">対象者</h2>
            <div className="w-8 h-0.5 bg-[var(--brand-blue)] mb-6" />
            <p className="text-sm text-[var(--text-caption)] mb-6 leading-relaxed">
              日常生活動作における安全性向上が期待される方を主な対象としています。
            </p>
            <div className="flex flex-col gap-3">
              {targets.map((t) => (
                <div
                  key={t.label}
                  className="flex items-center gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--hero-bg)]"
                >
                  <span className="text-[var(--brand-blue)] font-bold text-lg flex-shrink-0">{t.icon}</span>
                  <span className="text-sm font-medium text-[var(--text-heading)]">{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 右：製品構成 */}
          <div>
            <p className="text-xs font-semibold text-[var(--brand-blue)] tracking-widest uppercase mb-3">Product Configuration</p>
            <h2 className="text-xl md:text-2xl font-bold text-[var(--text-heading)] mb-2">製品構成</h2>
            <div className="w-8 h-0.5 bg-[var(--brand-blue)] mb-6" />
            <p className="text-sm text-[var(--text-caption)] mb-6 leading-relaxed">
              必要な機器一式をセットでご提供。すぐに現場で運用を開始できます。
            </p>
            <div className="flex flex-col gap-4">
              {components.map((c) => (
                <div
                  key={c.label}
                  className="flex items-start gap-4 p-5 rounded-xl border border-[var(--border)] bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-[var(--brand-blue-light)] flex items-center justify-center text-[var(--brand-blue)] flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-heading)]">{c.label}</p>
                    <p className="text-xs text-[var(--text-caption)] mt-0.5">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DeviceIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" strokeWidth="2.5" />
    </svg>
  )
}
function TabletIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" strokeWidth="2.5" />
    </svg>
  )
}
function CloudIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  )
}
