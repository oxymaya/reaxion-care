export function ChallengesSection() {
  const challenges = [
    {
      icon: <EyeOffIcon />,
      title: "転倒リスクが把握できていない",
      desc: "日常業務のなかで、利用者ひとりひとりのリスク状態を定期的に確認することが難しい。",
    },
    {
      icon: <BarChartIcon />,
      title: "機能訓練の効果が定量化できない",
      desc: "訓練の成果を数値で示すことができず、計画や評価の根拠が曖昧になりがち。",
    },
    {
      icon: <UserIcon />,
      title: "評価が職員の主観に依存している",
      desc: "担当者によって評価の基準が異なり、客観的な記録・引き継ぎが難しい状況がある。",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-[var(--section-alt)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-[var(--brand-blue)] tracking-widest uppercase mb-3">Challenges</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-heading)] text-balance">
            このような課題はありませんか？
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {challenges.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border border-[var(--border)] p-7 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--brand-blue-light)] flex items-center justify-center text-[var(--brand-blue)]">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-[var(--text-heading)] leading-snug">{item.title}</h3>
              <p className="text-sm text-[var(--text-body)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* ブリッジ文 */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-8 h-0.5 bg-[var(--brand-blue)] mx-auto mb-5" />
          <p className="text-base text-[var(--text-body)] leading-relaxed">
            REAXION CAREは、反応能力の可視化を通じて、状態把握と機能訓練支援をより確かなものにします。
          </p>
        </div>
      </div>
    </section>
  )
}

function EyeOffIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  )
}
function BarChartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  )
}
function UserIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
