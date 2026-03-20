export function MeasurementSection() {
  return (
    <section id="measurement" className="py-20 md:py-28 bg-[var(--section-alt)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* セクションヘッダー */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-[var(--brand-blue)] uppercase mb-3">
            Measurement
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-heading)] leading-tight text-balance">
            運動認知測定について
          </h2>
          <p className="mt-4 text-sm md:text-base text-[var(--text-body)] max-w-2xl mx-auto leading-relaxed">
            REAXION CAREは、光刺激に対する反応時間を測定することで、
            注意機能や運動認知能力を客観的に評価します。
          </p>
        </div>

        {/* 2カラムレイアウト：説明 + 写真 */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* 左：説明 */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[var(--border)]">
              <h3 className="text-lg font-semibold text-[var(--text-heading)] mb-3">
                測定の流れ
              </h3>
              <ol className="space-y-3 text-sm text-[var(--text-body)] leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--brand-blue)] text-white text-xs font-bold flex items-center justify-center">1</span>
                  <span>利用者がボードの前に座り、準備姿勢をとります。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--brand-blue)] text-white text-xs font-bold flex items-center justify-center">2</span>
                  <span>ハンドユニットがランダムに光ります。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--brand-blue)] text-white text-xs font-bold flex items-center justify-center">3</span>
                  <span>光ったユニットにできるだけ素早くタッチします。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--brand-blue)] text-white text-xs font-bold flex items-center justify-center">4</span>
                  <span>反応時間がミリ秒単位で自動記録されます。</span>
                </li>
              </ol>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[var(--border)]">
              <h3 className="text-lg font-semibold text-[var(--text-heading)] mb-3">
                測定でわかること
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-body)] leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <span><strong>反応時間</strong>：視覚刺激から運動開始までの時間</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <span><strong>注意の持続性</strong>：測定中の集中力の維持状況</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <span><strong>空間認識</strong>：ユニット位置の把握と手の移動精度</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  <span><strong>経時変化</strong>：定期測定による能力の推移</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 右：写真2枚 */}
          <div className="flex flex-col gap-6">
            <div className="rounded-xl overflow-hidden shadow-md border border-[var(--border)]">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5748-ulWfGLsDpMZ1b3JcVObRtb33gqH5nA.jpg"
                alt="利用者がボードユニットで運動認知測定を行い、光ったユニットに反応している様子"
                className="w-full h-auto object-cover brightness-105 contrast-[1.02] saturate-[0.95]"
              />
              <div className="bg-white px-4 py-3">
                <p className="text-xs text-[var(--text-caption)]">
                  光刺激に反応してユニットをタッチ。反応時間がリアルタイムで記録されます。
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md border border-[var(--border)]">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5753-idPVOW6kkoUQhnlbkL9S7SBYFiVAAk.jpg"
                alt="女性利用者が両手を使ってボードユニットの測定を行っている様子"
                className="w-full h-auto object-cover brightness-105 contrast-[1.02] saturate-[0.95]"
              />
              <div className="bg-white px-4 py-3">
                <p className="text-xs text-[var(--text-caption)]">
                  両手を使った測定も可能。左右差の評価にも対応しています。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 補足情報 */}
        <div className="mt-12 bg-[var(--brand-blue-light)] rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-[var(--brand-blue)] flex items-center justify-center">
                <InfoIcon />
              </div>
            </div>
            <div>
              <h4 className="text-base font-semibold text-[var(--text-heading)] mb-1">
                測定時間はわずか2〜3分
              </h4>
              <p className="text-sm text-[var(--text-body)] leading-relaxed">
                1回の測定は短時間で完了するため、利用者への負担が少なく、日常のプログラムに無理なく組み込めます。
                座位で安全に実施でき、車椅子の方にもご利用いただけます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="flex-shrink-0 text-[var(--brand-blue)] mt-0.5"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  )
}
