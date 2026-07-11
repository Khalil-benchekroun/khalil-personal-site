'use client'
import { useLanguage } from '../LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer style={{
      padding: '40px 48px',
      borderTop: '1px solid rgba(201,168,76,0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '16px',
    }}>
      <div style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '18px',
        fontWeight: 400,
        color: '#F5F3EE',
        letterSpacing: '2px',
      }}>
        KB<span style={{ color: '#C9A84C' }}>.</span>
      </div>

      <div style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '11px',
        color: '#444',
        letterSpacing: '1px',
      }}>
        © {new Date().getFullYear()} Khalil Benchekroun — {t.footer_rights}
      </div>

      <div style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '11px',
        color: '#444',
        letterSpacing: '1px',
      }}>
        {t.footer_made} <span style={{ color: '#C9A84C' }}>■</span> {t.footer_precision}
      </div>
    </footer>
  )
}