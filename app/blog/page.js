import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { posts } from './posts'

export const metadata = {
  title: 'Blog — Khalil Benchekroun',
  description: 'Articles sur le growth marketing, la stratégie digitale et la technologie, par Khalil Benchekroun, CTO et enseignant en marketing digital.',
  alternates: {
    canonical: 'https://www.khalilbenchekroun.me/blog',
  },
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: 'clamp(140px, 15vw, 180px) 24px 100px',
      }}>
        <div style={{ marginBottom: '64px' }}>
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
            }}>Blog</span>
          </div>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 300,
            color: '#0F172A',
            lineHeight: 1.1,
          }}>
            Réflexions sur le <em style={{ color: '#1A56DB', fontStyle: 'italic' }}>growth</em>, la stratégie et la technologie
          </h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
          {posts.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                display: 'block',
                textDecoration: 'none',
                padding: '32px 0',
                borderTop: '1px solid rgba(201,168,76,0.15)',
                transition: 'padding-left 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.paddingLeft = '12px'}
              onMouseLeave={e => e.currentTarget.style.paddingLeft = '0px'}
            >
              <div style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '11px',
                color: '#888',
                letterSpacing: '1px',
                marginBottom: '12px',
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
              }}>
                <span>{new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                <span>·</span>
                <span>{post.readingTime}</span>
              </div>
              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(22px, 3vw, 32px)',
                fontWeight: 400,
                color: '#0F172A',
                lineHeight: 1.2,
                marginBottom: '12px',
              }}>{post.title}</h2>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px',
                fontWeight: 300,
                color: '#666',
                lineHeight: 1.7,
                maxWidth: '700px',
              }}>{post.excerpt}</p>
              <div style={{ display: 'flex', gap: '8px', marginTop: '16px', flexWrap: 'wrap' }}>
                {post.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '10px',
                    color: '#1A56DB',
                    border: '1px solid rgba(201,168,76,0.25)',
                    padding: '4px 10px',
                    letterSpacing: '1px',
                  }}>{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
