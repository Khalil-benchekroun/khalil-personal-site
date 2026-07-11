'use client'
import Image from 'next/image'
import { useLanguage } from '../LanguageContext'

export default function Livres() {
  const { t } = useLanguage()

  const livres = [
    {
      cover: '/livre-marketing-ia.jpg',
      titre: 'Marketing Digital au Service de l\'IA',
      sousTitre: 'Stratégie · Intelligence Artificielle · Innovation',
      description: t.livres_desc_1 || 'L\'IA est en train de révolutionner le marketing digital. L\'évolution du digital et de la société pousse les développeurs à optimiser leurs algorithmes en y intégrant l\'intelligence artificielle pour performer et se tenir à la pointe de la technologie. Ce livre établit une relation précise entre ces deux univers.',
      langue: 'Français',
      lien: 'https://www.amazon.com/Marketing-digital-service-lIA-French-ebook/dp/B08KJBGBPV',
    },
    {
      cover: '/livre-rise-and-shine.jpg',
      titre: 'Rise and Shine',
      sousTitre: 'Tips and Strategies to Boost Your Motivation',
      description: t.livres_desc_2 || 'Libérez votre plein potentiel et atteignez vos objectifs avec ce guide complet sur la motivation. Des stratégies concrètes, des exemples réels, des résultats mesurables.',
      langue: 'English',
      lien: 'https://www.amazon.com/Rise-Shine-Strategies-Boost-Motivation-ebook/dp/B0BY3LJM3R',
    },
  ]

  return (
    <section id="livres" style={{
      padding: 'clamp(80px, 10vw, 140px) 80px',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <div style={{ marginBottom: '72px' }}>
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
          }}>{t.livres_label}</span>
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
            {t.livres_title1}
            <em style={{ color: '#1A56DB', fontStyle: 'italic' }}> {t.livres_title2}</em>
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            fontWeight: 300,
            color: '#666',
            maxWidth: '360px',
            lineHeight: 1.7,
          }}>{t.livres_subtitle}</p>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '32px',
      }} className="livres-grid">
        {livres.map((livre, i) => (
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: '220px 1fr',
            gap: '0',
            border: '1px solid rgba(201,168,76,0.1)',
            background: '#FFFFFF',
            transition: 'border-color 0.3s, background 0.3s',
            overflow: 'hidden',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'
            e.currentTarget.style.background = '#0D0D0D'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(201,168,76,0.1)'
            e.currentTarget.style.background = '#FFFFFF'
          }}
          className="livre-card"
          >
            <div style={{
              position: 'relative',
              overflow: 'hidden',
              borderRight: '1px solid rgba(201,168,76,0.1)',
              minHeight: '320px',
              background: '#F8F9FA',
            }}>
              <Image
                src={livre.cover}
                alt={livre.titre}
                fill
                sizes="220px"
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center center',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                background: 'rgba(10,10,10,0.85)',
                border: '1px solid rgba(201,168,76,0.3)',
                padding: '4px 10px',
                zIndex: 1,
              }}>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '9px',
                  color: '#1A56DB',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                }}>{livre.langue}</span>
              </div>
            </div>

            <div style={{
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '20px',
            }}>
              <div>
                <div style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '9px',
                  color: '#555',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}>{livre.sousTitre}</div>

                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(20px, 2vw, 26px)',
                  fontWeight: 400,
                  color: '#0F172A',
                  lineHeight: 1.2,
                  marginBottom: '16px',
                }}>{livre.titre}</h3>

                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 300,
                  color: '#666',
                  lineHeight: 1.8,
                }}>{livre.description}</p>
              </div>

              <a href={livre.lien} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '10px',
                fontWeight: 500,
                color: '#1A56DB',
                textDecoration: 'none',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                borderBottom: '1px solid rgba(201,168,76,0.3)',
                paddingBottom: '4px',
                alignSelf: 'flex-start',
                transition: 'color 0.3s, border-color 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#3B82F6'
                e.currentTarget.style.borderColor = '#3B82F6'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#1A56DB'
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'
              }}
              >
                {t.livres_cta}
                <span style={{ fontSize: '14px' }}>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .livres-grid {
            grid-template-columns: 1fr !important;
          }
          .livre-card {
            grid-template-columns: 160px 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .livre-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}