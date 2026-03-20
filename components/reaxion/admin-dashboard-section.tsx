import Image from 'next/image'

export function AdminDashboardSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションタイトル */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[var(--brand-blue)] uppercase tracking-widest mb-2">本番及び管理画面</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-heading)] mb-4 text-balance">
            直感的で強力な<br />管理画面システム
          </h2>
          <p className="text-lg text-[var(--text-body)] max-w-2xl mx-auto">
            スタッフ、利用者、経営者それぞれの視点で必要な情報を一元管理。リアルタイムデータで施設の質向上をサポートします。
          </p>
          <p className="text-sm text-[var(--text-caption)] mt-4">
            詳細は <a href="https://reaxioncloud.jp" target="_blank" rel="noopener noreferrer" className="text-[var(--brand-blue)] underline hover:no-underline font-medium">REAXION CLOUD</a> をご覧ください。
          </p>
        </div>

        {/* 管理画面スクリーンショット（3列グリッド） */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* ダッシュボード画面 */}
          <div className="bg-[var(--section-alt)] rounded-xl overflow-hidden shadow-md border border-[var(--border)] p-4">
            <div className="mb-3">
              <p className="text-sm font-semibold text-[var(--brand-blue)] mb-2">ダッシュボード</p>
              <h3 className="text-lg font-bold text-[var(--text-heading)]">施設全体の概要把握</h3>
            </div>
            <div className="relative w-full h-80 rounded-lg overflow-hidden bg-white border border-[var(--divider)]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202026-03-07%2013.01.00-IWckQ8rRcJ0r9bQWpHe8yMC17Scm1y.png"
                alt="ダッシュボード：教室情報、統計情報、トレーニング・スキルチェックリスト、お知らせ表示"
                fill
                className="object-cover"
              />
            </div>
            <ul className="mt-4 text-sm text-[var(--text-body)] space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[var(--brand-blue)] font-bold mt-0.5">•</span>
                <span>教室情報と統計情報を一覧表示</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--brand-blue)] font-bold mt-0.5">•</span>
                <span>トレーニング・スキルチェック実績を可視化</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--brand-blue)] font-bold mt-0.5">•</span>
                <span>お知らせ機能で情報共有</span>
              </li>
            </ul>
          </div>

          {/* スキルチェック結果画面 */}
          <div className="bg-[var(--section-alt)] rounded-xl overflow-hidden shadow-md border border-[var(--border)] p-4">
            <div className="mb-3">
              <p className="text-sm font-semibold text-[var(--brand-blue)] mb-2">スキルチェック結果</p>
              <h3 className="text-lg font-bold text-[var(--text-heading)]">詳細な個別評価</h3>
            </div>
            <div className="relative w-full h-80 rounded-lg overflow-hidden bg-white border border-[var(--divider)]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202026-03-17%201.20.49-0DAKOJyMdJaamUALoXUxHNwSpahUKA.png"
                alt="スキルチェック結果：総合評価スコア259点、レーダーチャート、項目別評価"
                fill
                className="object-cover"
              />
            </div>
            <ul className="mt-4 text-sm text-[var(--text-body)] space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[var(--brand-blue)] font-bold mt-0.5">•</span>
                <span>総合評価スコアを即座に確認</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--brand-blue)] font-bold mt-0.5">•</span>
                <span>項目別評価をレーダーチャートで可視化</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--brand-blue)] font-bold mt-0.5">•</span>
                <span>個別コメント機能で分析情報を記載</span>
              </li>
            </ul>
          </div>

          {/* ユーザー個別ページ */}
          <div className="bg-[var(--section-alt)] rounded-xl overflow-hidden shadow-md border border-[var(--border)] p-4">
            <div className="mb-3">
              <p className="text-sm font-semibold text-[var(--brand-blue)] mb-2">トレーニング結果</p>
              <h3 className="text-lg font-bold text-[var(--text-heading)]">経時変化の追跡</h3>
            </div>
            <div className="relative w-full h-80 rounded-lg overflow-hidden bg-white border border-[var(--divider)]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202026-03-07%2012.59.31%20%281%29-VjDKRnEvVc4PXMGy5LayaYwIHZRrZn.png"
                alt="ユーザー個別ページ：トレーニング結果グラフ、18回から45回への改善推移"
                fill
                className="object-cover"
              />
            </div>
            <ul className="mt-4 text-sm text-[var(--text-body)] space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[var(--brand-blue)] font-bold mt-0.5">•</span>
                <span>時系列グラフで改善状況を可視化</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--brand-blue)] font-bold mt-0.5">•</span>
                <span>個別ユーザーの進捗を詳細に追跡</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--brand-blue)] font-bold mt-0.5">•</span>
                <span>プロフィール情報と実績を一元管理</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 管理画面の特徴 */}
        <div className="bg-[var(--brand-blue-light)] rounded-xl p-8 border border-[var(--brand-blue-mid)]">
          <h3 className="text-2xl font-bold text-[var(--text-heading)] mb-6">管理画面の特徴</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[var(--brand-blue)] text-white font-bold text-sm">1</div>
              </div>
              <div>
                <p className="font-semibold text-[var(--text-heading)] mb-1">リアルタイムデータ更新</p>
                <p className="text-sm text-[var(--text-body)]">測定直後に結果が反映され、最新の情報を常に把握できます。</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[var(--brand-blue)] text-white font-bold text-sm">2</div>
              </div>
              <div>
                <p className="font-semibold text-[var(--text-heading)] mb-1">複数ユーザーの一元管理</p>
                <p className="text-sm text-[var(--text-body)]">施設全体の利用者データを効率的に管理し、スタッフ間での情報共有が容易です。</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[var(--brand-blue)] text-white font-bold text-sm">3</div>
              </div>
              <div>
                <p className="font-semibold text-[var(--text-heading)] mb-1">CSV・PDF出力対応</p>
                <p className="text-sm text-[var(--text-body)]">結果を帳票として出力でき、経営資料や報告書の作成が効率化されます。</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[var(--brand-blue)] text-white font-bold text-sm">4</div>
              </div>
              <div>
                <p className="font-semibold text-[var(--text-heading)] mb-1">権限ベースのアクセス制御</p>
                <p className="text-sm text-[var(--text-body)]">管理者・スタッフ・利用者ごとに見える情報を制御し、適切な情報提供を実現。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
