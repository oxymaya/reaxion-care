import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'REAXION CARE | 転倒リスクを可視化する機能訓練支援デバイス',
  description: '高齢者の注意機能および反応能力を評価し、日常生活動作の安全性向上と転倒リスク低減を支援します。介護施設・デイサービス・リハビリ施設向け機能訓練支援機器。TAIS対応、LIFE連携可能。',
  generator: 'v0.app',
  keywords: [
    'REAXION CARE',
    '機能訓練支援機器',
    '転倒リスク評価',
    '介護施設',
    'デイサービス',
    'リハビリ',
    '高齢者',
    '反応時間測定',
    '認知機能評価',
    'TAIS',
    'LIFE連携',
    '介護ICT',
    '機能訓練加算',
  ],
  authors: [{ name: '株式会社スマートスタート', url: 'https://smasta.co.jp' }],
  creator: '株式会社スマートスタート',
  publisher: '株式会社スマートスタート',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL('https://reaxioncare.jp'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'REAXION CARE | 転倒リスクを可視化する機能訓練支援デバイス',
    description: '高齢者の注意機能および反応能力を評価し、転倒リスク低減を支援。介護施設・デイサービス・リハビリ施設向け。TAIS対応、LIFE連携可能。',
    url: 'https://reaxioncare.jp',
    siteName: 'REAXION CARE',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'REAXION CARE - 機能訓練支援デバイス',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'REAXION CARE | 転倒リスクを可視化する機能訓練支援デバイス',
    description: '高齢者の注意機能および反応能力を評価し、転倒リスク低減を支援。介護施設・デイサービス向け。',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "REAXION CARE",
  description: "高齢者の注意機能および反応能力を評価し、日常生活動作の安全性向上と転倒リスク低減を支援する機能訓練支援デバイス。",
  brand: { "@type": "Brand", name: "REAXION" },
  manufacturer: { "@type": "Organization", name: "株式会社スマートスタート", url: "https://smasta.co.jp" },
  offers: {
    "@type": "Offer",
    price: "298000",
    priceCurrency: "JPY",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "株式会社スマートスタート" },
  },
  category: "機能訓練支援機器",
}

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "株式会社スマートスタート",
  url: "https://smasta.co.jp",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+81-3-3556-9988",
    contactType: "sales",
    areaServed: "JP",
    availableLanguage: "Japanese",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "六番町1-1恩田ビル3階",
    addressLocality: "千代田区",
    addressRegion: "東京都",
    postalCode: "102-0085",
    addressCountry: "JP",
  },
}

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "REAXION CAREとは何ですか？",
      acceptedAnswer: { "@type": "Answer", text: "高齢者の注意機能および反応能力を評価し、転倒リスク低減を支援する機能訓練支援デバイスです。" },
    },
    {
      "@type": "Question",
      name: "価格はいくらですか？",
      acceptedAnswer: { "@type": "Answer", text: "本体、タブレット、什器、3年間クラウド利用料込みで298,000円（税別）です。" },
    },
    {
      "@type": "Question",
      name: "LIFEとの連携はできますか？",
      acceptedAnswer: { "@type": "Answer", text: "はい、LIFEフォーマット準拠のCSV出力に対応しています。" },
    },
  ],
}

const jsonLdProductString = JSON.stringify(jsonLdProduct)
const jsonLdOrganizationString = JSON.stringify(jsonLdOrganization)
const jsonLdFaqString = JSON.stringify(jsonLdFaq)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdProductString }}
          suppressHydrationWarning
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdOrganizationString }}
          suppressHydrationWarning
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdFaqString }}
          suppressHydrationWarning
        />
      </head>
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
