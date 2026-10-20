// Yodgorlik sahifalari (Qo'y Qirilgan qal'a, Tuproq qal'a, ...) uchun umumiy qismlar.
// Ritm: to'q bosh qism (rasm, faktlar, 3D video) → oq maqola → to'q footer.
import { Link } from 'react-router-dom'
import Icon from './Icon'

// Maqola ustuni (max-w-4xl) ichidagi rasmlar uchun
const ARTICLE_SIZES = '(min-width: 896px) 832px, 100vw'

export function MonumentHero({ image, alt, title, subtitle }) {
  return (
    <div className="relative h-[520px] w-full overflow-hidden bg-tun-950 text-white sm:h-[600px]">
      <img
        src={image.src}
        srcSet={image.srcSet}
        sizes="100vw"
        alt={alt}
        decoding="async"
        // eslint-disable-next-line react/no-unknown-property -- React 18 `fetchPriority`ni tanimaydi, kichik harf kerak
        fetchpriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-tun-950 via-tun-950/55 to-tun-950/40" />
      <div className="chizma absolute inset-0 [mask-image:linear-gradient(to_top,black,transparent_75%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col justify-end px-6 pb-16">
        <nav aria-label="Breadcrumb" className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">
          <Link to="/" className="transition-colors hover:text-firuza-300">Bosh sahifa</Link>
          <span className="mx-2">/</span>
          <Link to="/#services" className="transition-colors hover:text-firuza-300">Yodgorliklar</Link>
        </nav>
        <h1 className="mt-4 font-display text-4xl leading-[1.1] font-semibold tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-white/70">{subtitle}</p>
        <Link
          to="#3d"
          className="mt-7 inline-flex w-fit items-center gap-2.5 rounded-full bg-linear-to-r from-firuza-400 to-kobalt-500 px-5 py-3 text-sm font-semibold shadow-[0_8px_32px_-6px] shadow-firuza-400/60 transition hover:brightness-110"
        >
          <Icon name="play" className="h-3.5 w-3.5 fill-current" />
          3D videoni ko'rish
        </Link>
      </div>
    </div>
  )
}

// Bosh rasm ostidagi to'q qism: asosiy faktlar va 3D video
export function Intro({ children }) {
  return (
    <div className="relative overflow-hidden bg-tun-950 pb-24 text-white">
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-firuza-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-kobalt-500/10 blur-[140px]" />
      <div className="relative mx-auto max-w-4xl px-6">{children}</div>
    </div>
  )
}

export function Facts({ items }) {
  return (
    <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((fact) => (
        <div key={fact.label} className="bg-tun-900 p-5">
          <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-firuza-300">{fact.label}</dt>
          <dd className="mt-2 font-medium">{fact.value}</dd>
        </div>
      ))}
    </dl>
  )
}

// 3D video: "play" bosilmaguncha yuklanmaydi (preload="none"), ungacha muqova rasmi ko'rinadi
export function Video3D({ src, poster, title, children }) {
  return (
    // id="3d": bosh sahifadagi video kartalari shu bo'limga olib keladi (/tuproq-qala#3d)
    <section id="3d" className="mt-16 scroll-mt-24">
      <div className="flex items-center gap-3">
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">3D ko'rinish</h2>
        <span className="rounded-full border border-firuza-400/40 bg-firuza-400/10 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-firuza-200">
          Video
        </span>
      </div>
      <p className="mt-3 text-lg leading-8 text-white/60">{children}</p>
      <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_0_80px_-20px] shadow-firuza-400/30">
        <video controls playsInline preload="none" poster={poster} aria-label={title} className="aspect-video w-full bg-black">
          <source src={src} type="video/mp4" />
          Brauzeringiz videoni qo'llab-quvvatlamaydi.
        </video>
      </div>
    </section>
  )
}

export function Section({ title, children }) {
  return (
    <section className="mt-16">
      <span aria-hidden="true" className="block h-1 w-10 rounded-full bg-linear-to-r from-firuza-500 to-kobalt-500" />
      <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-tun-950 sm:text-3xl">{title}</h2>
      <div className="mt-5 space-y-4 text-lg leading-8 text-slate-600">{children}</div>
    </section>
  )
}

// Matn ichidagi boshqa yodgorlikka havola
export function TextLink({ to, children }) {
  return (
    <Link
      to={to}
      className="font-semibold text-tun-950 underline decoration-firuza-500/50 decoration-2 underline-offset-4 transition-colors hover:decoration-firuza-500"
    >
      {children}
    </Link>
  )
}

export function Credit({ author, license, href }) {
  return (
    <>
      Rasm:{' '}
      <a href={href} target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">
        {author}
      </a>
      , {license}
    </>
  )
}

export function Figure({ image, alt, sizes = ARTICLE_SIZES, className = '', imgClassName = '', children }) {
  return (
    <figure className={className}>
      <img
        src={image.src}
        srcSet={image.srcSet}
        sizes={sizes}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`w-full rounded-2xl bg-slate-100 shadow-[0_24px_60px_-30px] shadow-tun-950/40 ${imgClassName}`}
      />
      <figcaption className="mt-3 text-sm leading-6 text-slate-500">{children}</figcaption>
    </figure>
  )
}

// Bosh sahifadagi xronologiya bilan bir xil: oltin nuqtalar, oltindan firuzaga o'tuvchi chiziq
export function Timeline({ items }) {
  return (
    <ol className="relative space-y-7 before:absolute before:top-2 before:bottom-2 before:left-[5px] before:w-px before:bg-linear-to-b before:from-oltin-400 before:to-firuza-500">
      {items.map((item) => (
        <li key={item.period} className="relative pl-8">
          <span aria-hidden="true" className="absolute top-2 left-0 h-3 w-3 rounded-full border-2 border-oltin-400 bg-white" />
          <p className="font-mono text-sm font-medium text-oltin-600">{item.period}</p>
          <p className="mt-1 text-slate-700">{item.text}</p>
        </li>
      ))}
    </ol>
  )
}

export function Coordinates({ label, lat, lng }) {
  return (
    <p className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <span>
        Koordinatalari: <span className="font-mono text-base text-slate-500">{label}</span>
      </span>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-1.5 text-sm font-semibold text-tun-950 transition hover:border-firuza-500 hover:text-firuza-600"
      >
        <Icon name="pin" className="h-4 w-4" />
        Xaritada ochish
      </a>
    </p>
  )
}

// Sahifa oxiri: manbalar ro'yxati, bosh rasm muallifi va orqaga qaytish havolasi
export function Sources({ items, heroCredit }) {
  return (
    <section className="mt-20 rounded-3xl bg-slate-50 p-6 ring-1 ring-tun-950/5 sm:p-8">
      <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-firuza-600">Manbalar</h2>
      <ul className="mt-4 space-y-1.5 text-sm">
        {items.map((source) => (
          <li key={source.href}>
            <a href={source.href} target="_blank" rel="noopener noreferrer" className="text-slate-600 underline decoration-slate-300 underline-offset-2 hover:text-tun-950 hover:decoration-firuza-500">
              {source.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-slate-500">
        Bosh rasm:{' '}
        <a href={heroCredit.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">
          {heroCredit.author}
        </a>
        , {heroCredit.license}
      </p>

      <Link
        to="/#services"
        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-tun-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-tun-700"
      >
        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-x-1">
          <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
        </svg>
        Boshqa yodgorliklarga qaytish
      </Link>
    </section>
  )
}
