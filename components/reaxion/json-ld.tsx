const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "REAXION CARE",
  description: "高齢者の注意機能および反応能力を評価し、日常生活動作の安全性向上と転倒リスク低減を支援する機能訓練支援デバイス。",
  brand: {
    "@type": "Brand",
    name: "REAXION",
  },
  manufacturer: {
    "@type": "Organization",
    name: "株式会社スマートスタート",
    url: "https://smasta.co.jp",
  },
  offers: {
    "@type": "Offer",
    price: "298000",
    priceCurrency: "JPY",
    availability: "https://schema.org/InStock",
    priceValidUntil: "2026-12-31",
    seller: {
      "@type": "Organization",
      name: "株式会社スマートスタート",
    },
  },
  category: "機能訓練支援機器",
  audience: {
    "@type": "Audience",
    audienceType: "介護施設・デイサービス・リハビリ施設",
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "株式会社スマートスタート",
  url: "https://smasta.co.jp",
  logo: "https://smasta.co.jp/logo.png",
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
  sameAs: [
    "https://reaxioncloud.jp",
  ],
}

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "REAXION CARE | 転倒リスクを可視化する機能訓練支援デバイス",
  description: "高齢者の注意機能および反応能力を評価し、日常生活動作の安全性向上と転倒リスク低減を支援します。",
  url: "https://reaxioncare.jp",
  inLanguage: "ja",
  isPartOf: {
    "@type": "WebSite",
    name: "REAXION CARE",
    url: "https://reaxioncare.jp",
  },
  about: {
    "@type": "Product",
    name: "REAXION CARE",
  },
  mainEntity: {
    "@type": "Product",
    name: "REAXION CARE",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "REAXION CAREとは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "REAXION CAREは、高齢者の注意機能および反応能力を評価し、日常生活動作の安全性向上と転倒リスク低減を支援する機能訓練支援デバイスです。介護施設・デイサービス・リハビリ施設向けに開発されました。",
      },
    },
    {
      "@type": "Question",
      name: "価格はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "REAXION本体、専用タブレット（アプリインストール済み）、専用什器、充電ケーブル、3年間クラウド利用料、全てセットで298,000円（税別）です。3年間のセンドバック補償付きです。",
      },
    },
    {
      "@type": "Question",
      name: "補助金は利用できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、介護ICT・設備補助金の対象となる可能性があります。詳細はお問い合わせください。",
      },
    },
    {
      "@type": "Question",
      name: "LIFEとの連携はできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、科学的介護情報システム（LIFE）フォーマットに準拠したCSV出力に対応しています。",
      },
    },
  ],
}

const productSchemaString = JSON.stringify(productSchema)
const organizationSchemaString = JSON.stringify(organizationSchema)
const webPageSchemaString = JSON.stringify(webPageSchema)
const faqSchemaString = JSON.stringify(faqSchema)

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: productSchemaString }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: organizationSchemaString }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: webPageSchemaString }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchemaString }}
      />
    </>
  )
}
