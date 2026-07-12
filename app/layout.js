import Script from 'next/script'
import './globals.css'
import { LanguageProvider } from './LanguageContext'

export const metadata = {
  metadataBase: new URL('https://www.khalilbenchekroun.me'),
  title: 'Khalil Benchekroun — CTO, Growth Marketing & Enseignant',
  description: 'Co-founder & CTO de LIVRR. Expert en stratégie digitale et growth marketing avec 12 ans d\'expérience. Professeur universitaire.',
  keywords: 'Khalil Benchekroun, marketing digital, growth, CTO, consultant, professeur universitaire, LIVRR',
  alternates: {
    canonical: 'https://www.khalilbenchekroun.me',
  },
  openGraph: {
    title: 'Khalil Benchekroun — CTO, Growth Marketing & Enseignant',
    description: 'Co-founder & CTO de LIVRR. Expert en stratégie digitale et growth marketing avec 12 ans d\'expérience. Professeur universitaire.',
    url: 'https://www.khalilbenchekroun.me',
    siteName: 'Khalil Benchekroun',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khalil Benchekroun — CTO, Growth Marketing & Enseignant',
    description: 'Co-founder & CTO de LIVRR. Expert en stratégie digitale et growth marketing avec 12 ans d\'expérience.',
  },
  verification: {
    google: 'QyL61OfE4uLnWbTv2SlqNrrW9SsAqkFv04X_p4dGhVg',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Khalil Benchekroun',
  url: 'https://www.khalilbenchekroun.me',
  jobTitle: 'Co-founder & CTO',
  worksFor: {
    '@type': 'Organization',
    name: 'LIVRR',
  },
  description: 'Co-founder & CTO de LIVRR. Expert en stratégie digitale et growth marketing avec 12 ans d\'expérience. Professeur universitaire.',
  sameAs: [
    'https://linkedin.com/in/khalil-benchekroun',
  ],
  knowsAbout: ['Growth Marketing', 'Stratégie Digitale', 'CTO', 'Marketing Digital'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5HRB5KMQ');`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F2QY2Y0TFM"
          strategy="afterInteractive"
        />
        <Script id="ga4-config" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-F2QY2Y0TFM');`}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5HRB5KMQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}