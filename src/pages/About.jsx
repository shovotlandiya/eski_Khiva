import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import PageHero from '../components/PageHero'
import { contact } from '../data/contact'
import { monuments } from '../data/monuments'
import { responsiveImage } from '../utils/images'

const REPO_URL = 'https://github.com/shovotlandiya/eski_Khiva'
const GITHUB_PROFILE = 'https://github.com/shovotlandiya'

const skills = [
  { label: 'Frontend', detail: 'React, Tailwind, animatsiyalar' },
  { label: 'Backend', detail: 'Node.js, PostgreSQL, REST/GraphQL' },
  { label: 'Dizayn', detail: 'Figma, tizimli komponentlar' },
]

const journey = [
  { year: '2021', text: 'Birinchi kod qatorini yozdim va shu bilan qoldim.' },
  { year: '2023', text: 'Frilanser sifatida 12 dan ortiq loyihani ishga tushirdim.' },
  { year: '2026', text: "O'z mahsulotim ustida ishlayapman." },
]

const authorLinks = [
  { icon: 'code', label: 'GitHub', href: GITHUB_PROFILE, external: true },
  { icon: 'send', label: 'Telegram', href: contact.telegram.href, external: true },
  { icon: 'mail', label: 'Email', href: `mailto:${contact.email}` },
]

const stats = [
  { value: '3', label: 'batafsil yodgorlik sahifasi' },
  { value: '20+', label: 'erkin litsenziyali rasm' },
  { value: '2', label: 'YuNESKO Butunjahon merosi obyekti' },
  { value: 'Bepul', label: 'reklamasiz va ochiq kodli' },
]

const values = [
  {
    icon: 'book',
    title: 'Ishonchli manbalar',
    text: "Har bir fakt manbaga tayanadi. Manbalarda farq bo'lsa, buni ochiq yozamiz. Manbalar ro'yxati har bir yodgorlik sahifasi oxirida.",
  },
  {
    icon: 'image',
    title: 'Erkin rasmlar',
    text: "Rasmlar Wikimedia Commons'dan erkin litsenziyalar asosida olingan, har birining muallifi ko'rsatilgan.",
  },
  {
    icon: 'language',
    title: "O'zbek tilida",
    text: "Xorazm tarixini ona tilimizda — oddiy, tushunarli va hamma uchun ochiq shaklda hikoya qilamiz.",
  },
  {
    icon: 'cube',
    title: '3D ko\'rinish',
    text: "Yodgorliklar 3D modelda qayta tiklangan. Ularning videolarini har bir yodgorlik sahifasida ko'rishingiz mumkin.",
  },
]

const missionImage = responsiveImage('kohna-urganch/gumbaz-ichi', [480, 960])


// Bo'lim yorlig'i: oq fonda firuza-600, to'q fonda firuza-300
function Label({ onDark = false, children }) {
  return (
    <p className={`font-mono text-xs uppercase tracking-[0.3em] ${onDark ? 'text-firuza-300' : 'text-firuza-600'}`}>{children}</p>
  )
}

const titleClass = 'mt-3 font-display text-3xl leading-tight font-semibold tracking-tight sm:text-4xl'

// Ritm: to'q (hero + raqamlar) → oq (maqsad) → to'q (yondashuv) → oq (yodgorliklar, muallif) → to'q (footer)
export default function About() {
  return (
    <main className="flex-1 bg-white">
      <PageHero
        image={responsiveImage('hero/ichan-qala-2', [960, 1280, 1920])}
        alt="Ichan qal'a — Xivaning ichki shahri"
        eyebrow="Loyiha haqida"
        title="Biz haqimizda"
        subtitle="Xorazmning ming yillik merosini hamma uchun ochiq va tushunarli qilib ko'rsatamiz."
      />

      {/* Raqamlar: to'q fonda shisha kartalar (hero pastki qismiga chiqib turadi) */}
      <div className="relative bg-tun-950 pb-24 text-white">
        <dl className="relative z-10 mx-auto -mt-20 grid max-w-5xl grid-cols-2 gap-4 px-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-tun-900/80 p-5 text-center backdrop-blur-md">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="matn-nur inline-block font-display text-3xl font-semibold tracking-tight sm:text-4xl">{stat.value}</span>
                <span className="mt-2 block text-sm leading-5 text-white/60">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Maqsadimiz (oq fon) */}
      <section className="relative overflow-hidden">
        <div className="chizma-tuq pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_65%)]" />
        <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-[1.2fr_1fr] md:gap-14">
          <div>
            <Label>Maqsadimiz</Label>
            <h2 className={`${titleClass} text-tun-950`}>
              Tarixni bir joyga jamlab, <span className="matn-nur-tuq">yaqinroq qilamiz</span>
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600">
              <p>
                Eski Xiva — Xiva xonligi va Qadimgi Xorazm tarixiga bag'ishlangan ma'rifiy loyiha. Qal'alar,
                minoralar va maqbaralar haqidagi ishonchli ma'lumotlar internetda turli tillarda, tarqoq holda
                uchraydi. Biz ularni o'zbek tilida, chiroyli va tushunarli shaklda bir joyga jamlaymiz.
              </p>
              <p>
                Saytda har bir yodgorlikning tarixi, me'morchiligi, topilmalari va joylashuvi haqida o'qishingiz
                mumkin. Maqsadimiz — o'quvchi, talaba, sayyoh va tarixga qiziqqan har bir kishi uchun foydali
                manba bo'lish.
              </p>
            </div>
          </div>
          <figure>
            <img
              src={missionImage.src}
              srcSet={missionImage.srcSet}
              sizes="(min-width: 768px) 400px, 100vw"
              alt="To'rabekxonim maqbarasi gumbazining ichki mozaikasi"
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full rounded-3xl bg-slate-100 object-cover shadow-[0_40px_90px_-35px] shadow-tun-950/50"
            />
            <figcaption className="mt-3 text-xs text-slate-500">
              To'rabekxonim maqbarasi gumbazi, Ko'hna Urganch. Rasm:{' '}
              <a href="https://commons.wikimedia.org/wiki/File:Inner_Dome_of_Turabeg_Khanym_Mausoluem_(27574334687).jpg" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">
                John Pavelka
              </a>
              , CC BY 2.0
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Yondashuvimiz (to'q fon) */}
      <section className="relative overflow-hidden bg-tun-950 py-24 text-white">
        <div className="chizma pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="pointer-events-none absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-firuza-500/10 blur-[140px]" />
        <div className="relative mx-auto max-w-5xl px-6">
          <Label onDark>Yondashuvimiz</Label>
          <h2 className={titleClass}>
            Nimalarga <span className="matn-nur">e'tibor beramiz</span>
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-firuza-400/40 hover:bg-white/[0.05]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-firuza-400 to-kobalt-500">
                  <Icon name={value.icon} />
                </span>
                <div>
                  <h3 className="font-semibold">{value.title}</h3>
                  <p className="mt-1 leading-7 text-white/60">{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oq fon: yodgorliklar, muallif, ochiq kod */}
      <div className="mx-auto max-w-5xl px-6 py-24">
        <section>
          <div className="flex flex-wrap items-end justify-between gap-2">
            <div>
              <Label>Saytda</Label>
              <h2 className={`${titleClass} text-tun-950`}>Loyihadagi yodgorliklar</h2>
            </div>
            <Link to="/#services" className="text-sm font-semibold text-firuza-600 hover:text-kobalt-600">Bosh sahifada ko'rish →</Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {monuments.map((monument) => (
              <Link
                key={monument.href}
                to={monument.href}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_60px_-35px] shadow-tun-950/40 transition duration-300 hover:-translate-y-1 hover:border-firuza-500/40"
              >
                <div className="overflow-hidden">
                  <img
                    src={monument.image.src}
                    srcSet={monument.image.srcSet}
                    sizes="(min-width: 768px) 310px, 100vw"
                    alt={monument.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full bg-slate-100 object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-oltin-600">{monument.period}</p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-tun-950">{monument.name}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{monument.text}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-firuza-600">
                    Batafsil
                    <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <Label>Loyiha muallifi</Label>
          <div className="mt-5 grid grid-cols-1 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_80px_-40px] shadow-tun-950/30 md:grid-cols-[1fr_1.1fr]">
            <div className="relative flex flex-col overflow-hidden bg-tun-950 p-8 text-white sm:p-10">
              <div className="naqsh-och pointer-events-none absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
              <div className="pointer-events-none absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-firuza-500/20 blur-3xl" />
              <h2 className="relative font-display text-2xl leading-snug font-semibold tracking-tight sm:text-3xl">
                Interfeyslarni g'oyadan <span className="matn-nur">mahsulotgacha</span> olib boradigan dasturchiman.
              </h2>
              <p className="relative mt-5 leading-7 text-white/65">
                Men foydalanuvchi tajribasi va texnik puxtalik kesishgan nuqtada ishlashni yaxshi ko'raman.
                Har bir loyihada oddiylikni saqlab, tafsilotlarga e'tibor beraman — chunki yaxshi mahsulot
                his qilinadi, ko'rinadi emas.
              </p>
              <div className="relative mt-auto flex flex-wrap gap-2 pt-8">
                {authorLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 transition hover:bg-white hover:text-tun-950"
                  >
                    <Icon name={link.icon} className="h-4 w-4" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">Ko'nikmalar</h3>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {skills.map((skill) => (
                  <li key={skill.label} className="rounded-2xl border border-slate-200 p-4 transition-colors hover:border-firuza-500/50">
                    <p className="font-semibold text-tun-950">{skill.label}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{skill.detail}</p>
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-slate-500">Yo'l</h3>
              <ol className="mt-4 space-y-4">
                {journey.map((step) => (
                  <li key={step.year} className="flex items-baseline gap-4">
                    <span className="w-14 shrink-0 rounded-md bg-oltin-200/60 py-0.5 text-center font-mono text-sm font-medium text-oltin-600">{step.year}</span>
                    <p className="leading-7 text-slate-700">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="mt-24 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-firuza-400 to-kobalt-500 text-white">
              <Icon name="code" />
            </span>
            <h2 className="mt-5 font-display text-xl font-semibold text-tun-950">Ochiq kod</h2>
            <p className="mt-2 leading-7 text-slate-600">
              Saytning butun kodi GitHub'da ochiq. Xato topsangiz yoki yaxshilash g'oyangiz bo'lsa, bemalol
              ko'rib chiqing va taklif yuboring.
            </p>
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="group mt-4 inline-flex items-center gap-1.5 font-semibold text-firuza-600 hover:text-kobalt-600">
              GitHub'da ko'rish <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-tun-950 p-8 text-white">
            <div className="naqsh-och pointer-events-none absolute inset-0 opacity-60" />
            <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-kobalt-500/25 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-xl font-semibold">Taklifingiz bormi?</h2>
              <p className="mt-2 leading-7 text-white/65">
                Qaysi yodgorlik haqida yozishimizni xohlaysiz? Xato ko'rdingizmi yoki hamkorlik qilmoqchimisiz?
                Bizga yozing.
              </p>
            </div>
            <Link
              to="/aloqa"
              className="group relative mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-tun-950 transition hover:bg-firuza-200"
            >
              Aloqa sahifasi
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
