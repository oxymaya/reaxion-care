export function Footer() {
  return (
    <footer className="bg-[var(--text-heading)] text-white/70 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* ブランド */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[var(--brand-blue)] flex items-center justify-center">
                <span className="text-white text-xs font-bold">RC</span>
              </div>
              <span className="text-white font-bold text-sm tracking-wide">REAXION CARE</span>
            </div>
            <p className="text-xs leading-relaxed">
              転倒リスクを可視化する機能訓練支援デバイス<br />
              型番：RX-CAR-01-6P
            </p>
          </div>

          {/* 連絡先 */}
          <div className="flex flex-col gap-3">
            <p className="text-white text-xs font-semibold tracking-widest uppercase mb-1">お問い合わせ</p>
            <div className="flex items-center gap-2 text-xs">
              <PhoneIcon />
              <a href="tel:03-3556-9988" className="hover:text-white transition-colors">03-3556-9988（代表）</a>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <MailIcon />
              <a href="mailto:info@smasta.co.jp" className="hover:text-white transition-colors">info@smasta.co.jp</a>
            </div>
            <div className="flex items-start gap-2 text-xs">
              <MapPinIcon />
              <span>〒102-0085 東京都千代田区六番町1-1恩田ビル3階</span>
            </div>
          </div>

          {/* 会社名 ＋ 認証マーク */}
          <div className="flex flex-col gap-3">
            <p className="text-white text-xs font-semibold tracking-widest uppercase mb-1">会社情報</p>
            <a href="https://smasta.co.jp" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">株式会社スマートスタート</a>
            <div className="flex items-center gap-4 mt-2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10825179_200_JP-kM12H7itb0wr3dFExejhdyiZmUzDJl.png"
                alt="プライバシーマーク 登録番号10825179"
                width={60}
                height={60}
                className="object-contain"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KIS%E3%83%AD%E3%82%B3%E3%82%99%E3%83%86%E3%82%99%E3%83%BC%E3%82%BF-8WBd5XisBamR4G7pJw251icbalZIoP.png"
                alt="KAWASAKI Innovation Standard (KIS) 認証マーク"
                width={90}
                height={44}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs">© 2025 <a href="https://smasta.co.jp" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">株式会社スマートスタート</a>. All rights reserved.</p>
          <p className="text-xs">本製品は医療機器ではありません。</p>
        </div>
      </div>
    </footer>
  )
}

function PhoneIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.74a16 16 0 0 0 6.35 6.35l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
function MailIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}
function MapPinIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-0.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
