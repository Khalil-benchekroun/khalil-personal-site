'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'À propos', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Ma méthode', href: '#methode' },
    { label: 'Réalisations', href: '#stats' },
    { label: 'Contact', href: '#contact' },
  ]

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
      <a href="#" style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '20px',
        fontWeight: 400,
        color: '#F5F3EE',
        textDecoration: 'none',
        letterSpacing: '2px',
        textTransform: 'uppercase',
      }}>
        KB<span style={{ color: '#C9A84C' }}>.</span>
      </a>

      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-nav">
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
          onMouseEnter={e => e.target.style.color = '#C9A84C'}
          onMouseLeave={e => e.target.style.color = '#888888'}
          >{link.label}</a>
        ))}
        <a href="#contact" style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '11px',
          fontWeight: 500,
          color: '#0A0A0A',
          background: '#C9A84C',
          padding: '10px 20px',
          textDecoration: 'none',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          transition: 'background 0.3s',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={e => e.target.style.background = '#E8C97A'}
        onMouseLeave={e => e.target.style.background = '#C9A84C'}
        >Travaillons ensemble</a>
      </div>

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
            background: '#C9A84C',
          }} />
        ))}
      </button>

      {menuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: '#0A0A0A',
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
            color: '#C9A84C',
            fontSize: '24px',
            cursor: 'pointer',
          }}>✕</button>
          {links.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '36px',
              fontWeight: 300,
              color: '#F5F3EE',
              textDecoration: 'none',
              letterSpacing: '2px',
            }}>{link.label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-burger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}