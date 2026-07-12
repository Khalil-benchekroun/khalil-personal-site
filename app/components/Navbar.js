'use client'
import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../LanguageContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()
  const dropdownRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const links = [
    { label: t.nav_about, href: '#about' },
    { label: t.nav_expertise, href: '#expertise' },
    { label: t.nav_methode, href: '#methode' },
    { label: t.nav_realisations, href: '#stats' },
    { label: t.nav_blog, href: '/blog' },
    { label: t.nav_contact, href: '#contact' },
  ]

  const languages = [
    { code: 'fr', label: 'FranÃ§ais', flag: 'ðŸ‡«ðŸ‡·' },
    { code: 'en', label: 'English', flag: 'ðŸ‡¬ðŸ‡§' },
    { code: 'de', label: 'Deutsch', flag: 'ðŸ‡©ðŸ‡ª' },
    { code: 'es', label: 'EspaÃ±ol', flag: 'ðŸ‡ªðŸ‡¸' },
    { code: 'ar', label: 'Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©', flag: 'ðŸ‡²ðŸ‡¦' },
  ]

  const currentLang = languages.find(l => l.code === lang)

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: scrolled ? '16px 48px' : '24px 48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      {/* Logo */}
      <a href="#" style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '20px',
        fontWeight: 400,
        color: '#0F172A',
        textDecoration: 'none',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        flexShrink: 0,
      }}>
        KB<span style={{ color: '#1A56DB' }}>.</span>
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }} className="desktop-nav">
        {links.map(link => (
          <a key={link.href} href={link.href} style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            fontWeight: 400,
            color: '#888888',
            textDecoration: 'none',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            transition: 'color 0.3s',
          }}
          onMouseEnter={e => e.target.style.color = '#1A56DB'}
          onMouseLeave={e => e.target.style.color = '#888888'}
          >{link.label}</a>
        ))}

        {/* Language dropdown */}
        <div ref={dropdownRef} style={{ position: 'relative' }}>
          <button
            onClick={() => setLangOpen(!langOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'transparent',
              border: '1px solid rgba(201,168,76,0.3)',
              padding: '7px 12px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              color: '#1A56DB',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#1A56DB'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'}
          >
            <span style={{ fontSize: '14px' }}>{currentLang.flag}</span>
            <span style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '11px',
              fontWeight: 400,
              color: '#1A56DB',
              letterSpacing: '1px',
            }}>{currentLang.code.toUpperCase()}</span>
            <span style={{
              fontSize: '8px',
              color: '#1A56DB',
              transition: 'transform 0.3s',
              transform: langOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              display: 'inline-block',
            }}>â–¼</span>
          </button>

          {/* Dropdown menu */}
          {langOpen && (
            <div style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              right: 0,
              background: '#F8F9FA',
              border: '1px solid rgba(201,168,76,0.2)',
              minWidth: '160px',
              zIndex: 200,
              overflow: 'hidden',
            }}>
              {languages.map(l => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setLangOpen(false) }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    width: '100%',
                    padding: '12px 16px',
                    background: lang === l.code ? 'rgba(201,168,76,0.1)' : 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(201,168,76,0.08)',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                    textAlign: 'left',
                  }}
                  onMouseEnter={e => { if(lang !== l.code) e.currentTarget.style.background = 'rgba(201,168,76,0.05)' }}
                  onMouseLeave={e => { if(lang !== l.code) e.currentTarget.style.background = 'transparent' }}
                >
                  <span style={{ fontSize: '16px' }}>{l.flag}</span>
                  <span style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '12px',
                    fontWeight: lang === l.code ? 500 : 300,
                    color: lang === l.code ? '#1A56DB' : '#888',
                    letterSpacing: '1px',
                  }}>{l.label}</span>
                  {lang === l.code && (
                    <span style={{
                      marginLeft: 'auto',
                      color: '#1A56DB',
                      fontSize: '12px',
                    }}>âœ“</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        <a href="#contact" style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '11px',
          fontWeight: 500,
          color: '#FFFFFF',
          background: '#1A56DB',
          padding: '10px 20px',
          textDecoration: 'none',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          transition: 'background 0.3s',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
        onMouseEnter={e => e.target.style.background = '#3B82F6'}
        onMouseLeave={e => e.target.style.background = '#1A56DB'}
        >{t.nav_cta}</a>
      </div>

      {/* Mobile burger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          flexDirection: 'column',
          gap: '5px',
          padding: '4px',
        }}
        className="mobile-burger"
      >
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: 'block',
            width: '24px',
            height: '1px',
            background: '#1A56DB',
          }} />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: '#FFFFFF',
          zIndex: 200,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '32px',
        }}>
          <button onClick={() => setMenuOpen(false)} style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            background: 'none',
            border: 'none',
            color: '#1A56DB',
            fontSize: '24px',
            cursor: 'pointer',
          }}>âœ•</button>
          {links.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '36px',
              fontWeight: 300,
              color: '#0F172A',
              textDecoration: 'none',
              letterSpacing: '2px',
            }}>{link.label}</a>
          ))}
          {/* Mobile language switcher */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {languages.map(l => (
              <button key={l.code} onClick={() => { setLang(l.code); setMenuOpen(false) }} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '12px',
                fontWeight: lang === l.code ? 500 : 300,
                color: lang === l.code ? '#1A56DB' : '#555',
                background: 'transparent',
                border: lang === l.code ? '1px solid rgba(201,168,76,0.3)' : '1px solid transparent',
                padding: '6px 12px',
                cursor: 'pointer',
                letterSpacing: '1px',
              }}>
                <span>{l.flag}</span>
                <span>{l.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1100px) {
          .desktop-nav { display: none !important; }
          .mobile-burger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
