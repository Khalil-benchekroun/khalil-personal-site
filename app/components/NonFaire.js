'use client'
import { useLanguage } from '../LanguageContext'

export default function NonFaire() {
  const { t } = useLanguage()

  const items = [
    { title: t.nonfaire_i1_title, sub: t.nonfaire_i1_sub },
    { title: t.nonfaire_i2_title, sub: t.nonfaire_i2_sub },
    { title: t.nonfaire_i3_title, sub: t.nonfaire_i3_sub },
    { title: t.nonfaire_i4_title, sub: t.nonfaire_i4_sub },
    { title: t.nonfaire_i5_title, sub: t.nonfaire_i5_sub },
  ]

  return (
    <section style={{
      padding: 'clamp(80px, 10vw, 140px) 80px',
      background: 'rgba(201,168,76,0.02)',
      borderTop: '1px solid rgba(201,168,76,0.08)',
      borderBottom: '1px solid rgba(201,168,76,0.08)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
          marginBottom: '72px',
        }} className="nonfaire-header">
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '24px',
            }}>
              <div style={{ width: '40px', height: '1px', background: '#1A56DB' }} />
              <span style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '11px',
                color: '#1A56DB',
                letterSpacing: '4px',
                textTransform: 'uppercase',
              }}>{t.nonfaire_label}</span>
            </div>

            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px, 4vw, 60px)',
              fontWeight: 300,
              color: '#0F172A',
              lineHeight: 1.1,
            }}>
              {t.nonfaire_title1}
              <br />
              <em style={{ color: '#1A56DB', fontStyle: 'italic' }}>{t.nonfaire_title2}</em>
            </h2>
          </div>

          <div style={{ paddingTop: '16px' }}>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '15px',
              fontWeight: 300,
              color: '#666',
              lineHeight: 1.8,
            }}>{t.nonfaire_desc}</p>
            <div style={{
              marginTop: '32px',
              padding: '20px 24px',
              border: '1px solid rgba(201,168,76,0.2)',
              borderLeft: '3px solid #1A56DB',
            }}>
              <p style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '18px',
                fontStyle: 'italic',
                fontWeight: 300,
                color: '#0F172A',
                lineHeight: 1.6,
              }}>"{t.nonfaire_quote}"</p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
          {items.map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '32px',
              padding: 'clamp(20px, 4vw, 32px) clamp(16px, 4vw, 40px)',
              background: '#FFFFFF',
              border: '1px solid rgba(201,168,76,0.06)',
              transition: 'all 0.3s',
              cursor: 'default',
              overflow: 'hidden',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'
              e.currentTarget.style.background = '#0D0D0D'
              e.currentTarget.querySelector('.x-mark').style.color = '#1A56DB'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.06)'
              e.currentTarget.style.background = '#FFFFFF'
              e.currentTarget.querySelector('.x-mark').style.color = '#333'
            }}
            >
              <div className="x-mark" style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '18px',
                fontWeight: 300,
                color: '#333',
                flexShrink: 0,
                marginTop: '2px',
                transition: 'color 0.3s',
                width: '24px',
              }}>✕</div>

              <div style={{ flex: 1 }}>
                <p style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(15px, 1.8vw, 22px)',
                  fontWeight: 400,
                  color: '#0F172A',
                  lineHeight: 1.4,
                  marginBottom: '8px',
                }}>{item.title}</p>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 300,
                  color: '#555',
                  lineHeight: 1.6,
                }}>{item.sub}</p>
              </div>

              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '48px',
                fontWeight: 300,
                color: 'rgba(201,168,76,0.05)',
                flexShrink: 0,
                lineHeight: 1,
                alignSelf: 'center',
              }}>0{i + 1}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nonfaire-header {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  )
}