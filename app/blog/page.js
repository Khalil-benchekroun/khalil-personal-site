import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cursor from '../components/Cursor'
import PostList from './PostList'
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
      <Cursor />
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

        <PostList posts={posts} />
      </main>
      <Footer />
    </>
  )
}