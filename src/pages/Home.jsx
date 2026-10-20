import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { monuments } from '../data/monuments'
import { responsiveImage } from '../utils/images'

const khivaImage = responsiveImage('hero/ichan-qala-1', [960, 1280])

const features = [
  { icon: 'cube', title: '3D rekonstruksiya', text: "Yodgorliklarning asl ko'rinishi 3D modelda qayta tiklangan." },
  { icon: 'book', title: 'Ishonchli manbalar', text: 'Har bir fakt ilmiy manbalarga tayanadi.' },
  { icon: 'language', title: "O'zbek tilida", text: 'Tarix ona tilimizda — hamma uchun ochiq.' },
]

const chronology = [
  { year: 'Mil. avv. IV asr', text: "Qo'y Qirilgan qal'a — dumaloq ibodatxona-qal'a qurildi", href: '/qoy-qirilgan-qala' },
  { year: 'II–III asrlar', text: "Tuproq qal'a — Xorazm podsholarining poytaxti", href: '/tuproq-qala' },
  { year: '995', text: "Gurganj (Ko'hna Urganch) Xorazm poytaxtiga aylandi", href: '/kohna-urganch' },
  { year: '1221', text: "Mo'g'ullar Urganchni vayron qildi", href: '/kohna-urganch' },
  { year: '1511–1920', text: 'Xiva xonligi davri' },
  { year: '1990', text: "Ichan qal'a YuNESKO Butunjahon merosi ro'yxatiga kiritildi" },
  { year: 'Bugun', text: 'Yodgorliklar 3D modelda qayta tiklanmoqda', now: true },
]

// onLight — oq fonli bo'limlar uchun to'qroq ranglar
function Eyebrow({ number, onLight = false, children }) {
  return (
    <p className={`font-mono text-xs uppercase tracking-[0.3em] ${onLight ? 'text-firuza-600' : 'text-firuza-300'}`}>
      <span className={onLight ? 'text-tun-950/35' : 'text-white/40'}>{number} —</span> {children}
    </p>
  )
}

function SectionTitle({ children, className = '' }) {
  return (
    <h2 className={`mt-4 font-display text-3xl leading-tight font-semibold tracking-tight sm:text-5xl ${className}`}>{children}</h2>
  )
}

// Bugungi surat ↔ 3D rekonstruksiya: sichqoncha olib borilganda yoki tugma bosilganda almashadi
function MonumentCard({ monument }) {
  const [show3d, setShow3d] = useState(false)

  return (
    <article
      onMouseEnter={() => setShow3d(true)}
      onMouseLeave={() => setShow3d(false)}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-500 hover:border-firuza-400/40 hover:shadow-[0_0_60px_-15px] hover:shadow-firuza-400/40"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-tun-800">
        <img
          src={monument.image.src}
          srcSet={monument.image.srcSet}
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 33vw, 100vw"
          alt={monument.alt}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${show3d ? 'scale-105 opacity-0' : 'opacity-100'}`}
        />
        <img
          src={monument.render}
          alt={`${monument.name} — 3D rekonstruksiya`}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${show3d ? 'opacity-100' : 'scale-105 opacity-0'}`}
        />
        <div className="absolute inset-0 bg-linear-to-t from-tun-950 via-tun-950/10 to-transparent" />

        {/* Bugun | 3D almashtirgichi — telefonda bosib almashtirish uchun */}
        <div className="absolute top-4 left-4 flex rounded-full border border-white/15 bg-tun-950/60 p-1 font-mono text-[11px] uppercase tracking-wider backdrop-blur-md">
          {[
            { value: false, label: monument.photoLabel },
            { value: true, label: '3D model' },
          ].map((option) => (
            <button
              key={option.label}
              type="button"
              aria-pressed={show3d === option.value}
              onClick={() => setShow3d(option.value)}
              className={`rounded-full px-3 py-1 transition ${
                show3d === option.value
                  ? option.value
                    ? 'bg-linear-to-r from-firuza-400 to-kobalt-500 text-white'
                    : 'bg-white text-tun-950'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative -mt-20 flex flex-1 flex-col p-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-oltin-300">{monument.period}</p>
        <h3 className="mt-2 font-display text-2xl font-semibold">{monument.name}</h3>
        <p className="mt-2 leading-7 text-white/60">{monument.text}</p>
        <div className="mt-auto flex items-center gap-5 pt-5 text-sm font-semibold">
          <Link to={monument.href} className="group/link inline-flex items-center gap-1.5 text-white hover:text-firuza-300">
            Batafsil
            <Icon name="arrow" className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
          <Link to={`${monument.href}#3d`} className="inline-flex items-center gap-1.5 text-firuza-300 hover:text-firuza-200">
            <Icon name="play" className="h-3.5 w-3.5 fill-current" />
            3D video
          </Link>
        </div>
      </div>
    </article>
  )
}

// 3D kinozal: chapda katta pleer, o'ngda yodgorlik tanlash ro'yxati
function Cinema() {
  const [active, setActive] = useState(monuments[0])

  return (
    <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_340px]">
      <div>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_0_80px_-20px] shadow-firuza-400/30">
          <video
            key={active.video}
            controls
            playsInline
            preload="none"
            poster={active.poster}
            aria-label={`${active.name} — 3D video`}
            className="aspect-video w-full bg-black"
          >
            <source src={active.video} type="video/mp4" />
            Brauzeringiz videoni qo'llab-quvvatlamaydi.
          </video>
        </div>
        <div className="mt-5 flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-2xl">
            <h3 className="font-display text-xl font-semibold">{active.name}</h3>
            <p className="mt-1 leading-7 text-white/60">{active.videoText}</p>
          </div>
          <Link to={active.href} className="group inline-flex items-center gap-1.5 text-sm font-semibold text-firuza-300 hover:text-firuza-200">
            Yodgorlik sahifasi
            <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <ul className="flex flex-col gap-3">
        {monuments.map((monument, index) => {
          const isActive = monument.video === active.video
          return (
            <li key={monument.video}>
              <button
                type="button"
                onClick={() => setActive(monument)}
                aria-pressed={isActive}
                className={`flex w-full items-center gap-4 rounded-2xl border p-3 text-left transition ${
                  isActive ? 'border-firuza-400/50 bg-firuza-400/10' : 'border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]'
                }`}
              >
                <div className="relative w-28 shrink-0 overflow-hidden rounded-xl">
                  <img src={monument.poster} alt="" loading="lazy" decoding="async" className="aspect-video w-full object-cover" />
                  <span className="absolute inset-0 flex items-center justify-center bg-tun-950/30">
                    <Icon name="play" className="h-5 w-5 fill-current text-white" />
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-white/40">
                    {String(index + 1).padStart(2, '0')} · {monument.duration}
                  </p>
                  <p className={`mt-1 font-semibold ${isActive ? 'text-firuza-200' : 'text-white'}`}>{monument.name}</p>
                </div>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

// Ritm: to'q (hero) → to'q (yodgorliklar) → oq (loyiha) → to'q (kinozal) → oq (xronologiya + aloqa) → to'q (footer)
export default function Home() {
  return (
    <main className="flex-1 bg-tun-950 text-white">
      <Hero />

      {/* 01 — Yodgorliklar: bugun ↔ 3D */}
      <section id="services" className="relative scroll-mt-16 overflow-hidden bg-tun-950 py-28">
        <div className="chizma pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal className="max-w-3xl">
            <Eyebrow number="01">Yodgorliklar</Eyebrow>
            <SectionTitle>
              Xarobadan — <span className="matn-nur">3D modelgacha</span>
            </SectionTitle>
            <p className="mt-5 text-lg leading-8 text-white/60">
              Kartaga sichqonchani olib boring yoki «3D model» tugmasini bosing: yodgorlikning bugungi holati va
              uning qayta tiklangan ko'rinishini solishtiring.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {monuments.map((monument, index) => (
              <Reveal key={monument.href} delay={index * 120} className="h-full">
                <MonumentCard monument={monument} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — Loyiha (oq fon) */}
      <section className="relative overflow-hidden bg-white py-28 text-tun-950">
        <div className="chizma-tuq pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />
        <div className="pointer-events-none absolute -right-40 -bottom-40 h-[520px] w-[520px] rounded-full bg-firuza-200/50 blur-[140px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <Eyebrow number="02" onLight>Loyiha</Eyebrow>
            <SectionTitle>
              Tarix va texnologiya <span className="matn-nur-tuq">bir joyda</span>
            </SectionTitle>
            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600">
              <p>
                Xiva — O'zbekistonning eng qadimiy shaharlaridan biri. Uning ichki shahri Ichan qal'a 1990-yilda
                YuNESKO Butunjahon merosi ro'yxatiga kiritilgan.
              </p>
              <p>
                Biz Xiva xonligi va Qadimgi Xorazm yodgorliklarini zamonaviy 3D texnologiyalar bilan qayta
                jonlantiramiz: vayron bo'lgan qal'alar va shaharlar bir paytlar qanday bo'lganini ko'rsatamiz.
              </p>
            </div>
            <Link to="/about" className="group mt-8 inline-flex items-center gap-2 font-semibold text-firuza-600 hover:text-kobalt-600">
              Loyiha haqida batafsil
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative overflow-hidden rounded-3xl bg-tun-950 shadow-[0_40px_90px_-35px] shadow-tun-950/50 ring-1 ring-tun-950/10">
              <div className="relative">
                <img
                  src={khivaImage.src}
                  srcSet={khivaImage.srcSet}
                  sizes="(min-width: 1024px) 600px, 100vw"
                  alt="Ichan qal'a — Xivaning ichki shahri"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-tun-950 via-tun-950/20 to-transparent sm:from-tun-950/90" />
              </div>
              {/* Telefonda kartalar rasm ostida (aks holda rasmni to'liq yopib qo'yadi), kattaroq ekranda — rasm ustida */}
              <ul className="relative -mt-12 grid gap-2 p-3 text-white sm:absolute sm:inset-x-4 sm:bottom-4 sm:mt-0 sm:grid-cols-3 sm:p-0">
                {features.map((feature) => (
                  <li key={feature.title} className="rounded-2xl border border-white/10 bg-tun-950/60 p-4 backdrop-blur-md">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-firuza-400 to-kobalt-500">
                      <Icon name={feature.icon} className="h-4.5 w-4.5" />
                    </span>
                    <p className="mt-3 text-sm font-semibold">{feature.title}</p>
                    <p className="mt-1 text-xs leading-5 text-white/55">{feature.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — 3D kinozal */}
      <section id="kinozal" className="relative scroll-mt-16 overflow-hidden bg-tun-950 py-28">
        <div className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-kobalt-500/15 blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-firuza-500/10 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal className="max-w-3xl">
            <Eyebrow number="03">3D kinozal</Eyebrow>
            <SectionTitle>
              Yodgorliklar <span className="matn-nur">qanday bo'lgan?</span>
            </SectionTitle>
          </Reveal>
          <Reveal delay={120}>
            <Cinema />
          </Reveal>
        </div>
      </section>

      {/* 04 — Xronologiya va aloqaga chaqiruv (bitta oq fon — ikki section orasida chok chiqmasligi uchun) */}
      <section className="relative bg-white py-28 text-tun-950">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-3xl">
            <Eyebrow number="04" onLight>Xronologiya</Eyebrow>
            <SectionTitle>
              Ming yillar yo'li — <span className="matn-nur-tuq">bugungacha</span>
            </SectionTitle>
          </Reveal>

          {/* Vaqt chizig'i: telefonda tik, katta ekranda gorizontal */}
          <Reveal
            as="ol"
            className="relative mt-16 grid gap-10 before:absolute before:top-0 before:bottom-0 before:left-[5px] before:w-px before:bg-linear-to-b before:from-oltin-400 before:via-firuza-500/70 before:to-firuza-500 md:grid-cols-7 md:gap-5 md:before:top-[5px] md:before:right-0 md:before:bottom-auto md:before:h-px md:before:w-auto md:before:bg-linear-to-r"
          >
            {chronology.map((item) => {
              const content = (
                <>
                  <span
                    aria-hidden="true"
                    className={`absolute top-1 left-0 h-3 w-3 rounded-full md:top-0 ${
                      item.now
                        ? 'bg-firuza-500 shadow-[0_0_16px_4px] shadow-firuza-400/60'
                        : 'border-2 border-oltin-400 bg-white'
                    }`}
                  />
                  <p className={`font-mono text-sm font-medium ${item.now ? 'text-firuza-600' : 'text-oltin-600'}`}>{item.year}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </>
              )
              return (
                <li key={item.year} className="relative pl-8 md:pt-9 md:pl-0">
                  {item.href ? (
                    <Link to={item.href} className="block transition-opacity hover:opacity-70">
                      {content}
                    </Link>
                  ) : (
                    content
                  )}
                </li>
              )
            })}
          </Reveal>

          {/* Aloqaga chaqiruv: oq fon ustida to'q karta */}
          <Reveal className="relative mt-28 overflow-hidden rounded-[2rem] bg-tun-900 px-8 py-16 text-center text-white shadow-[0_40px_100px_-40px] shadow-tun-950/60 sm:px-16">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-firuza-500/25 via-transparent to-kobalt-500/25" />
            <div className="naqsh-och pointer-events-none absolute inset-0" />
            <div className="relative">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
                Savol yoki <span className="matn-nur">taklifingiz</span> bormi?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/65">
                Qaysi yodgorlik haqida yozishimizni xohlaysiz? Xato ko'rdingizmi yoki hamkorlik qilmoqchimisiz?
              </p>
              <Link
                to="/aloqa"
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-tun-950 transition hover:bg-firuza-200"
              >
                Biz bilan bog'laning
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
