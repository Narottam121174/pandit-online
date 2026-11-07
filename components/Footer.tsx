import Link from 'next/link'
import type { Lang } from '@/lib/content'
import { t } from '@/lib/i18n'

export default function Footer({ lang }: { lang: Lang }) {
  const s = t(lang)
  return (
    <footer className="foot">
      <Link href={`/${lang}/`}>{s.siteName}</Link>
      <nav className="foot-links" aria-label={s.footerLinks}>
        <Link href={`/${lang}/terms/`}>{s.termsLink}</Link>
        <Link href={`/${lang}/privacy/`}>{s.privacyLink}</Link>
        <Link href={`/${lang}/contact/`}>{s.navContact}</Link>
      </nav>
      <span>{s.footer}</span>
    </footer>
  )
}
