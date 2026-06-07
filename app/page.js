import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Methode from './components/Methode'
import NonFaire from './components/NonFaire'
import Livres from './components/Livres'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Methode />
        <NonFaire />
        <Livres />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  )
}