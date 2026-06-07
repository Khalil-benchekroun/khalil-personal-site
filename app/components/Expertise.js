'use client'
import { useLanguage } from '../LanguageContext'

export default function Expertise() {
  const { t } = useLanguage()

  const pillars = [
    {
      number: t.expertise_p1_number,
      title: t.expertise_p1_title,
      description: t.expertise_p1_desc,
      tags: [t.expertise_p1_t1, t.expertise_p1_t2, t.expertise_p1_t3, t.expertise_p1_t4, t.expertise_p1_t5],
    },
    {
      number: t.expertise_p2_number,
      title: t.expertise_p2_title,
      description: t.expertise_p2_desc,
      tags: [t.expertise_p2_t1, t.expertise_p2_t2, t.expertise_p2_t3, t.expertise_p2_t4],
    },
    {
      number: t.expertise_p3_number,
      title: t.expertise_p3_title,
      description: t.expertise_p3_desc,
      tags: [t.expertise_p3_t1, t.expertise_p3_t2, t.expertise_p3_t3, t.expertise_p3_t4, t.expertise_p3_t5],
    },
  ]

  return (
    <section id="expertise" style={{
      padding: 'clamp(80px, 10vw, 140px) 48px',
      background: 'rgba(201,168,76,0.02)',
      borderTop: '1px solid rgba(201,168,76,0.08)',
      borderBottom: '1px solid rgba(201,168,76,0.08)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '72px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
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
            }}>{t.expertise_label}</span>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '24px',
          }}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px, 4vw, 60px)',
              fontWeight: 300,
              color: '#F5F3EE',
              lineHeight: 1.1,
            }}>
              {t.expertise_title1}
              <br />
              <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>{t.expertise_title2}</em>
            </h2>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              fontWeight: 300,
              color: '#666',
              maxWidth: '320px',
              lineHeight: 1.7,
            }}>{t.expertise_subtitle}</p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'rgba(201,168,76,0.1)',
        }} className="expertise-grid">
          {pillars.map((pillar, i) => (
            <div key={i} style={{
              background: '#0A0A0A',
              padding: '48px 40px',
              position: 'relative',
              transition: 'background 0.3s',
              cursor: 'default',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#111111'}
            onMouseLeave={e => e.currentTarget.style.background = '#0A0A0A'}
            >
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '80px',
                fontWeight: 300,
                color: 'rgba(201,168,76,0.08)',
                lineHeight: 1,
                position: 'absolute',
                top: '24px',
                right: '32px',
              }}>{pillar.number}</div>

              <div style={{
                width: '8px',
                height: '8px',
                background: '#C9A84C',
                marginBottom: '32px',
              }} />

              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '26px',
                fontWeight: 400,
                color: '#F5F3EE',
                lineHeight: 1.2,
                marginBottom: '20px',
              }}>{pillar.title}</h3>

              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px',
                fontWeight: 300,
                color: '#666',
                lineHeight: 1.7,
                marginBottom: '32px',
              }}>{pillar.description}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {pillar.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '10px',
                    color: '#C9A84C',
                    border: '1px solid rgba(201,168,76,0.2)',
                    padding: '4px 10px',
                    letterSpacing: '1px',
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .expertise-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}