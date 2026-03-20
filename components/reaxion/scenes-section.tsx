import Image from "next/image"

export function ScenesSection() {
  const scenes = [
    {
      image: "/images/scene-daycare.jpg",
      label: "デイサービスでの機能訓練",
      title: "日常的な機能評価として",
      desc: "機能訓練の時間に取り入れることで、定期的な反応能力の測定が可能です。短時間での評価が可能なため、通常の訓練メニューに組み込みやすい設計です。",
    },
    {
      image: "/images/scene-rehab.jpg",
      label: "リハビリ前後の評価",
      title: "効果の把握と記録に",
      desc: "リハビリテーション前後に測定を行うことで、訓練の効果を数値で確認することができます。担当者間での情報共有や計画の根拠資料として活用できます。",
    },
    {
      image: null,
      label: "転倒リスクの定期チェック",
      title: "状態変化の早期把握に",
      desc: "定期的な測定により、利用者の反応能力の経時変化を把握できます。状態の変化を早めに確認し、見守り体制や支援内容の見直しに役立てることができます。",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-[var(--section-alt)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-[var(--brand-blue)] tracking-widest uppercase mb-3">Use Cases</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-heading)] text-balance">
            活用シーン
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {scenes.map((scene) => (
            <div
              key={scene.label}
              className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
            >
              {scene.image ? (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={scene.image}
                    alt={scene.label}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[var(--brand-blue)]/10" />
                </div>
              ) : (
                <div className="h-48 bg-[var(--brand-blue-light)] flex items-center justify-center">
                  <div className="text-center">
                    <CalendarIcon />
                    <p className="text-xs text-[var(--brand-blue)] mt-2 font-medium">定期チェック</p>
                  </div>
                </div>
              )}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <span className="text-xs font-semibold text-[var(--brand-blue)] bg-[var(--brand-blue-light)] px-3 py-1 rounded-full self-start">
                  {scene.label}
                </span>
                <h3 className="text-base font-bold text-[var(--text-heading)]">{scene.title}</h3>
                <p className="text-sm text-[var(--text-body)] leading-relaxed">{scene.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CalendarIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--brand-blue)] mx-auto">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="14" x2="8" y2="14" strokeLinecap="round" strokeWidth="2.5" />
      <line x1="12" y1="14" x2="12" y2="14" strokeLinecap="round" strokeWidth="2.5" />
      <line x1="16" y1="14" x2="16" y2="14" strokeLinecap="round" strokeWidth="2.5" />
    </svg>
  )
}
