"use client"

import { useState } from "react"

export function InquiryFormSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    type: "資料請求",
    facilityName: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="inquiry-form" className="py-20 md:py-28 bg-[var(--background)]">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-[var(--text-caption)] tracking-widest uppercase mb-3">Inquiry</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-heading)] mb-5 text-balance">
            お問い合わせ・資料請求
          </h2>
          <div className="w-8 h-0.5 bg-[var(--divider)] mx-auto mb-6" />
          <p className="text-sm text-[var(--text-body)] leading-relaxed">
            資料請求・導入相談・ご質問など、お気軽にお問い合わせください。
            <br className="hidden sm:block" />
            専門スタッフが丁寧にご対応いたします。
          </p>
        </div>

        {submitted ? (
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-12 text-center">
            <div className="w-12 h-12 rounded-full bg-[var(--brand-blue-light)] flex items-center justify-center mx-auto mb-4">
              <CheckIcon />
            </div>
            <h3 className="text-lg font-semibold text-[var(--text-heading)] mb-2">送信が完了しました</h3>
            <p className="text-sm text-[var(--text-body)] leading-relaxed">
              お問い合わせいただきありがとうございます。<br />
              担当者より2営業日以内にご連絡いたします。
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 md:p-10 flex flex-col gap-6"
          >
            {/* お問い合わせ種別 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-[var(--text-heading)]">
                お問い合わせ種別 <span className="text-red-500">*</span>
              </label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm text-[var(--text-body)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent"
              >
                <option>資料請求</option>
                <option>導入相談</option>
                <option>製品に関するご質問</option>
                <option>その他</option>
              </select>
            </div>

            {/* 施設名 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-[var(--text-heading)]">
                施設名・会社名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="facilityName"
                value={form.facilityName}
                onChange={handleChange}
                required
                placeholder="例）〇〇デイサービスセンター"
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm text-[var(--text-body)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent placeholder:text-[var(--text-caption)]"
              />
            </div>

            {/* 担当者名 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-[var(--text-heading)]">
                担当者名 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="例）山田 太郎"
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm text-[var(--text-body)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent placeholder:text-[var(--text-caption)]"
              />
            </div>

            {/* メールアドレス */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-[var(--text-heading)]">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="例）info@example.co.jp"
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm text-[var(--text-body)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent placeholder:text-[var(--text-caption)]"
              />
            </div>

            {/* 電話番号 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-[var(--text-heading)]">
                電話番号
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="例）03-0000-0000"
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm text-[var(--text-body)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent placeholder:text-[var(--text-caption)]"
              />
            </div>

            {/* お問い合わせ内容 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-[var(--text-heading)]">
                お問い合わせ内容
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="ご質問・ご要望などをご記入ください"
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm text-[var(--text-body)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:border-transparent placeholder:text-[var(--text-caption)] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-lg bg-[var(--brand-blue)] text-white text-sm font-semibold hover:opacity-90 transition-opacity duration-200"
            >
              送信する
            </button>

            <p className="text-xs text-[var(--text-caption)] text-center leading-relaxed">
              送信いただいた情報は、お問い合わせへの回答および製品情報のご案内にのみ使用いたします。<br />
              個人情報の取り扱いについては
              <a href="https://smasta.co.jp" target="_blank" rel="noopener noreferrer" className="text-[var(--brand-blue)] underline hover:no-underline ml-0.5">プライバシーポリシー</a>
              をご確認ください。
            </p>
          </form>
        )}

        {/* 直接連絡先 */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[var(--text-caption)]">
          <a href="tel:03-3556-9988" className="flex items-center gap-2 hover:text-[var(--brand-blue)] transition-colors">
            <PhoneIcon />
            03-3556-9988（代表）
          </a>
          <a href="mailto:info@smasta.co.jp" className="flex items-center gap-2 hover:text-[var(--brand-blue)] transition-colors">
            <MailIcon />
            info@smasta.co.jp
          </a>
        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[var(--brand-blue)]">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.74a16 16 0 0 0 6.35 6.35l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}
