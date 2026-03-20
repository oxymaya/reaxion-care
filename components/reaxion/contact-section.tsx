export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[var(--brand-blue)] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold text-white/60 tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 text-balance">
            導入のご相談
          </h2>
          <div className="w-8 h-0.5 bg-white/30 mx-auto mb-6" />
          <p className="text-base text-white/80 leading-relaxed mb-10">
            施設での活用方法や導入に関するご相談、資料請求はお気軽にお問い合わせください。専門スタッフが丁寧にご対応いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#inquiry-form"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[var(--brand-blue)] text-sm font-semibold rounded-lg hover:bg-white/90 transition-colors duration-200"
            >
              <MailIcon />
              資料請求
            </a>
            <a
              href="#inquiry-form"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/40 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              <PhoneIcon />
              導入相談
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.74a16 16 0 0 0 6.35 6.35l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
