'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', subject: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:benchekrounkhalil10@gmail.com?subject=${encodeURIComponent(form.subject || 'Contact depuis khalilbenchekroun.me')}&body=${encodeURIComponent(`Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailto
    setSent(true)
  }

  const socials = [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/khalil-benchekroun/', icon: 'in' },
    { label: 'Email', url: 'mailto:benchekrounkhalil10@gmail.com', icon: '@' },
  ]

  return (
    <section id="contact" style={{
      padding: 'clamp(80px, 10vw, 140px) 80px',
      background: 'rgba(201,168,76,0.02)',
      borderTop: '1px solid rgba(201,168,76,0.08)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
        }} className="contact-grid">

          {/* Left */}
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
              }}>Contact</span>
            </div>

            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px, 4vw, 56px)',
              fontWeight: 300,
              color: '#F5F3EE',
              lineHeight: 1.1,
              marginBottom: '32px',
            }}>
              Construisons
              <br />
              <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>quelque chose ensemble</em>
            </h2>

            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '15px',
              fontWeight: 300,
              color: '#666',
              lineHeight: 1.8,
              marginBottom: '48px',
            }}>
              Vous avez un projet, une question, une collaboration en tête ?
              Je réponds à chaque message personnellement. Pas de formulaire
              automatisé, pas de template — une vraie conversation.
            </p>

            {/* Social links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {socials.map(social => (
                <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  textDecoration: 'none',
                  padding: '16px 20px',
                  border: '1px solid rgba(201,168,76,0.15)',
                  transition: 'border-color 0.3s, background 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'
                  e.currentTarget.style.background = 'rgba(201,168,76,0.04)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)'
                  e.currentTarget.style.background = 'transparent'
                }}
                >
                  <div style={{
                    width: '36px',
                    height: '36px',
                    border: '1px solid rgba(201,168,76,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#C9A84C',
                    flexShrink: 0,
                  }}>{social.icon}</div>
                  <span style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    fontWeight: 300,
                    color: '#888',
                    letterSpacing: '1px',
                  }}>{social.label}</span>
                  <span style={{
                    marginLeft: 'auto',
                    color: '#C9A84C',
                    fontSize: '16px',
                  }}>→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {sent ? (
              <div style={{
                border: '1px solid rgba(201,168,76,0.3)',
                padding: '64px 48px',
                textAlign: 'center',
              }}>
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '48px',
                  color: '#C9A84C',
                  marginBottom: '16px',
                }}>✓</div>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '28px',
                  fontWeight: 300,
                  color: '#F5F3EE',
                  marginBottom: '12px',
                }}>Message envoyé</h3>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  color: '#666',
                }}>Je vous réponds dans les 24 heures.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { name: 'name', label: 'Nom complet', type: 'text', required: true },
                  { name: 'email', label: 'Email', type: 'email', required: true },
                  { name: 'subject', label: 'Sujet', type: 'text', required: false },
                ].map(field => (
                  <div key={field.name}>
                    <label style={{
                      display: 'block',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '10px',
                      color: '#C9A84C',
                      letterSpacing: '3px',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                    }}>{field.label}{field.required && ' *'}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      required={field.required}
                      style={{
                        width: '100%',
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid rgba(201,168,76,0.2)',
                        padding: '12px 0',
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '15px',
                        fontWeight: 300,
                        color: '#F5F3EE',
                        outline: 'none',
                        transition: 'border-color 0.3s',
                      }}
                      onFocus={e => e.target.style.borderColor = '#C9A84C'}
                      onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
                    />
                  </div>
                ))}

                <div>
                  <label style={{
                    display: 'block',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '10px',
                    color: '#C9A84C',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}>Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: '1px solid rgba(201,168,76,0.2)',
                      padding: '16px',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '15px',
                      fontWeight: 300,
                      color: '#F5F3EE',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.3s',
                    }}
                    onFocus={e => e.target.style.borderColor = '#C9A84C'}
                    onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
                  />
                </div>

                <button type="submit" style={{
                  background: '#C9A84C',
                  border: 'none',
                  padding: '18px 40px',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  fontWeight: 500,
                  color: '#0A0A0A',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  alignSelf: 'flex-start',
                }}
                onMouseEnter={e => {
                  e.target.style.background = '#E8C97A'
                  e.target.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.target.style.background = '#C9A84C'
                  e.target.style.transform = 'translateY(0)'
                }}
                >
                  Envoyer le message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}