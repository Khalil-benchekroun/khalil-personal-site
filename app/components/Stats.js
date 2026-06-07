'use client'
import { useEffect, useRef, useState } from 'react'

function CountUp({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const startTime = performance.now()
        const animate = (currentTime) => {
          const elapsed = currentTime - startTime
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * end))
          if (progress < 1) requestAnimationFrame(animate)
          else setCount(end)
        }
        requestAnimationFrame(animate)
      }
    }, { threshold: 0.3 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Stats() {
  const stats = [
    { value: 12, suffix: '+', label: 'Années d\'expérience', sub: 'en marketing digital' },
    { value: 100, suffix: '+', label: 'Projets livrés', sub: 'de la stratégie à l\'exécution' },
    { value: 3, suffix: '', label: 'Dimensions d\'expertise', sub: 'marketing · académique · tech' },
    { value: 1, suffix: '', label: 'Startup tech en cours', sub: 'LIVRR — lancement Paris 2026' },
  ]

  return (
    <section id="stats" style={{
      padding: 'clamp(80px, 10vw, 140px) 48px',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '24px',
        }}>
          <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
          <span style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            color: '#C9A84C',
            letterSpacing: '4px',
            textTransform: 'uppercase',
          }}>En chiffres</span>
          <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
        </div>

        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(36px, 4vw, 56px)',
          fontWeight: 300,
          color: '#F5F3EE',
          lineHeight: 1.1,
        }}>
          Des résultats,
          <em style={{ color: '#C9A84C', fontStyle: 'italic' }}> pas des promesses</em>
        </h2>
      </div>

      {/* Stats grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1px',
        background: 'rgba(201,168,76,0.1)',
        marginBottom: '80px',
      }} className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} style={{
            background: '#0A0A0A',
            padding: '48px 32px',
            textAlign: 'center',
            position: 'relative',
          }}>
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(48px, 5vw, 72px)',
              fontWeight: 300,
              color: '#C9A84C',
              lineHeight: 1,
              marginBottom: '12px',
            }}>
              <CountUp end={stat.value} suffix={stat.suffix} />
            </div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              color: '#F5F3EE',
              letterSpacing: '1px',
              marginBottom: '8px',
            }}>{stat.label}</div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '11px',
              fontWeight: 300,
              color: '#555',
              letterSpacing: '0.5px',
            }}>{stat.sub}</div>
          </div>
        ))}
      </div>

      {/* LIVRR highlight */}
      <div style={{
        border: '1px solid rgba(201,168,76,0.2)',
        padding: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '32px',
        flexWrap: 'wrap',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background text */}
        <div style={{
          position: 'absolute',
          right: '-20px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '120px',
          fontWeight: 300,
          color: 'rgba(201,168,76,0.04)',
          userSelect: 'none',
          lineHeight: 1,
        }}>LIVRR</div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            color: '#C9A84C',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>Projet phare — 2026</div>
          <h3 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(28px, 3vw, 40px)',
            fontWeight: 300,
            color: '#F5F3EE',
            lineHeight: 1.2,
            marginBottom: '16px',
          }}>
            LIVRR — Livraison premium
            <br />same-day à Paris
          </h3>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            fontWeight: 300,
            color: '#666',
            lineHeight: 1.7,
            maxWidth: '480px',
          }}>
            Plateforme de livraison mode & lifestyle haut de gamme. 
            Architecture technique, stratégie marketing et vision produit — 
            tout conçu et exécuté en interne.
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          position: 'relative',
          zIndex: 1,
          flexShrink: 0,
        }}>
          {[
            { label: 'Lancement', value: 'Sept. 2026' },
            { label: 'Ville', value: 'Paris' },
            { label: 'Rôle', value: 'Co-founder & CTO' },
          ].map(item => (
            <div key={item.label} style={{ textAlign: 'right' }}>
              <div style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '10px',
                color: '#555',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '4px',
              }}>{item.label}</div>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '20px',
                fontWeight: 400,
                color: '#C9A84C',
              }}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
