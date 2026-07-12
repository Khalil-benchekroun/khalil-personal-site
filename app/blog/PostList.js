'use client'
import Link from 'next/link'

export default function PostList({ posts }) {
  return (
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
  )
}
