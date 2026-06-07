'use client'
export default function Expertise() {
  const pillars = [
    {
      number: '01',
      title: 'Marketing Digital & Growth',
      description: 'Stratégie d\'acquisition, Google Ads, Meta Ads, SEO, content marketing et funnel d\'optimisation. Une approche data-driven qui transforme chaque euro investi en résultat mesurable.',
      tags: ['Google Ads', 'Meta Ads', 'SEO', 'Content Strategy', 'Analytics'],
    },
    {
      number: '02',
      title: 'Enseignement & Transmission',
      description: 'Professeur universitaire spécialisé en marketing, management et stratégie digitale. La pédagogie comme levier de transformation — des concepts complexes rendus actionnables.',
      tags: ['Marketing Stratégique', 'Management', 'Cours & Formations', 'Accompagnement'],
    },
    {
      number: '03',
      title: 'Tech & Product Building',
      description: 'CTO et builder full-stack. De la vision produit à l\'architecture technique, en passant par le développement et le déploiement. La tech au service de la stratégie business.',
      tags: ['React / Next.js', 'Node.js', 'Supabase', 'Product Strategy', 'CTO Advisory'],
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
            }}>Expertise</span>
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
              Un profil triptyque
              <br />
              <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>rare et complémentaire</em>
            </h2>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              fontWeight: 300,
              color: '#666',
              maxWidth: '320px',
              lineHeight: 1.7,
            }}>
              Trois dimensions qui se renforcent mutuellement pour créer une valeur qu'aucun profil isolé ne peut offrir.
            </p>
          </div>
        </div>

        {/* Pillars */}
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
              {/* Number */}
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

              {/* Gold dot */}
              <div style={{
                width: '8px',
                height: '8px',
                background: '#C9A84C',
                marginBottom: '32px',
              }} />

              {/* Title */}
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '26px',
                fontWeight: 400,
                color: '#F5F3EE',
                lineHeight: 1.2,
                marginBottom: '20px',
              }}>{pillar.title}</h3>

              {/* Description */}
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px',
                fontWeight: 300,
                color: '#666',
                lineHeight: 1.7,
                marginBottom: '32px',
              }}>{pillar.description}</p>

              {/* Tags */}
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

              {/* Bottom line on hover */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '1px',
                background: 'linear-gradient(to right, #C9A84C, transparent)',
                opacity: 0,
                transition: 'opacity 0.3s',
              }} className="bottom-line" />
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
