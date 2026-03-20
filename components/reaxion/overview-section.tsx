export function OverviewSection() {
  return (
    <section id="overview" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* 左：本文 */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs font-semibold text-[var(--brand-blue)] tracking-widest uppercase mb-3">Product Overview</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-heading)] leading-snug text-balance">
                製品概要
              </h2>
            </div>
            <div className="w-12 h-0.5 bg-[var(--brand-blue)]" />
            <p className="text-base text-[var(--text-body)] leading-relaxed">
              REAXION CAREは、高齢者の注意機能および反応能力を評価し、日常生活動作の安全性向上および転倒リスク低減を支援する機能訓練支援機器です。
            </p>
            <p className="text-base text-[var(--text-body)] leading-relaxed">
              光刺激に対する反応時間や判断課題における正答率を測定し、危険回避能力の評価指標として活用します。継続的な測定により利用者の状態変化を把握し、見守り支援および機能訓練の評価にも活用できます。
            </p>
            <div className="p-5 bg-[var(--hero-bg)] rounded-xl border border-[var(--border)]">
              <p className="text-sm text-[var(--text-caption)] leading-relaxed">
                <span className="font-semibold text-[var(--text-heading)]">対象：</span>
                要支援〜要介護1・フレイル高齢者・軽度認知機能低下（MCI）の方
              </p>
            </div>
          </div>

          {/* 右：評価指標カード */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-[var(--text-caption)] mb-1">主な評価指標</p>
            {[
              {
                icon: <ClockIcon />,
                title: "反応時間",
                desc: "光刺激に対する反応速度を計測",
              },
              {
                icon: <CheckCircleIcon />,
                title: "正答率",
                desc: "判断課題における正確性を数値化",
              },
              {
                icon: <TrendingIcon />,
                title: "判断速度",
                desc: "認知・判断のスピードを継続的に把握",
              },
              {
                icon: <AlertIcon />,
                title: "危険回避能力",
                desc: "転倒リスクの定量評価指標として活用",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--brand-blue-light)] flex items-center justify-center flex-shrink-0 text-[var(--brand-blue)]">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--text-heading)]">{item.title}</p>
                  <p className="text-xs text-[var(--text-caption)] mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
function CheckCircleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
function TrendingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  )
}
function AlertIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  )
}
