'use client'
export default function About() {
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
            background: '#111111',
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
            {/* Corner decorations */}
            <div style={{
              position: 'absolute', top: '16px', left: '16px',
              width: '30px', height: '30px',
              borderTop: '1px solid #C9A84C',
              borderLeft: '1px solid #C9A84C',
            }} />
            <div style={{
              position: 'absolute', bottom: '16px', right: '16px',
              width: '30px', height: '30px',
              borderBottom: '1px solid #C9A84C',
              borderRight: '1px solid #C9A84C',
            }} />
          </div>

          {/* Gold offset block */}
          <div style={{
            position: 'absolute',
            bottom: '-20px',
            right: '-20px',
            width: '120px',
            height: '120px',
            border: '1px solid rgba(201,168,76,0.2)',
            zIndex: -1,
          }} />

          {/* LIVRR badge */}
          <div style={{
            position: 'absolute',
            bottom: '32px',
            left: '-24px',
            background: '#C9A84C',
            padding: '16px 20px',
          }}>
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '22px',
              fontWeight: 500,
              color: '#0A0A0A',
              lineHeight: 1,
            }}>LIVRR</div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '9px',
              color: '#0A0A0A',
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
            <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
            <span style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '11px',
              color: '#C9A84C',
              letterSpacing: '4px',
              textTransform: 'uppercase',
            }}>À propos</span>
          </div>

          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(36px, 4vw, 56px)',
            fontWeight: 300,
            color: '#F5F3EE',
            lineHeight: 1.1,
            marginBottom: '32px',
          }}>
            Là où la stratégie
            <br />
            <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>rencontre l'exécution</em>
          </h2>

          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '15px',
            fontWeight: 300,
            color: '#888888',
            lineHeight: 1.8,
            marginBottom: '24px',
          }}>
            En 12 ans, j'ai appris que la croissance durable ne vient pas des raccourcis.
            Elle vient d'une compréhension profonde des marchés, des comportements,
            et de la capacité à construire des systèmes qui scalent.
          </p>

          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '15px',
            fontWeight: 300,
            color: '#888888',
            lineHeight: 1.8,
            marginBottom: '40px',
          }}>
            Aujourd'hui, je combine trois casquettes rares :
            <span style={{ color: '#F5F3EE' }}> expert marketing terrain</span>,
            <span style={{ color: '#F5F3EE' }}> professeur universitaire</span>, et
            <span style={{ color: '#F5F3EE' }}> CTO</span> d'une startup tech premium.
            Ce triptyque me permet d'aborder chaque problème avec une rigueur et
            une vision à 360°.
          </p>

          <div style={{
            width: '100%',
            height: '1px',
            background: 'rgba(201,168,76,0.15)',
            marginBottom: '40px',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { title: 'Rigueur académique', desc: 'La théorie au service de la pratique — pas l\'inverse.' },
              { title: 'Résultats mesurables', desc: 'Chaque stratégie doit se traduire en chiffres concrets.' },
              { title: 'Vision long terme', desc: 'Construire des actifs durables, pas des effets de mode.' },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  background: '#C9A84C',
                  marginTop: '6px',
                  flexShrink: 0,
                }} />
                <div>
                  <div style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: '#F5F3EE',
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