import { Link } from 'react-router-dom'
import Icon from './Icon'
import LogoIcon from './LogoIcon'
import { contact } from '../data/contact'
import { SITE_NAME } from '../routes'

const footerLinks = {
  Sahifalar: [
    { label: 'Bosh sahifa', href: '/' },
    { label: 'Yodgorliklar', href: '/#services' },
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
  { label: 'GitHub', href: 'https://github.com/shovotlandiya/eski_Khiva' },
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
const linkClass = 'text-sm text-white/65 transition-colors hover:text-firuza-300'

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
    <footer id="contact" className="relative scroll-mt-24 overflow-hidden bg-tun-950 text-white">
      {/* Nur sochayotgan chiziq, girih naqshi va yorug'lik dog'i */}
      <div className="h-px bg-linear-to-r from-transparent via-firuza-400 to-transparent" />
      <div className="naqsh-och pointer-events-none absolute inset-0 top-px opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[640px] -translate-x-1/2 rounded-full bg-firuza-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          {/* Logo va qisqa tavsif */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5">
              <LogoIcon className="h-7 w-7 text-firuza-300" />
              <span className="font-display text-lg font-semibold tracking-tight">{SITE_NAME}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">
              Xiva va Qadimgi Xorazm tarixi — o'zbek tilida, hamma uchun ochiq.
            </p>
            <a
              href={contact.telegram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium ring-1 ring-white/15 transition hover:bg-firuza-500 hover:ring-firuza-500"
            >
              <Icon name="send" className="h-4 w-4" />
              Telegram
            </a>
          </div>

          {/* Havolalar ustunlari */}
          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title}>
              <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-firuza-300">{title}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
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
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-white/55">
            © {currentYear} {SITE_NAME}. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex gap-5">
            {socialLinks.map((social) => (
              <FooterLink key={social.label} href={social.href}>{social.label}</FooterLink>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-xs leading-5 text-white/40 sm:text-left">
          Bosh sahifa rasmlari: Wikimedia Commons —{' '}
          {photoCredits.map((credit, index) => (
            <span key={credit.href}>
              {index > 0 && ', '}
              <a href={credit.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-white/70">
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