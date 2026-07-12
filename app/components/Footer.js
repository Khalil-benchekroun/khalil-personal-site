'use client'
import { useLanguage } from '../LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  const socials = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/khalil-benchekroun/',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/khalilbenchekroun/',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.163 6.163 0 100 12.326 6.163 6.163 0 000-12.326zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
    },
    {
      name: 'X',
      href: 'https://x.com/Khalilbenchekr2',
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=100073374056108',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 011.141.195v3.325a8.623 8.623 0 00-.653-.036 26.805 26.805 0 00-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 00-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 1.928-.287 1.739h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
        </svg>
      ),
    },
  ]

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
        color: '#0F172A',
        letterSpacing: '2px',
      }}>
        KB<span style={{ color: '#1A56DB' }}>.</span>
      </div>

      <div style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '11px',
        color: '#444',
        letterSpacing: '1px',
      }}>
        © {new Date().getFullYear()} Khalil Benchekroun — {t.footer_rights}
      </div>

      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        {socials.map(social => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            style={{
              color: '#888',
              display: 'flex',
              transition: 'color 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#1A56DB'}
            onMouseLeave={e => e.currentTarget.style.color = '#888'}
          >
            {social.icon}
          </a>
        ))}
      </div>

      <div style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '11px',
        color: '#444',
        letterSpacing: '1px',
      }}>
        {t.footer_made} <span style={{ color: '#1A56DB' }}>■</span> {t.footer_precision}
      </div>
    </footer>
  )
}