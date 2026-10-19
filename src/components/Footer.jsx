import { Link } from 'react-router-dom'
import { contact } from '../data/contact'
import { SITE_NAME } from '../routes'

const footerLinks = {
  Sahifalar: [
    { label: 'Bosh sahifa', href: '/' },
    { label: 'Xizmatlar', href: '/#services' },
    { label: 'Biz haqimizda', href: '/about' },
    { label: 'Aloqa', href: '/aloqa' },
  ],
  Aloqa: [
    { label: contact.email, href: `mailto:${contact.email}` },
    contact.phone,
    contact.location,
  ],
}

const socialLinks = [
  { label: 'Telegram', href: contact.telegram.href },
]

// CC BY-SA litsenziyasi muallifni ko'rsatishni talab qiladi
const photoCredits = [
  { author: 'Patrickringgenberg', license: 'CC BY-SA 3.0', href: 'https://commons.wikimedia.org/wiki/File:Khiva_Itchan_Kala.JPG' },
  { author: 'Hylgeriak', license: 'CC BY-SA 3.0', href: 'https://commons.wikimedia.org/wiki/File:Itchan_Kala_Khiva_World_Heritage_Site.jpg' },
  { author: 'Bgag', license: 'CC0', href: 'https://commons.wikimedia.org/wiki/File:Itchan_Kala_west_gate.jpg' },
  { author: "O'zbekiston Madaniy meros agentligi", license: 'CC BY 4.0', href: 'https://commons.wikimedia.org/wiki/File:Qo%E2%80%98yqirqilgan_qal%E2%80%99a.jpg' },
  { author: 'Bernard Gagnon', license: 'CC0', href: 'https://commons.wikimedia.org/wiki/File:Toprak-Kala_04.jpg' },
  { author: 'Hans Birger Nilsen', license: 'CC BY-SA 2.0', href: 'https://commons.wikimedia.org/wiki/File:Kutlug_Timur_Minaret_(43569203850).jpg' },
]

const currentYear = new Date().getFullYear()
const linkClass = 'text-sm text-slate-500 transition-colors hover:text-slate-900'

// Ichki sahifalar uchun router Link, tashqi havolalar (mailto, tel, https) uchun oddiy <a>
function FooterLink({ href, children }) {
  if (href.startsWith('/')) {
    return <Link to={href} className={linkClass}>{children}</Link>
  }

  const opensNewTab = href.startsWith('http')
  return (
    <a
      href={href}
      className={linkClass}
      {...(opensNewTab && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {/* Logo va qisqa tavsif */}
          <div>
            <span className="text-lg font-semibold text-slate-900">{SITE_NAME}</span>
            <p className="mt-3 text-sm text-slate-500">
              Xiva va Qadimgi Xorazm tarixi — o'zbek tilida, hamma uchun ochiq.
            </p>
          </div>

          {/* Havolalar ustunlari */}
          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pastki qator: mualliflik huquqi va ijtimoiy tarmoqlar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {currentYear} {SITE_NAME}. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex gap-5">
            {socialLinks.map((social) => (
              <FooterLink key={social.label} href={social.href}>{social.label}</FooterLink>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-400 sm:text-left">
          Bosh sahifa rasmlari: Wikimedia Commons —{' '}
          {photoCredits.map((credit, index) => (
            <span key={credit.href}>
              {index > 0 && ', '}
              <a href={credit.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-600">
                {credit.author}
              </a>{' '}
              ({credit.license})
            </span>
          ))}
        </p>
      </div>
    </footer>
  )
}