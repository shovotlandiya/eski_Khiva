import { useState } from 'react'
import Icon from '../components/Icon'
import PageHero from '../components/PageHero'
import { contact } from '../data/contact'
import { responsiveImage } from '../utils/images'

const TOPICS = ['Umumiy savol', 'Hamkorlik', "Taklif yoki xato haqida", 'Boshqa']

const channels = [
  { icon: 'mail', label: 'Email', value: contact.email, href: `mailto:${contact.email}`, action: 'Xat yozish' },
  { icon: 'phone', label: 'Telefon', value: contact.phone.label, href: contact.phone.href, action: "Qo'ng'iroq qilish" },
  { icon: 'send', label: 'Telegram', value: contact.telegram.label, href: contact.telegram.href, action: 'Telegramda yozish', external: true },
  { icon: 'pin', label: 'Manzil', value: contact.location.label, href: contact.location.href, action: "Xaritada ko'rish", external: true },
]

const inputClass =
  'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-tun-950 placeholder:text-slate-400 transition focus:border-firuza-500 focus:outline-none focus:ring-4 focus:ring-firuza-500/15'

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
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_30px_80px_-40px] shadow-tun-950/30 sm:p-8">
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
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-firuza-500 to-kobalt-500 px-7 py-3.5 font-semibold text-white shadow-[0_8px_32px_-8px] shadow-firuza-500/60 transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-firuza-500/30 sm:w-auto"
      >
        Xabarni yuborish
        <Icon name="send" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>

      {sentText && (
        <div role="status" className="mt-6 rounded-2xl border border-firuza-300/60 bg-firuza-200/20 p-4 text-sm leading-6 text-tun-900">
          <p className="flex items-center gap-2 font-semibold">
            <Icon name="check" className="h-4 w-4" />
            Pochta ilovangiz tayyor xat bilan ochildi.
          </p>
          <p className="mt-1">
            Agar ochilmagan bo'lsa, xabarni nusxa olib, <strong>{contact.email}</strong> manziliga yuboring.
          </p>
          <button
            type="button"
            onClick={copyMessage}
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 font-medium text-tun-950 ring-1 ring-slate-200 transition hover:ring-firuza-500"
          >
            <Icon name={copied ? 'check' : 'copy'} className="h-4 w-4" />
            {copied ? 'Nusxa olindi' : 'Xabarni nusxa olish'}
          </button>
        </div>
      )}
    </form>
  )
}

export default function Aloqa() {
  return (
    <main className="flex-1 bg-white">
      <PageHero
        image={responsiveImage('hero/gharbiy-darvoza', [960, 1280, 1920])}
        alt="Ichan qal'aning g'arbiy darvozasi"
        eyebrow="Biz bilan bog'laning"
        title="Aloqa"
        subtitle="Savol, taklif yoki hamkorlik g'oyangiz bormi? Bizga yozing — Xiva tarixi haqida suhbatlashishdan doim xursandmiz."
      />

      {/* Aloqa kanallari: to'q fonda shisha kartalar (hero pastki qismiga chiqib turadi) */}
      <div className="relative overflow-x-clip bg-tun-950 pb-24 text-white">
        <div className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[640px] -translate-x-1/2 rounded-full bg-firuza-500/10 blur-[120px]" />
        <ul className="relative z-10 mx-auto -mt-20 grid max-w-5xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                {...(channel.external && { target: '_blank', rel: 'noopener noreferrer' })}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-tun-900/80 p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-firuza-400/40 hover:shadow-[0_0_50px_-15px] hover:shadow-firuza-400/50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-firuza-400 to-kobalt-500 text-white">
                  <Icon name={channel.icon} />
                </span>
                <span className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-firuza-300">{channel.label}</span>
                {/* lg'da 4 ta karta yonma-yon — email bir qatorga sig'ishi uchun shrift biroz kichik */}
                <span className="mt-1 break-words font-semibold lg:text-[13px]">{channel.value}</span>
                <span className="mt-auto pt-3 text-sm font-medium text-white/55 transition-colors group-hover:text-firuza-200">
                  {channel.action} <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-24">
        <section className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-tun-950 sm:text-4xl">Xabar qoldiring</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Xiva va Qadimgi Xorazm tarixi, loyiha yoki hamkorlik bo'yicha savollaringiz bo'lsa, shaklni
              to'ldiring. «Xabarni yuborish» tugmasi bosilganda pochta ilovangiz tayyor xat bilan ochiladi.
            </p>

            <div className="relative mt-8 overflow-hidden rounded-3xl bg-tun-950 p-6 text-white">
              <div className="naqsh-och pointer-events-none absolute inset-0 opacity-60" />
              <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-firuza-500/25 blur-3xl" />
              <p className="relative font-display text-lg font-semibold">Tezroq javob kerakmi?</p>
              <p className="relative mt-1 text-sm leading-6 text-white/65">Telegram orqali to'g'ridan-to'g'ri yozing.</p>
              <a
                href={contact.telegram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-tun-950 transition hover:bg-firuza-200"
              >
                <Icon name="send" className="h-4 w-4" />
                {contact.telegram.label}
              </a>
            </div>
          </div>

          <ContactForm />
        </section>

        <section className="mt-24">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-tun-950 sm:text-4xl">Manzil</h2>
            <a href={contact.location.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-firuza-600 hover:text-kobalt-600">
              Google Maps'da ochish →
            </a>
          </div>
          <p className="mt-2 text-slate-600">{contact.location.label} — Xorazm viloyatining markazi, Xiva yaqinida.</p>
          <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-[0_30px_80px_-40px] shadow-tun-950/30">
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
