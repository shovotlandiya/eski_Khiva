import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import QoyQirilganQala from './pages/QoyQirilganQala'
import TuproqQala from './pages/TuproqQala'
import KohnaUrganch from './pages/KohnaUrganch'
import Aloqa from './pages/Aloqa'
import { routes, pageTitle } from './routes'

const PAGES = {
  '/': <Home />,
  '/about': <About />,
  '/qoy-qirilgan-qala': <QoyQirilganQala />,
  '/tuproq-qala': <TuproqQala />,
  '/kohna-urganch': <KohnaUrganch />,
  '/aloqa': <Aloqa />,
}

function App() {
  const { pathname, hash } = useLocation()
  // "/tuproq-qala/" va "/tuproq-qala" bir xil sahifa
  const route = routes.find((r) => r.path === (pathname.replace(/\/+$/, '') || '/'))

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  useEffect(() => {
    document.title = pageTitle(route)
  }, [route])

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Tepasida katta rasm bor sahifalarda navbar rasm ustida shaffof turadi */}
      <Navbar overlayHero={Boolean(route?.hero)} />
      <Routes>
        {routes.map((r) => (
          <Route key={r.path} path={r.path} element={PAGES[r.path]} />
        ))}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
