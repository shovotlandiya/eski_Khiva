import { useState } from 'react'
import { contact } from '../data/contact'
import { responsiveImage } from '../utils/images'

const heroImage = responsiveImage('hero/gharbiy-darvoza', [960, 1280, 1920])

const TOPICS = ['Umumiy savol', 'Hamkorlik', "Taklif yoki xato haqida", 'Boshqa']

function Icon({ children, className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      {children}
    </svg>
  )
}

const icons = {
  mail: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>,
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />,
  send: <><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>,
  pin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
  check: <path d="M20 6 9 17l-5-5" />,
  copy: <><rect width="14" height="14" x="8" y="8" rx="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></>,
}

const channels = [
  { icon: 'mail', label: 'Email', value: contact.email, href: `mailto:${contact.email}`, action: 'Xat yozish' },
  { icon: 'phone', label: 'Telefon', value: contact.phone.label, href: contact.phone.href, action: "Qo'ng'iroq qilish" },
  { icon: 'send', label: 'Telegram', value: contact.telegram.label, href: contact.telegram.href, action: 'Telegramda yozish', external: true },
  { icon: 'pin', label: 'Manzil', value: contact.location.label, href: contact.location.href, action: "Xaritada ko'rish", external: true },
]

const inputClass =
  'w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition focus:border-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-600/15'

const EMPTY_FORM = { name: '', email: '', topic: TOPICS[0], message: '' }

function ContactForm() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [sentText, setSentText] = useState(null)
  const [copied, setCopied] = useState(false)

  const update = (field) => (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }))

  // Saytda server yo'q (GitHub Pages), shuning uchun xatni pochta ilovasida tayyorlab ochamiz
  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = `${form.topic} — ${form.name}`
    const body = `${form.message}\n\n—\n${form.name}\n${form.email}`
    setSentText(`Mavzu: ${subject}\n\n${body}`)
    setCopied(false)
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const copyMessage = async () => {
    try {
      await window.navigator.clipboard.writeText(`${contact.email}\n\n${sentText}`)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-slate-700">Ismingiz</span>
          <input required type="text" autoComplete="name" value={form.name} onChange={update('name')} placeholder="Ismingizni yozing" className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-slate-700">Email</span>
          <input required type="email" autoComplete="email" value={form.email} onChange={update('email')} placeholder="siz@misol.uz" className={inputClass} />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-medium text-slate-700">Mavzu</span>
          <select value={form.topic} onChange={update('topic')} className={inputClass}>
            {TOPICS.map((topic) => (
              <option key={topic}>{topic}</option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-medium text-slate-700">Xabar</span>
          <textarea required rows={5} value={form.message} onChange={update('message')} placeholder="Xabaringizni shu yerga yozing…" className={`${inputClass} resize-y`} />
        </label>
      </div>

      <button
        type="submit"
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-6 py-3.5 font-semibold text-white transition hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-600/30 sm:w-auto"
      >
        Xabarni yuborish
        <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">{icons.send}</Icon>
      </button>

      {sentText && (
        <div role="status" className="mt-6 rounded-xl border border-teal-200 bg-teal-50 p-4 text-sm leading-6 text-teal-900">
          <p className="flex items-center gap-2 font-semibold">
            <Icon className="h-4 w-4">{icons.check}</Icon>
            Pochta ilovangiz tayyor xat bilan ochildi.
          </p>
          <p className="mt-1">
            Agar ochilmagan bo'lsa, xabarni nusxa olib, <strong>{contact.email}</strong> manziliga yuboring.
          </p>
          <button
            type="button"
            onClick={copyMessage}
            className="mt-3 inline-flex items-center gap-2 rounded-md bg-white px-3 py-1.5 font-medium text-teal-800 ring-1 ring-teal-200 transition hover:bg-teal-100"
          >
            <Icon className="h-4 w-4">{copied ? icons.check : icons.copy}</Icon>
            {copied ? 'Nusxa olindi' : 'Xabarni nusxa olish'}
          </button>
        </div>
      )}
    </form>
  )
}

export default function Aloqa() {
  return (
    <main className="flex-1 bg-slate-50">
      <div className="relative h-[380px] w-full overflow-hidden bg-slate-900 sm:h-[440px]">
        <img
          src={heroImage.src}
          srcSet={heroImage.srcSet}
          sizes="100vw"
          alt="Ichan qal'aning g'arbiy darvozasi"
          decoding="async"
          // eslint-disable-next-line react/no-unknown-property -- React 18 `fetchPriority`ni tanimaydi, kichik harf kerak
          fetchpriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/60 via-slate-950/50 to-slate-950/80" />
        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-6 pb-10 text-center">
          <p className="rounded-full border border-white/25 bg-white/10 px-4 py-1 text-sm font-medium text-white/90 backdrop-blur-sm">
            Biz bilan bog'laning
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">Aloqa</h1>
          <p className="mt-4 max-w-xl text-lg text-white/85">
            Savol, taklif yoki hamkorlik g'oyangiz bormi? Bizga yozing — Xiva tarixi haqida suhbatlashishdan doim xursandmiz.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-20">
        <ul className="relative z-10 -mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                {...(channel.external && { target: '_blank', rel: 'noopener noreferrer' })}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                  <Icon>{icons[channel.icon]}</Icon>
                </span>
                <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">{channel.label}</span>
                {/* lg'da 4 ta karta yonma-yon — email bir qatorga sig'ishi uchun shrift biroz kichik */}
                <span className="mt-1 break-words font-semibold text-slate-900 lg:text-sm">{channel.value}</span>
                <span className="mt-auto pt-3 text-sm font-medium text-teal-700">
                  {channel.action} <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <section className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Xabar qoldiring</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Xiva va Qadimgi Xorazm tarixi, loyiha yoki hamkorlik bo'yicha savollaringiz bo'lsa, shaklni
              to'ldiring. «Xabarni yuborish» tugmasi bosilganda pochta ilovangiz tayyor xat bilan ochiladi.
            </p>

            <div className="mt-8 rounded-2xl bg-slate-900 p-6 text-white">
              <p className="text-lg font-semibold">Tezroq javob kerakmi?</p>
              <p className="mt-1 text-sm leading-6 text-slate-300">Telegram orqali to'g'ridan-to'g'ri yozing.</p>
              <a
                href={contact.telegram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-teal-50"
              >
                <Icon className="h-4 w-4">{icons.send}</Icon>
                {contact.telegram.label}
              </a>
            </div>
          </div>

          <ContactForm />
        </section>

        <section className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Manzil</h2>
            <a href={contact.location.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-teal-700 hover:text-teal-900">
              Google Maps'da ochish →
            </a>
          </div>
          <p className="mt-2 text-slate-600">{contact.location.label} — Xorazm viloyatining markazi, Xiva yaqinida.</p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-lg shadow-slate-900/5">
            <iframe
              title="Urganch xaritasi"
              src={contact.location.embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[380px] w-full"
            />
          </div>
        </section>
      </div>
    </main>
  )
}
