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
        <Icon name="send" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>

      {sentText && (
        <div role="status" className="mt-6 rounded-xl border border-teal-200 bg-teal-50 p-4 text-sm leading-6 text-teal-900">
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
            className="mt-3 inline-flex items-center gap-2 rounded-md bg-white px-3 py-1.5 font-medium text-teal-800 ring-1 ring-teal-200 transition hover:bg-teal-100"
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
    <main className="flex-1 bg-slate-50">
      <PageHero
        image={responsiveImage('hero/gharbiy-darvoza', [960, 1280, 1920])}
        alt="Ichan qal'aning g'arbiy darvozasi"
        eyebrow="Biz bilan bog'laning"
        title="Aloqa"
        subtitle="Savol, taklif yoki hamkorlik g'oyangiz bormi? Bizga yozing — Xiva tarixi haqida suhbatlashishdan doim xursandmiz."
      />

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
                  <Icon name={channel.icon} />
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
                <Icon name="send" className="h-4 w-4" />
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
