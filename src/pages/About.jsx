import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import PageHero from '../components/PageHero'
import { contact } from '../data/contact'
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
    text: "Kelgusida yodgorliklarning 3D modellarini qo'shib, ularni har tomondan aylantirib ko'rish imkonini bermoqchimiz.",
  },
]

const monuments = [
  {
    href: '/qoy-qirilgan-qala',
    image: responsiveImage('qoy-qirilgan-qala/aerofoto', [640, 1250]),
    alt: "Qo'y Qirilgan qal'a qazishmalari tepadan",
    name: "Qo'y Qirilgan qal'a",
    period: 'Mil. avv. IV–III asrlar',
    text: "Dumaloq ibodatxona-qal'a: podsholar maqbarasi va qadimiy rasadxona.",
  },
  {
    href: '/tuproq-qala',
    image: responsiveImage('tuproq-qala/karta', [640, 1280]),
    alt: "Tuproq qal'adagi Baland saroy xarobalari",
    name: "Tuproq qal'a",
    period: 'Milodiy I–VI asrlar',
    text: 'Xorazm podsholarining poytaxti, devoriy rasmlari bilan mashhur saroy.',
  },
  {
    href: '/kohna-urganch',
    image: responsiveImage('kohna-urganch/karta', [640, 1280]),
    alt: "Ko'hna Urganchdagi Qutlug' Temur minorasi",
    name: "Ko'hna Urganch",
    period: 'X–XIV asrlar',
    text: "Xorazmshohlar poytaxti va YuNESKO Butunjahon merosi.",
  },
]

const missionImage = responsiveImage('kohna-urganch/gumbaz-ichi', [480, 960])

export default function About() {
  return (
    <main className="flex-1 bg-slate-50">
      <PageHero
        image={responsiveImage('hero/ichan-qala-2', [960, 1280, 1920])}
        alt="Ichan qal'a — Xivaning ichki shahri"
        eyebrow="Loyiha haqida"
        title="Biz haqimizda"
        subtitle="Xorazmning ming yillik merosini hamma uchun ochiq va tushunarli qilib ko'rsatamiz."
      />

      <div className="mx-auto max-w-5xl px-6 pb-20">
        <dl className="relative z-10 -mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-lg shadow-slate-900/5">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-3xl font-bold tracking-tight text-teal-700 sm:text-4xl">{stat.value}</span>
                <span className="mt-1 block text-sm leading-5 text-slate-600">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>

        <section className="mt-20 grid grid-cols-1 items-center gap-10 md:grid-cols-[1.2fr_1fr] md:gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">Maqsadimiz</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Tarixni bir joyga jamlab, yaqinroq qilamiz
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-8 text-slate-600">
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
              className="aspect-[4/5] w-full rounded-2xl bg-slate-200 object-cover shadow-xl shadow-slate-900/10"
            />
            <figcaption className="mt-2 text-xs text-slate-500">
              To'rabekxonim maqbarasi gumbazi, Ko'hna Urganch. Rasm:{' '}
              <a href="https://commons.wikimedia.org/wiki/File:Inner_Dome_of_Turabeg_Khanym_Mausoluem_(27574334687).jpg" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">
                John Pavelka
              </a>
              , CC BY 2.0
            </figcaption>
          </figure>
        </section>

        <section className="mt-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">Yondashuvimiz</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Nimalarga e'tibor beramiz</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <Icon name={value.icon} />
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">{value.title}</h3>
                  <p className="mt-1 leading-7 text-slate-600">{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">Saytda</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Loyihadagi yodgorliklar</h2>
            </div>
            <Link to="/#services" className="text-sm font-semibold text-teal-700 hover:text-teal-900">Bosh sahifada ko'rish →</Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {monuments.map((monument) => (
              <Link
                key={monument.href}
                to={monument.href}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={monument.image.src}
                    srcSet={monument.image.srcSet}
                    sizes="(min-width: 768px) 310px, 100vw"
                    alt={monument.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full bg-slate-200 object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="font-mono text-xs text-slate-500">{monument.period}</p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">{monument.name}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{monument.text}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
                    Batafsil
                    <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">Loyiha muallifi</p>
          <div className="mt-4 grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5 md:grid-cols-[1fr_1.1fr]">
            <div className="flex flex-col bg-slate-900 p-8 text-white sm:p-10">
              <h2 className="text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
                Interfeyslarni g'oyadan mahsulotgacha olib boradigan dasturchiman.
              </h2>
              <p className="mt-5 leading-7 text-slate-300">
                Men foydalanuvchi tajribasi va texnik puxtalik kesishgan nuqtada ishlashni yaxshi ko'raman.
                Har bir loyihada oddiylikni saqlab, tafsilotlarga e'tibor beraman — chunki yaxshi mahsulot
                his qilinadi, ko'rinadi emas.
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-8">
                {authorLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                    className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3.5 py-2 text-sm font-medium text-white ring-1 ring-white/15 transition hover:bg-white hover:text-slate-900"
                  >
                    <Icon name={link.icon} className="h-4 w-4" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Ko'nikmalar</h3>
              <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {skills.map((skill) => (
                  <li key={skill.label} className="rounded-xl border border-slate-200 p-4 transition-colors hover:border-teal-300">
                    <p className="font-semibold text-slate-900">{skill.label}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{skill.detail}</p>
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 text-xs font-semibold uppercase tracking-wider text-slate-500">Yo'l</h3>
              <ol className="mt-3 space-y-4">
                {journey.map((step) => (
                  <li key={step.year} className="flex items-baseline gap-4">
                    <span className="w-12 shrink-0 rounded-md bg-teal-50 py-0.5 text-center font-mono text-sm font-semibold text-teal-700">{step.year}</span>
                    <p className="leading-7 text-slate-700">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
              <Icon name="code" />
            </span>
            <h2 className="mt-4 text-xl font-bold text-slate-900">Ochiq kod</h2>
            <p className="mt-2 leading-7 text-slate-600">
              Saytning butun kodi GitHub'da ochiq. Xato topsangiz yoki yaxshilash g'oyangiz bo'lsa, bemalol
              ko'rib chiqing va taklif yuboring.
            </p>
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 font-semibold text-teal-700 hover:text-teal-900">
              GitHub'da ko'rish <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>

          <div className="flex flex-col justify-between rounded-2xl bg-slate-900 p-8 text-white">
            <div>
              <h2 className="text-xl font-bold">Taklifingiz bormi?</h2>
              <p className="mt-2 leading-7 text-slate-300">
                Qaysi yodgorlik haqida yozishimizni xohlaysiz? Xato ko'rdingizmi yoki hamkorlik qilmoqchimisiz?
                Bizga yozing.
              </p>
            </div>
            <Link
              to="/aloqa"
              className="group mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-teal-50"
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
