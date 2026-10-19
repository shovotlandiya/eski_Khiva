import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import QoyQirilganQala from './pages/QoyQirilganQala'
import TuproqQala from './pages/TuproqQala'
import KohnaUrganch from './pages/KohnaUrganch'

// Tepasida katta rasm bor sahifalar: navbar rasm ustida shaffof turadi
const PAGES_WITH_HERO = ['/', '/qoy-qirilgan-qala', '/tuproq-qala', '/kohna-urganch']

function App() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar overlayHero={PAGES_WITH_HERO.includes(pathname)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/qoy-qirilgan-qala" element={<QoyQirilganQala />} />
        <Route path="/tuproq-qala" element={<TuproqQala />} />
        <Route path="/kohna-urganch" element={<KohnaUrganch />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
