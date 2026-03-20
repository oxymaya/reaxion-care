"use client"

import { Check, Package, Tablet, Box, Cable, Cloud, Shield, ArrowRight } from "lucide-react"

export function PricingSection() {
  const packageItems = [
    { icon: Package, label: "REAXION本体" },
    { icon: Tablet, label: "専用タブレット（アプリインストール済み）" },
    { icon: Box, label: "専用什器" },
    { icon: Cable, label: "充電ケーブル" },
    { icon: Cloud, label: "3年間クラウド利用料" },
  ]

  const subsidyBenefits = [
    "実質負担を軽減",
    "初期導入のハードル低下",
    "施設のDX推進に対応",
  ]

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[var(--section-alt)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* 料金セクション */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-[var(--brand-blue)] tracking-widest uppercase mb-3">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-heading)] leading-tight text-balance">
            ご利用料金
          </h2>
        </div>

        {/* メイン価格カード */}
        <div className="bg-white rounded-2xl shadow-lg border border-[var(--border)] overflow-hidden mb-16">
          <div className="bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-blue-mid)] p-6 text-center">
            <p className="text-white/90 text-sm font-medium mb-1">オールインワンパッケージ</p>
            <p className="text-white text-lg font-semibold">すべてセットで導入いただけます</p>
          </div>
          
          <div className="p-8 md:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* セット内容 */}
              <div className="flex-1">
                <p className="text-sm font-semibold text-[var(--text-heading)] mb-4">セット内容</p>
                <ul className="space-y-3">
                  {packageItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-[var(--text-body)]">
                      <span className="w-8 h-8 rounded-lg bg-[var(--brand-blue-light)] flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-[var(--brand-blue)]" />
                      </span>
                      <span className="text-sm">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 価格 */}
              <div className="lg:text-right">
                <div className="inline-block lg:block">
                  <p className="text-sm text-[var(--text-caption)] mb-2">税込価格</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl md:text-6xl font-bold text-[var(--brand-blue)]">298,000</span>
                    <span className="text-xl font-medium text-[var(--text-heading)]">円</span>
                  </div>
                </div>
                
                {/* 補償バッジ */}
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-[var(--brand-blue-light)] rounded-full">
                  <Shield className="w-4 h-4 text-[var(--brand-blue)]" />
                  <span className="text-sm font-medium text-[var(--brand-blue)]">3年間センドバック補償付き</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 補助金セクション */}
        <div className="bg-gradient-to-br from-[var(--brand-blue-light)] to-white rounded-2xl border border-[var(--brand-blue)]/20 p-8 md:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1">
              <p className="text-sm font-medium text-[var(--brand-blue)] tracking-widest uppercase mb-3">Subsidy Support</p>
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-heading)] mb-4">
                補助金活用で導入可能
              </h3>
              <p className="text-[var(--text-body)] leading-relaxed mb-6">
                介護ICT・設備補助金の対象となる可能性があります。<br />
                導入コストを大幅に抑えてスタートできます。
              </p>
              
              {/* ベネフィット */}
              <ul className="flex flex-wrap gap-3 mb-6">
                {subsidyBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[var(--border)] text-sm text-[var(--text-body)]">
                    <Check className="w-4 h-4 text-[var(--brand-blue)]" />
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#inquiry-form"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand-blue)] text-white text-sm font-semibold rounded-lg hover:bg-[var(--brand-blue-mid)] transition-colors duration-200"
              >
                補助金相談はこちら
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* アイコンイラスト */}
            <div className="hidden lg:flex items-center justify-center w-48 h-48 bg-white rounded-2xl shadow-sm border border-[var(--border)]">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-[var(--brand-blue-light)] rounded-full flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--brand-blue)]">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <p className="text-xs text-[var(--text-caption)]">補助金で<br />コスト削減</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
