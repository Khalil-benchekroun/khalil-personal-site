'use client'
import { useLanguage } from '../LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" style={{
      padding: 'clamp(80px, 10vw, 140px) 48px',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
      }} className="about-grid">

        {/* Left: Photo */}
        <div style={{ position: 'relative' }}>
          <div style={{
            width: '100%',
            aspectRatio: '3/4',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(201,168,76,0.15)',
            background: '#F8F9FA',
          }}>
            <img
              src="/photo-about.png"
              alt="Khalil Benchekroun"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center center',
                display: 'block',
              }}
            />
            <div style={{
              position: 'absolute', top: '16px', left: '16px',
              width: '30px', height: '30px',
              borderTop: '1px solid #1A56DB',
              borderLeft: '1px solid #1A56DB',
            }} />
            <div style={{
              position: 'absolute', bottom: '16px', right: '16px',
              width: '30px', height: '30px',
              borderBottom: '1px solid #1A56DB',
              borderRight: '1px solid #1A56DB',
            }} />
          </div>

          <div style={{
            position: 'absolute',
            bottom: '-20px',
            right: '-20px',
            width: '120px',
            height: '120px',
            border: '1px solid rgba(201,168,76,0.2)',
            zIndex: -1,
          }} />

          <div style={{
            position: 'absolute',
            bottom: '32px',
            left: '-24px',
            background: '#1A56DB',
            padding: '16px 20px',
          }}>
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '22px',
              fontWeight: 500,
              color: '#FFFFFF',
              lineHeight: 1,
            }}>LIVRR</div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '9px',
              color: '#FFFFFF',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              opacity: 0.7,
              marginTop: '4px',
            }}>Co-founder & CTO</div>
          </div>
        </div>

        {/* Right: Text */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '32px',
          }}>
            <div style={{ width: '40px', height: '1px', background: '#1A56DB' }} />
            <span style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '11px',
              color: '#1A56DB',
              letterSpacing: '4px',
              textTransform: 'uppercase',
            }}>{t.about_label}</span>
          </div>

          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(36px, 4vw, 56px)',
            fontWeight: 300,
            color: '#0F172A',
            lineHeight: 1.1,
            marginBottom: '32px',
          }}>
            {t.about_title1}
            <br />
            <em style={{ color: '#1A56DB', fontStyle: 'italic' }}>{t.about_title2}</em>
          </h2>

          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '15px',
            fontWeight: 300,
            color: '#888888',
            lineHeight: 1.8,
            marginBottom: '24px',
          }}>{t.about_p1}</p>

          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '15px',
            fontWeight: 300,
            color: '#888888',
            lineHeight: 1.8,
            marginBottom: '40px',
          }}>
            {t.about_p2}
            <span style={{ color: '#0F172A' }}>{t.about_p2_1}</span>,
            <span style={{ color: '#0F172A' }}>{t.about_p2_2}</span>, et
            <span style={{ color: '#0F172A' }}>{t.about_p2_3}</span>
            {t.about_p2_4}
          </p>

          <div style={{
            width: '100%',
            height: '1px',
            background: 'rgba(201,168,76,0.15)',
            marginBottom: '40px',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { title: t.about_v1_title, desc: t.about_v1_desc },
              { title: t.about_v2_title, desc: t.about_v2_desc },
              { title: t.about_v3_title, desc: t.about_v3_desc },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  background: '#1A56DB',
                  marginTop: '6px',
                  flexShrink: 0,
                }} />
                <div>
                  <div style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: '#0F172A',
                    marginBottom: '4px',
                    letterSpacing: '1px',
                  }}>{item.title}</div>
                  <div style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    fontWeight: 300,
                    color: '#666',
                    lineHeight: 1.6,
                  }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}