'use client'
import { useEffect, useRef } from 'react'
import { useLanguage } from '../LanguageContext'

export default function Hero() {
  const containerRef = useRef(null)
  const { t } = useLanguage()

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 20
      const y = (clientY / innerHeight - 0.5) * 20
      containerRef.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '120px 80px 0 80px',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }} />

      <div style={{
        position: 'absolute',
        right: '-5%',
        top: '50%',
        transform: 'translateY(-50%)',
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(120px, 18vw, 280px)',
        fontWeight: 300,
        color: 'rgba(201,168,76,0.04)',
        letterSpacing: '-10px',
        userSelect: 'none',
        lineHeight: 1,
        whiteSpace: 'nowrap',
      }}>KHALIL</div>

      <div style={{
        position: 'absolute',
        left: '24px',
        top: '20%',
        bottom: '20%',
        width: '1px',
        background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)',
      }} />

      <div ref={containerRef} style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '800px',
        transition: 'transform 0.1s ease',
        paddingTop: '40px',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '32px',
          animation: 'fadeUp 0.8s ease forwards',
          opacity: 0,
          animationDelay: '0.2s',
        }}>
          <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
          <span style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            fontWeight: 400,
            color: '#C9A84C',
            letterSpacing: '4px',
            textTransform: 'uppercase',
          }}>{t.hero_eyebrow}</span>
        </div>

        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(52px, 8vw, 100px)',
          fontWeight: 300,
          lineHeight: 1.05,
          letterSpacing: '-1px',
          color: '#F5F3EE',
          marginBottom: '8px',
          animation: 'fadeUp 0.8s ease forwards',
          opacity: 0,
          animationDelay: '0.4s',
        }}>Khalil</h1>

        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(52px, 8vw, 100px)',
          fontWeight: 300,
          lineHeight: 1.05,
          letterSpacing: '-1px',
          marginBottom: '40px',
          animation: 'fadeUp 0.8s ease forwards',
          opacity: 0,
          animationDelay: '0.5s',
          background: 'linear-gradient(90deg, #C9A84C, #E8C97A, #C9A84C)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>Benchekroun</h1>

        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 'clamp(15px, 1.8vw, 18px)',
          fontWeight: 300,
          color: '#888888',
          lineHeight: 1.7,
          maxWidth: '520px',
          marginBottom: '48px',
          animation: 'fadeUp 0.8s ease forwards',
          opacity: 0,
          animationDelay: '0.7s',
        }}>
          {t.hero_tagline}
          <br />
          <span style={{ color: '#C9A84C' }}>{t.hero_years}</span> {t.hero_vision}
        </p>

        <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '56px',
          animation: 'fadeUp 0.8s ease forwards',
          opacity: 0,
          animationDelay: '0.9s',
        }}>
          {[t.hero_pill1, t.hero_pill2, t.hero_pill3].map(tag => (
            <span key={tag} style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '11px',
              fontWeight: 400,
              color: '#C9A84C',
              border: '1px solid rgba(201,168,76,0.3)',
              padding: '8px 16px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
            }}>{tag}</span>
          ))}
        </div>

        <div style={{
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
          animation: 'fadeUp 0.8s ease forwards',
          opacity: 0,
          animationDelay: '1.1s',
          flexWrap: 'wrap',
        }}>
          <a href="#contact" style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            fontWeight: 500,
            color: '#0A0A0A',
            background: '#C9A84C',
            padding: '16px 36px',
            textDecoration: 'none',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            display: 'inline-block',
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => { e.target.style.background = '#E8C97A'; e.target.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.target.style.background = '#C9A84C'; e.target.style.transform = 'translateY(0)' }}
          >{t.hero_cta1}</a>

          <a href="#expertise" style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            fontWeight: 400,
            color: '#888888',
            textDecoration: 'none',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'color 0.3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#C9A84C' }}
          onMouseLeave={e => { e.currentTarget.style.color = '#888888' }}
          >
            {t.hero_cta2}
            <span style={{ fontSize: '16px' }}>→</span>
          </a>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        animation: 'fadeIn 1s ease forwards',
        opacity: 0,
        animationDelay: '1.5s',
      }}>
        <span style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '10px',
          color: '#444',
          letterSpacing: '3px',
          textTransform: 'uppercase',
        }}>Scroll</span>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, #C9A84C, transparent)',
        }} />
      </div>
    </section>
  )
}