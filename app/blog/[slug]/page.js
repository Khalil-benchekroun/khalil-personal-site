import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { posts, getPostBySlug } from '../posts'

export async function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: `${post.title} — Khalil Benchekroun`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.khalilbenchekroun.me/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.khalilbenchekroun.me/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Khalil Benchekroun',
      url: 'https://www.khalilbenchekroun.me',
    },
    publisher: {
      '@type': 'Person',
      name: 'Khalil Benchekroun',
    },
    mainEntityOfPage: `https://www.khalilbenchekroun.me/blog/${post.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <main style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: 'clamp(140px, 15vw, 180px) 24px 100px',
      }}>
        <Link href="/blog" style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '11px',
          color: '#1A56DB',
          textDecoration: 'none',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '40px',
        }}>
          ← Retour au blog
        </Link>

        <div style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '11px',
          color: '#888',
          letterSpacing: '1px',
          marginBottom: '16px',
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
        }}>
          <span>{new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>

        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: 300,
          color: '#0F172A',
          lineHeight: 1.15,
          marginBottom: '24px',
        }}>{post.title}</h1>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '48px', flexWrap: 'wrap' }}>
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

        <article>
          {post.content.map((block, i) => {
            if (block.type === 'h2') {
              return (
                <h2 key={i} style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(22px, 3vw, 30px)',
                  fontWeight: 400,
                  color: '#0F172A',
                  lineHeight: 1.25,
                  margin: '48px 0 20px',
                }}>{block.text}</h2>
              )
            }
            return (
              <p key={i} style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '16px',
                fontWeight: 300,
                color: '#444',
                lineHeight: 1.85,
                marginBottom: '22px',
              }}>{block.text}</p>
            )
          })}
        </article>

        <div style={{
          marginTop: '64px',
          paddingTop: '32px',
          borderTop: '1px solid rgba(201,168,76,0.15)',
        }}>
          <Link href="/blog" style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            color: '#1A56DB',
            textDecoration: 'none',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}>← Voir tous les articles</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
