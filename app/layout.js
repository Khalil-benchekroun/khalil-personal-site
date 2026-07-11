import './globals.css'
import { LanguageProvider } from './LanguageContext'

export const metadata = {
  title: 'Khalil Benchekroun — CTO · Marketing · Enseignant',
  description: 'Co-founder & CTO de LIVRR. Expert en stratégie digitale et growth marketing avec 12 ans d\'expérience. Professeur universitaire.',
  keywords: 'Khalil Benchekroun, marketing digital, growth, CTO, consultant, professeur universitaire, LIVRR',
  openGraph: {
    title: 'Khalil Benchekroun',
    description: 'Co-founder & CTO · Expert Growth & Stratégie Digitale',
    url: 'https://www.khalilbenchekroun.me',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}