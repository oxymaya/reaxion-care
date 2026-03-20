"use client"

import { CheckCircle2 } from "lucide-react"

export function AdvantagesSection() {
  const advantages = [
    {
      number: "01",
      title: "導入・操作が簡単",
      description: "タブレットとハンドユニットを接続するだけ。専門知識がなくても、画面の案内に従うだけで測定が完了します。",
      details: [
        "初期設定は5分で完了",
        "操作マニュアル・動画サポート付属",
        "利用者登録から測定まで直感的なUI",
      ],
    },
    {
      number: "02",
      title: "記録作成の負担を軽減",
      description: "測定データはクラウドに自動保存され、CSV出力で既存の記録様式に転記可能。報告書作成の手間を削減します。",
      details: [
        "測定結果の自動保存・履歴管理",
        "CSV出力で既存様式への転記が容易",
        "グラフ表示で経時変化を一目で把握",
      ],
    },
    {
      number: "03",
      title: "安心の国内サポート体制",
      description: "導入前のご相談から運用開始後のフォローまで、日本国内の専任スタッフが対応いたします。",
      details: [
        "導入前のオンライン相談対応",
        "操作説明会の実施（オンライン可）",
        "不具合時の迅速なサポート対応",
      ],
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-[var(--section-alt)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-[var(--brand-blue)] tracking-widest uppercase mb-3">
            Advantages
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-heading)] text-balance">
            選ばれる3つの理由
          </h2>
          <p className="text-sm text-[var(--text-caption)] mt-3 max-w-lg mx-auto leading-relaxed">
            現場の声を反映し、導入から運用まで徹底的にサポートします。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {advantages.map((item) => (
            <div
              key={item.number}
              className="bg-white rounded-2xl border border-[var(--border)] p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-[var(--brand-blue)]/20">{item.number}</span>
                <h3 className="text-lg font-bold text-[var(--text-heading)]">{item.title}</h3>
              </div>
              <p className="text-sm text-[var(--text-body)] leading-relaxed mb-6">{item.description}</p>
              <ul className="mt-auto space-y-2">
                {item.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-body)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--brand-blue)] flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
