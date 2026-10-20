import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LogoIcon from './LogoIcon'
import { SITE_NAME } from '../routes'

const links = [
  { label: 'Bosh sahifa', href: '/' },
  { label: 'Yodgorliklar', href: '/#services' },
  { label: 'Biz haqimizda', href: '/about' },
  { label: 'Aloqa', href: '/aloqa', cta: true },
]

export default function Navbar({ overlayHero = false }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (!overlayHero) return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [overlayHero])

  // Panel ochiq bo'lganda sahifa fonini skroll qilishni to'xtatamiz va Escape bilan yopamiz
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const isTransparent = overlayHero && !isScrolled
  const closeMenu = () => setIsOpen(false)

  const linkClass = (link) =>
    link.cta
      ? 'rounded-full bg-linear-to-r from-firuza-400 to-kobalt-500 px-5 py-2 font-semibold text-white shadow-[0_4px_20px_-4px] shadow-firuza-400/50 transition hover:brightness-110'
      : 'font-medium text-white/70 transition-colors hover:text-white'

  return (
    <>
      {/* Navbar har doim to'q: rasm ustida shaffof, aylantirilganda — shisha effekti */}
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b text-white transition-colors duration-300 ${
          isTransparent ? 'border-transparent bg-transparent' : 'border-white/10 bg-tun-950/75 backdrop-blur-xl'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          <Link to="/" className="flex items-center gap-2.5">
            <LogoIcon className="h-7 w-7 text-firuza-300" />
            <span className="font-display text-lg font-semibold tracking-tight">{SITE_NAME}</span>
            <span className="rounded-md border border-firuza-400/40 bg-firuza-400/10 px-1.5 py-0.5 font-mono text-[10px] font-medium tracking-wider text-firuza-200">
              3D
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-[15px] md:flex">
            {links.map((link) => (
              <Link key={link.label} to={link.href} className={linkClass(link)}>
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="relative flex h-9 w-9 items-center justify-center rounded-md text-white md:hidden"
            aria-label="Menyuni ochish"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className="absolute h-0.5 w-5 -translate-y-1.5 bg-current" />
            <span className="absolute h-0.5 w-5 bg-current" />
            <span className="absolute h-0.5 w-5 translate-y-1.5 bg-current" />
          </button>
        </div>
      </header>

      {/*
        Panel header'dan tashqarida turishi shart: header'dagi backdrop-blur
        ichidagi `fixed` elementlarni header balandligiga qamab qo'yadi.
      */}
      <div
        onClick={closeMenu}
        aria-hidden="true"
        className={`fixed inset-0 z-60 bg-tun-950/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <aside
        id="mobile-menu"
        className={`fixed inset-y-0 left-0 z-70 flex w-72 max-w-[80%] flex-col border-r border-white/10 bg-tun-900 text-white shadow-2xl transition-[transform,visibility] duration-300 ease-out md:hidden ${
          isOpen ? 'visible translate-x-0' : 'invisible -translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <span className="font-display text-lg font-semibold">{SITE_NAME}</span>
          <button
            type="button"
            onClick={closeMenu}
            className="flex h-8 w-8 items-center justify-center rounded-md text-white/60 hover:bg-white/10 hover:text-white"
            aria-label="Menyuni yopish"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-4 py-4">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={closeMenu}
              className="rounded-md px-3 py-2.5 font-medium text-white/75 transition-colors hover:bg-white/5 hover:text-firuza-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
}
