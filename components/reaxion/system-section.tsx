"use client"

import Image from "next/image"
import { Smartphone, Monitor, Cloud, ArrowRight, Wifi } from "lucide-react"

export function SystemSection() {
  return (
    <section id="system" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-[var(--brand-blue)] tracking-widest uppercase mb-3">
            System Architecture
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-heading)] text-balance">
            システム構成
          </h2>
          <p className="text-sm text-[var(--text-caption)] mt-3 max-w-lg mx-auto leading-relaxed">
            シンプルな構成で、導入後すぐにご利用いただけます。
          </p>
        </div>

        {/* システム構成図 */}
        <div className="bg-[var(--section-alt)] rounded-2xl p-8 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
            {/* ハンドユニット */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-2xl bg-white border border-[var(--border)] flex items-center justify-center shadow-sm">
                <div className="w-12 h-16 rounded-lg bg-[var(--brand-blue-light)] border-2 border-[var(--brand-blue)]/30 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-[var(--brand-blue)]" />
                </div>
              </div>
              <p className="mt-3 text-sm font-medium text-[var(--text-heading)]">ハンドユニット</p>
              <p className="text-xs text-[var(--text-caption)]">専用デバイス</p>
            </div>

            <div className="flex items-center text-[var(--brand-blue)]/40">
              <Wifi className="w-5 h-5 md:hidden" />
              <ArrowRight className="w-8 h-5 hidden md:block" />
            </div>

            {/* タブレット */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-2xl bg-white border border-[var(--border)] flex items-center justify-center shadow-sm">
                <Smartphone className="w-10 h-10 text-[var(--brand-blue)]" />
              </div>
              <p className="mt-3 text-sm font-medium text-[var(--text-heading)]">タブレット</p>
              <p className="text-xs text-[var(--text-caption)]">測定アプリ</p>
            </div>

            <div className="flex items-center text-[var(--brand-blue)]/40">
              <Wifi className="w-5 h-5 md:hidden" />
              <ArrowRight className="w-8 h-5 hidden md:block" />
            </div>

            {/* クラウド */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-2xl bg-white border border-[var(--border)] flex items-center justify-center shadow-sm">
                <Cloud className="w-10 h-10 text-[var(--brand-blue)]" />
              </div>
              <p className="mt-3 text-sm font-medium text-[var(--text-heading)]">クラウド</p>
              <p className="text-xs text-[var(--text-caption)]">データ保存</p>
            </div>

            <div className="flex items-center text-[var(--brand-blue)]/40">
              <Wifi className="w-5 h-5 md:hidden" />
              <ArrowRight className="w-8 h-5 hidden md:block" />
            </div>

            {/* 管理画面 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-2xl bg-white border border-[var(--border)] flex items-center justify-center shadow-sm">
                <Monitor className="w-10 h-10 text-[var(--brand-blue)]" />
              </div>
              <p className="mt-3 text-sm font-medium text-[var(--text-heading)]">管理画面</p>
              <p className="text-xs text-[var(--text-caption)]">PC/タブレット</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-[var(--text-caption)]">
              Bluetooth接続 / Wi-Fi経由でクラウドに自動同期
            </p>
          </div>
        </div>

        {/* 本体と管理画面 */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* 本体（測定アプリ） */}
          <div className="bg-[var(--section-alt)] rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-[var(--border)]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[var(--brand-blue)] flex items-center justify-center">
                  <Smartphone className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-heading)]">測定アプリ</h3>
              </div>
              <p className="text-sm text-[var(--text-caption)]">タブレット専用アプリケーション</p>
            </div>
            <div className="p-6">
              <div className="aspect-[4/3] bg-white rounded-xl border border-[var(--border)] p-4 mb-6">
                {/* アプリ画面イメージ */}
                <div className="h-full flex flex-col">
                  <div className="flex items-center gap-2 pb-3 border-b border-[var(--border)]">
                    <div className="w-3 h-3 rounded-full bg-[var(--brand-blue)]" />
                    <span className="text-xs font-medium text-[var(--text-heading)]">REAXION CARE</span>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto rounded-full border-4 border-[var(--brand-blue)] flex items-center justify-center mb-3">
                        <span className="text-2xl font-bold text-[var(--brand-blue)]">GO</span>
                      </div>
                      <p className="text-xs text-[var(--text-caption)]">ボタンを押して測定開始</p>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <span className="w-5 h-5 rounded-full bg-[var(--brand-blue-light)] text-[var(--brand-blue)] flex items-center justify-center flex-shrink-0 text-xs font-medium">1</span>
                  <span className="text-[var(--text-body)]">利用者選択・新規登録</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="w-5 h-5 rounded-full bg-[var(--brand-blue-light)] text-[var(--brand-blue)] flex items-center justify-center flex-shrink-0 text-xs font-medium">2</span>
                  <span className="text-[var(--text-body)]">測定モード選択（単純反応/選択反応）</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="w-5 h-5 rounded-full bg-[var(--brand-blue-light)] text-[var(--brand-blue)] flex items-center justify-center flex-shrink-0 text-xs font-medium">3</span>
                  <span className="text-[var(--text-body)]">測定実行・結果表示</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="w-5 h-5 rounded-full bg-[var(--brand-blue-light)] text-[var(--brand-blue)] flex items-center justify-center flex-shrink-0 text-xs font-medium">4</span>
                  <span className="text-[var(--text-body)]">履歴確認・クラウド同期</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 管理画面 */}
          <div className="bg-[var(--section-alt)] rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-[var(--border)]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[var(--brand-blue)] flex items-center justify-center">
                  <Monitor className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-heading)]">管理画面</h3>
              </div>
              <p className="text-sm text-[var(--text-caption)]">Webブラウザからアクセス可能</p>
            </div>
            <div className="p-6">
              <div className="aspect-[4/3] bg-white rounded-xl border border-[var(--border)] p-4 mb-6">
                {/* 管理画面イメージ */}
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                    <span className="text-xs font-medium text-[var(--text-heading)]">利用者一覧</span>
                    <div className="flex gap-1">
                      <div className="w-6 h-4 rounded bg-[var(--brand-blue-light)]" />
                      <div className="w-6 h-4 rounded bg-[var(--muted)]" />
                    </div>
                  </div>
                  <div className="flex-1 pt-3 space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-2 p-2 rounded bg-[var(--section-alt)]">
                        <div className="w-6 h-6 rounded-full bg-[var(--brand-blue-light)]" />
                        <div className="flex-1">
                          <div className="w-16 h-2 bg-[var(--muted)] rounded" />
                        </div>
                        <div className="w-12 h-4 rounded bg-[var(--brand-blue-light)]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <span className="w-5 h-5 rounded-full bg-[var(--brand-blue-light)] text-[var(--brand-blue)] flex items-center justify-center flex-shrink-0 text-xs font-medium">A</span>
                  <span className="text-[var(--text-body)]">利用者情報の一覧・詳細管理</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="w-5 h-5 rounded-full bg-[var(--brand-blue-light)] text-[var(--brand-blue)] flex items-center justify-center flex-shrink-0 text-xs font-medium">B</span>
                  <span className="text-[var(--text-body)]">測定履歴のグラフ表示・経時変化確認</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="w-5 h-5 rounded-full bg-[var(--brand-blue-light)] text-[var(--brand-blue)] flex items-center justify-center flex-shrink-0 text-xs font-medium">C</span>
                  <span className="text-[var(--text-body)]">CSV形式でのデータ出力</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="w-5 h-5 rounded-full bg-[var(--brand-blue-light)] text-[var(--brand-blue)] flex items-center justify-center flex-shrink-0 text-xs font-medium">D</span>
                  <span className="text-[var(--text-body)]">施設・スタッフアカウント管理</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="w-5 h-5 rounded-full bg-[var(--brand-blue-light)] text-[var(--brand-blue)] flex items-center justify-center flex-shrink-0 text-xs font-medium">E</span>
                  <span className="text-[var(--text-body)]">科学的介護情報システム（LIFE）フォーマット準拠のCSV出力</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-[var(--border)]">
                <a 
                  href="https://reaxioncloud.jp" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-[var(--brand-blue)] text-white text-sm font-medium rounded-lg hover:bg-[var(--brand-blue)]/90 transition-colors"
                >
                  REAXION CLOUDで詳細を見る
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
