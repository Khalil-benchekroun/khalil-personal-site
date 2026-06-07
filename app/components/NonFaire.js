'use client'

export default function NonFaire() {
  const items = [
    {
      title: 'Je ne travaille pas avec des clients qui veulent des résultats en 2 semaines.',
      sub: 'La croissance durable se construit sur des mois, pas des sprints.',
    },
    {
      title: 'Je ne vends pas des livrables — je vends des transformations.',
      sub: 'Un rapport de 50 slides sans suivi d\'exécution ne m\'intéresse pas.',
    },
    {
      title: 'Je ne dilue pas mon expertise pour décrocher un contrat.',
      sub: 'Si votre projet ne correspond pas à mon champ, je vous le dis clairement.',
    },
    {
      title: 'Je ne travaille pas sans accès aux données réelles.',
      sub: 'Pas de stratégie sérieuse sans analytics, chiffres de vente ou feedback terrain.',
    },
    {
      title: 'Je ne suis pas disponible 24h/24.',
      sub: 'Je travaille avec focus et profondeur — pas dans l\'urgence permanente.',
    },
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
              <div style={{ width: '40px', height: '1px', background: '#C9A84C' }} />
              <span style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '11px',
                color: '#C9A84C',
                letterSpacing: '4px',
                textTransform: 'uppercase',
              }}>Mes convictions</span>
            </div>

            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px, 4vw, 60px)',
              fontWeight: 300,
              color: '#F5F3EE',
              lineHeight: 1.1,
            }}>
              Ce que je
              <br />
              <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>ne fais pas.</em>
            </h2>
          </div>

          <div style={{ paddingTop: '16px' }}>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '15px',
              fontWeight: 300,
              color: '#666',
              lineHeight: 1.8,
            }}>
              Travailler avec les bonnes personnes est plus important que travailler avec beaucoup de personnes.
              Ces lignes directrices ne sont pas des contraintes — elles sont la condition d'un travail de qualité.
            </p>
            <div style={{
              marginTop: '32px',
              padding: '20px 24px',
              border: '1px solid rgba(201,168,76,0.2)',
              borderLeft: '3px solid #C9A84C',
            }}>
              <p style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '18px',
                fontStyle: 'italic',
                fontWeight: 300,
                color: '#F5F3EE',
                lineHeight: 1.6,
              }}>
                "Je préfère refuser un projet que de le livrer à moitié."
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
          {items.map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '32px',
              padding: '32px 40px',
              background: '#0A0A0A',
              border: '1px solid rgba(201,168,76,0.06)',
              transition: 'all 0.3s',
              cursor: 'default',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'
              e.currentTarget.style.background = '#0D0D0D'
              e.currentTarget.querySelector('.x-mark').style.color = '#C9A84C'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.06)'
              e.currentTarget.style.background = '#0A0A0A'
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
                  fontSize: 'clamp(18px, 2vw, 22px)',
                  fontWeight: 400,
                  color: '#F5F3EE',
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