export function FeaturesSection() {
  const features = [
    {
      icon: <ActivityIcon />,
      title: "反応能力の定量評価",
      subtitle: "反応時間・正答率・判断速度を数値で可視化",
      impact: "「感覚的な把握」から「根拠ある評価」へ。職員間での共有や記録作成がスムーズになります。",
    },
    {
      icon: <RadarIcon />,
      title: "転倒リスクの可視化",
      subtitle: "測定結果をもとに状態把握とリスク評価に活用",
      impact: "定期チェックにより利用者の変化を早期に把握し、適切な見守り計画の見直しに役立ちます。",
    },
    {
      icon: <ClipboardIcon />,
      title: "機能訓練支援",
      subtitle: "利用者の状態に応じた継続的な支援に活用",
      impact: "訓練前後の比較が数値で確認でき、個別計画の根拠として機能訓練記録に活用できます。",
    },
    {
      icon: <DatabaseIcon />,
      title: "データ管理",
      subtitle: "クラウド保存・履歴管理・CSV出力に対応",
      impact: "測定履歴をクラウドで一元管理。CSV出力で既存の記録様式への転記や報告書作成を支援します。",
    },
  ]

  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-[var(--brand-blue)] tracking-widest uppercase mb-3">Features</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-heading)] text-balance">
            REAXION CAREでできること
          </h2>
          <p className="text-sm text-[var(--text-caption)] mt-3 max-w-lg mx-auto leading-relaxed">
            現場に導入することで、日常業務のなかに「定量的な評価」の視点を自然に取り入れることができます。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((item, i) => (
            <div
              key={item.title}
              className="group relative bg-white rounded-2xl border border-[var(--border)] p-8 flex flex-col gap-5 shadow-sm hover:shadow-lg hover:border-[var(--brand-blue)]/30 transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--brand-blue-light)] flex items-center justify-center text-[var(--brand-blue)] flex-shrink-0 group-hover:bg-[var(--brand-blue)] group-hover:text-white transition-colors duration-200">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-[var(--brand-blue)] font-semibold">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-base font-bold text-[var(--text-heading)]">{item.title}</h3>
                  <p className="text-sm text-[var(--brand-blue-mid)] mt-1">{item.subtitle}</p>
                </div>
              </div>
              <div className="border-t border-[var(--border)] pt-4">
                <p className="text-sm text-[var(--text-body)] leading-relaxed">{item.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ActivityIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}
function RadarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="2" />
      <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
    </svg>
  )
}
function ClipboardIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="16" x2="15" y2="16" />
    </svg>
  )
}
function DatabaseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  )
}
