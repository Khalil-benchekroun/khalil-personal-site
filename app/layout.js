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
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}