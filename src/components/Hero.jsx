import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import { singleImage, videoSrc } from '../utils/images'

// Fondagi 16 soniyalik lavha Ko'hna Urganch 3D videosidan kesib olingan (ovozsiz, 720p, ~3 MB).
// Muqova (poster) index.html'da oldindan yuklanadi — almashtirsangiz, u yerni ham yangilang.
const POSTER = singleImage('hero/3d-poster')

const stats = [
  { value: '3', label: '3D yodgorlik' },
  { value: '2300+', label: 'yillik tarix' },
  { value: '2', label: 'YuNESKO obyekti' },
]

export default function Hero() {
  const videoRef = useRef(null)

  // "Harakatni kamaytirish" yoqilgan bo'lsa video o'ynamaydi — faqat muqova ko'rinadi
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) videoRef.current?.pause()
  }, [])

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-tun-950 text-white">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={POSTER}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={videoSrc('hero-loop')} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-linear-to-r from-tun-950/90 via-tun-950/45 to-tun-950/10" />
      <div className="absolute inset-0 bg-linear-to-b from-tun-950/60 via-transparent to-tun-950" />
      <div className="chizma absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-16">
        <p className="inline-flex w-fit items-center gap-2.5 rounded-full border border-firuza-400/30 bg-firuza-400/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-firuza-200 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-firuza-400 shadow-[0_0_10px_2px] shadow-firuza-400/70" />
          Raqamli meros · 3D rekonstruksiya
        </p>

        <h1 className="mt-6 max-w-5xl font-display text-[2.6rem] leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
          Xiva xonligi tarixi
          <span className="matn-nur block">3D formatda</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
          Ming yillik qal'alar va shaharlar zamonaviy 3D texnologiyalar yordamida qayta tiklandi. Tarixni o'z
          ko'zingiz bilan ko'ring.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            to="/#kinozal"
            className="group inline-flex items-center gap-2.5 rounded-full bg-linear-to-r from-firuza-400 to-kobalt-500 px-6 py-3.5 font-semibold text-white shadow-[0_8px_32px_-6px] shadow-firuza-400/60 transition hover:brightness-110"
          >
            <Icon name="play" className="h-4 w-4 fill-current" />
            3D videolarni ko'rish
          </Link>
          <Link
            to="/#services"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-semibold backdrop-blur-md transition hover:border-white/40 hover:bg-white/10"
          >
            Yodgorliklar
            <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Pastki qator: koordinatalar va raqamlar */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto flex max-w-7xl items-end justify-between gap-6 px-6 pb-8">
          <p className="hidden font-mono text-xs tracking-[0.2em] text-white/45 sm:block">
            41°22′N · 60°21′E — XIVA
          </p>
          <dl className="grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 py-3 sm:px-6">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-xl font-semibold sm:text-2xl">{stat.value}</span>
                  <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-wider text-white/55 sm:text-[11px]">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
