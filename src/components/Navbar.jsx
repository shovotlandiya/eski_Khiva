import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LogoIcon from './LogoIcon'

const links = [
  { label: 'Bosh sahifa', href: '/' },
  { label: 'Xizmatlar', href: '/#services' },
  { label: 'Biz haqimizda', href: '/about' },
  { label: 'Aloqa', href: '#contact' },
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

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          isTransparent
            ? 'border-transparent bg-transparent'
            : 'border-slate-200 bg-white/80 backdrop-blur'
        }`}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            to="/"
            className={`flex items-center gap-2 text-lg font-semibold transition-colors duration-300 ${
              isTransparent ? 'text-white' : 'text-slate-900'
            }`}
          >
            Khiva <LogoIcon />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm transition-colors duration-300 ${
                  isTransparent
                    ? 'text-white/90 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className={`relative flex h-9 w-9 items-center justify-center rounded-md transition-colors duration-300 md:hidden ${
              isTransparent ? 'text-white' : 'text-slate-700'
            }`}
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
        className={`fixed inset-0 z-60 bg-slate-900/50 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <aside
        id="mobile-menu"
        className={`fixed inset-y-0 left-0 z-70 flex w-72 max-w-[80%] flex-col bg-white shadow-2xl transition-[transform,visibility] duration-300 ease-out md:hidden ${
          isOpen ? 'visible translate-x-0' : 'invisible -translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <span className="text-base font-semibold text-slate-900">Menyu</span>
          <button
            type="button"
            onClick={closeMenu}
            className="flex h-8 w-8 items-center justify-center rounded-md text-slate-500 hover:bg-slate-50 hover:text-slate-900"
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
              className="rounded-md px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
}
