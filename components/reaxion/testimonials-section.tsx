"use client"

import { Quote } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      category: "利用者",
      quote: "光るボタンを押すだけなので、難しいことを考えなくてもできました。自分の反応が数字で見えるのは励みになります。",
      name: "T.K.",
      role: "80代女性 / デイサービス利用",
      bgColor: "bg-[var(--brand-blue-light)]/50",
      image: "/images/testimonial-user.jpg",
    },
    {
      category: "介護スタッフ",
      quote: "操作が簡単で、忙しい業務の合間にも測定できます。数値で記録が残るので、ご家族への説明もしやすくなりました。",
      name: "S.M.",
      role: "介護福祉士 / デイサービス勤務",
      bgColor: "bg-[var(--section-alt)]",
      image: "/images/testimonial-caregiver.jpg",
    },
    {
      category: "理学療法士",
      quote: "反応時間の変化を定量的に追えるのは、機能訓練計画を立てる上で非常に参考になります。利用者さんのモチベーション維持にも役立っています。",
      name: "A.H.",
      role: "理学療法士 / 通所リハビリ勤務",
      bgColor: "bg-[var(--brand-blue-light)]/50",
      image: "/images/testimonial-pt.jpg",
    },
    {
      category: "経営者",
      quote: "加算要件に対応した記録作成の負担が減り、スタッフの働きやすさにつながっています。利用者様へのサービス品質向上にも貢献していると感じます。",
      name: "Y.N.",
      role: "デイサービス管理者",
      bgColor: "bg-[var(--section-alt)]",
      image: "/images/testimonial-manager.jpg",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-[var(--brand-blue)] tracking-widest uppercase mb-3">
            Voices
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-heading)] text-balance">
            ご利用者の声
          </h2>
          <p className="text-sm text-[var(--text-caption)] mt-3 max-w-lg mx-auto leading-relaxed">
            導入いただいた施設の皆様からお寄せいただいたご感想です。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} rounded-2xl p-8 relative`}
            >
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-[var(--brand-blue)]/10" />
              </div>
              
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium text-[var(--brand-blue)] bg-white rounded-full border border-[var(--border)]">
                  {item.category}
                </span>
              </div>
              
              <p className="text-sm text-[var(--text-body)] leading-relaxed mb-6">
                {item.quote}
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <Image
                    src={item.image}
                    alt={`${item.category}のイメージ`}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--text-heading)]">{item.name}</p>
                  <p className="text-xs text-[var(--text-caption)]">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-[var(--text-caption)] mt-8">
          ※ 個人の感想であり、効果を保証するものではありません。
        </p>
      </div>
    </section>
  )
}
