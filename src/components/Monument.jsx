// Yodgorlik sahifalari (Qo'y Qirilgan qal'a, Tuproq qal'a, ...) uchun umumiy qismlar
import { Link } from 'react-router-dom'

// Maqola ustuni (max-w-4xl) ichidagi rasmlar uchun
const ARTICLE_SIZES = '(min-width: 896px) 832px, 100vw'

export function MonumentHero({ image, alt, title, subtitle }) {
  return (
    <div className="relative h-[460px] w-full overflow-hidden bg-slate-900 sm:h-[540px]">
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
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/30" />

      <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col justify-end px-6 pb-12">
        <nav aria-label="Breadcrumb" className="text-sm text-white/80">
          <Link to="/" className="hover:text-white">Bosh sahifa</Link>
          <span className="mx-2">/</span>
          <Link to="/#services" className="hover:text-white">Qal'alar</Link>
        </nav>
        <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-6xl">{title}</h1>
        <p className="mt-4 max-w-xl text-lg text-white/85">{subtitle}</p>
      </div>
    </div>
  )
}

export function Facts({ items }) {
  return (
    <dl className="-mt-8 relative z-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
      {items.map((fact) => (
        <div key={fact.label} className="bg-white p-5">
          <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">{fact.label}</dt>
          <dd className="mt-1 font-medium text-slate-900">{fact.value}</dd>
        </div>
      ))}
    </dl>
  )
}

export function Section({ title, children }) {
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
      <div className="mt-4 space-y-4 text-lg leading-8 text-slate-600">{children}</div>
    </section>
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
        className={`w-full rounded-lg bg-slate-100 ${imgClassName}`}
      />
      <figcaption className="mt-2 text-sm leading-6 text-slate-500">{children}</figcaption>
    </figure>
  )
}

export function Timeline({ items }) {
  return (
    <ol className="space-y-6 border-l-2 border-slate-200 pl-6">
      {items.map((item) => (
        <li key={item.period} className="relative">
          {/* pl-6 (24px) + border-l-2 → nuqta markazi chiziq ustida */}
          <span className="absolute -left-[30px] top-1.5 h-2.5 w-2.5 rounded-full bg-slate-900" />
          <p className="font-mono text-sm text-slate-500">{item.period}</p>
          <p className="mt-1 text-slate-700">{item.text}</p>
        </li>
      ))}
    </ol>
  )
}

export function Coordinates({ label, lat, lng }) {
  return (
    <p>
      Koordinatalari: {label}.{' '}
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-slate-900 underline underline-offset-4 hover:text-slate-600"
      >
        Xaritada ochish
      </a>
    </p>
  )
}

// Sahifa oxiri: manbalar ro'yxati, bosh rasm muallifi va orqaga qaytish havolasi
export function Sources({ items, heroCredit }) {
  return (
    <section className="mt-16 border-t border-slate-200 pt-8">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Manbalar</h2>
      <ul className="mt-3 space-y-1 text-sm">
        {items.map((source) => (
          <li key={source.href}>
            <a href={source.href} target="_blank" rel="noopener noreferrer" className="text-slate-600 underline hover:text-slate-900">
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

      <Link to="/#services" className="group mt-10 inline-flex items-center gap-2 font-semibold text-slate-900">
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-x-1">
          <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
        </svg>
        Boshqa qal'alarga qaytish
      </Link>
    </section>
  )
}
