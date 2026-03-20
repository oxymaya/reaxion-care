import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-[var(--hero-bg)] overflow-hidden">
      {/* 淡い装飾ライン */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/40 rounded-bl-[80px] hidden md:block" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 左：テキスト */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="inline-block px-3 py-1 text-xs font-medium text-[var(--brand-blue)] bg-[var(--brand-blue-light)] rounded-full border border-[var(--brand-blue)]/20 tracking-wide">
                機能訓練支援機器
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-heading)] leading-tight tracking-tight text-balance">
              REAXION CARE
            </h1>

            <p className="text-lg md:text-xl text-[var(--brand-blue-mid)] font-medium leading-relaxed text-balance">
              転倒リスクを可視化する機能訓練支援デバイス
            </p>

            <p className="text-base text-[var(--text-body)] leading-relaxed">
              高齢者の注意機能および反応能力を評価し、日常生活動作の安全性向上と転倒リスク低減を支援します。
            </p>

            {/* 補足バッジ */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { label: "型番", value: "RX-CAR-01-6P" },
                { label: "使用環境", value: "屋内" },
                { label: "評価時間", value: "5〜10分" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-[var(--border)] shadow-sm"
                >
                  <span className="text-xs text-[var(--text-caption)]">{item.label}</span>
                  <span className="text-xs font-semibold text-[var(--text-heading)]">{item.value}</span>
                </div>
              ))}
            </div>

            {/* CTAボタン */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2" id="contact-anchor">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3 bg-[var(--brand-blue)] text-white text-sm font-medium rounded-lg hover:bg-[oklch(0.38_0.1_230)] transition-colors duration-200"
              >
                導入のご相談
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3 border border-[var(--brand-blue)] text-[var(--brand-blue)] text-sm font-medium rounded-lg hover:bg-[var(--brand-blue-light)] transition-colors duration-200"
              >
                資料請求
              </a>
            </div>
          </div>

          {/* 右：メイン画像 */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[var(--border)]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reaxioncare1.JPG-VvA493wTDBaRwobcjMpv20OWiwhBBT.jpeg"
                alt="デイサービス施設でスタッフがREAXION CAREを使用し、複数の利用者が見守っている様子"
                width={640}
                height={480}
                className="w-full object-cover"
                priority
              />
            </div>
            {/* 小さなフローティングカード */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-md border border-[var(--border)] px-4 py-3 hidden md:flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[var(--brand-blue-light)] flex items-center justify-center">
                <ShieldIcon />
              </div>
              <div>
                <p className="text-xs font-semibold text-[var(--text-heading)]">安全設計</p>
                <p className="text-xs text-[var(--text-caption)]">座位・ケーブルレス</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ShieldIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--brand-blue)]">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}
