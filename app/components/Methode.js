'use client'
import Image from 'next/image'
import { useLanguage } from '../LanguageContext'

export default function Methode() {
  const { t } = useLanguage()

  const steps = [
    {
      number: '01',
      title: t.methode_s1_title,
      description: t.methode_s1_desc,
      details: [t.methode_s1_d1, t.methode_s1_d2, t.methode_s1_d3],
    },
    {
      number: '02',
      title: t.methode_s2_title,
      description: t.methode_s2_desc,
      details: [t.methode_s2_d1, t.methode_s2_d2, t.methode_s2_d3],
    },
    {
      number: '03',
      title: t.methode_s3_title,
      description: t.methode_s3_desc,
      details: [t.methode_s3_d1, t.methode_s3_d2, t.methode_s3_d3],
    },
  ]

  return (
    <section id="methode" style={{
      padding: 'clamp(80px, 10vw, 140px) clamp(20px, 5vw, 80px)',
      background: 'rgba(201,168,76,0.02)',
      borderTop: '1px solid rgba(201,168,76,0.08)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ marginBottom: '80px' }}>
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
            }}>{t.methode_label}</span>
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
              color: '#0F172A',
              lineHeight: 1.1,
            }}>
              {t.methode_title1}
              <br />
              <em style={{ color: '#1A56DB', fontStyle: 'italic' }}>{t.methode_title2}</em>
            </h2>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              fontWeight: 300,
              color: '#666',
              maxWidth: '340px',
              lineHeight: 1.7,
            }}>{t.methode_subtitle}</p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.6fr',
          gap: '64px',
          alignItems: 'start',
        }} className="methode-grid">

          {/* Photo */}
          <div style={{ position: 'relative' }}>
            <div style={{
              width: '100%',
              aspectRatio: '3/4',
              overflow: 'hidden',
              border: '1px solid rgba(201,168,76,0.15)',
              position: 'relative',
            }}>
              <Image
                src="/photo-methode.png"
                alt="Khalil Benchekroun en action"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center top',
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                height: '40%',
                background: 'linear-gradient(to top, rgba(10,10,10,0.7), transparent)',
              }} />
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
              bottom: '-16px', right: '-16px',
              width: '80px', height: '80px',
              border: '1px solid rgba(201,168,76,0.2)',
              zIndex: -1,
            }} />
          </div>

          {/* Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
            {steps.map((step, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '64px 1fr',
                background: '#FFFFFF',
                border: '1px solid rgba(201,168,76,0.08)',
                transition: 'border-color 0.3s, background 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)'
                e.currentTarget.style.background = '#0F0F0F'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.08)'
                e.currentTarget.style.background = '#FFFFFF'
              }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  padding: '32px 0',
                  borderRight: '1px solid rgba(201,168,76,0.08)',
                }}>
                  <div style={{
                    width: '36px', height: '36px',
                    border: '1px solid rgba(201,168,76,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#FFFFFF',
                  }}>
                    <span style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#1A56DB',
                    }}>{i + 1}</span>
                  </div>
                </div>

                <div style={{ padding: '32px' }}>
                  <div style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '10px',
                    color: '#444',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                  }}>{step.number}</div>

                  <h3 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '22px',
                    fontWeight: 400,
                    color: '#0F172A',
                    lineHeight: 1.2,
                    marginBottom: '12px',
                  }}>{step.title}</h3>

                  <p style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    fontWeight: 300,
                    color: '#666',
                    lineHeight: 1.8,
                    marginBottom: '16px',
                  }}>{step.description}</p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {step.details.map((detail, j) => (
                      <span key={j} style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '10px',
                        color: '#1A56DB',
                        border: '1px solid rgba(201,168,76,0.2)',
                        padding: '4px 10px',
                        letterSpacing: '1px',
                      }}>{detail}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .methode-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}