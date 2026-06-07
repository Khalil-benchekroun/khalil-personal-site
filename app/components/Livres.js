'use client'

export default function Livres() {
  const livres = [
    {
      cover: '/livre-marketing-ia.jpg',
      titre: 'Marketing Digital au Service de l\'IA',
      sousTitre: 'Stratégie · Intelligence Artificielle · Innovation',
      description: 'L\'IA est en train de révolutionner le marketing digital. L\'évolution du digital et de la société pousse les développeurs à optimiser leurs algorithmes en y intégrant l\'intelligence artificielle pour performer et se tenir à la pointe de la technologie. Ce livre établit une relation précise entre ces deux univers.',
      langue: 'Français',
      lien: 'https://www.amazon.com/Marketing-digital-service-lIA-French-ebook/dp/B08KJBGBPV',
    },
    {
      cover: '/livre-rise-and-shine.jpg',
      titre: 'Rise and Shine',
      sousTitre: 'Tips and Strategies to Boost Your Motivation',
      description: 'Libérez votre plein potentiel et atteignez vos objectifs avec ce guide complet sur la motivation. Que vous cherchiez à booster votre carrière, votre développement personnel ou simplement maintenir votre élan au quotidien — des stratégies concrètes, des exemples réels, des résultats mesurables.',
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
      {/* Header */}
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
          }}>Publications</span>
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
            Auteur de
            <em style={{ color: '#C9A84C', fontStyle: 'italic' }}> 2 ouvrages</em>
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            fontWeight: 300,
            color: '#666',
            maxWidth: '360px',
            lineHeight: 1.7,
          }}>
            L'écriture comme extension naturelle de l'enseignement — rendre le savoir accessible, actionnable, durable.
          </p>
        </div>
      </div>

      {/* Books grid */}
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
            background: '#0A0A0A',
            transition: 'border-color 0.3s, background 0.3s',
            overflow: 'hidden',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'
            e.currentTarget.style.background = '#0D0D0D'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(201,168,76,0.1)'
            e.currentTarget.style.background = '#0A0A0A'
          }}
          className="livre-card"
          >
            {/* Cover */}
            <div style={{
              position: 'relative',
              overflow: 'hidden',
              borderRight: '1px solid rgba(201,168,76,0.1)',
              minHeight: '320px',
              background: '#111111',
            }}>
              <img
                src={livre.cover}
                alt={livre.titre}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'center center',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                  position: 'absolute',
                  inset: 0,
                }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
              {/* Language badge */}
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
                  color: '#C9A84C',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                }}>{livre.langue}</span>
              </div>
            </div>

            {/* Content */}
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
                  color: '#F5F3EE',
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
                color: '#C9A84C',
                textDecoration: 'none',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                borderBottom: '1px solid rgba(201,168,76,0.3)',
                paddingBottom: '4px',
                alignSelf: 'flex-start',
                transition: 'color 0.3s, border-color 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#E8C97A'
                e.currentTarget.style.borderColor = '#E8C97A'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#C9A84C'
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'
              }}
              >
                Voir sur Amazon
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