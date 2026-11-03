import Link from 'next/link'
import type { Lang } from '@/lib/content'
import { t } from '@/lib/i18n'
import LangSwitch from './LangSwitch'

export default function Masthead({ lang, cover = false }: { lang: Lang; cover?: boolean }) {
  const s = t(lang)
  return (
    <header className={cover ? 'runhead runhead--cover' : 'runhead'}>
      <div className="runhead-bar">
        <Link href={`/${lang}/`} className="wordmark">
          {s.siteName}
        </Link>
        <LangSwitch lang={lang} />
      </div>
      <nav className="runhead-nav" aria-label={s.siteName}>
        <Link href={`/${lang}/#pooja`}>{s.navPuja}</Link>
        <Link href={`/${lang}/#aarti`}>{s.navAarti}</Link>
        <Link href={`/${lang}/downloads/`}>{s.navDownloads}</Link>
        <Link href={`/${lang}/sandesh/`}>{s.navSandesh}</Link>
        <Link href={`/${lang}/about/`}>{s.navAbout}</Link>
        <Link href={`/${lang}/contact/`}>{s.navContact}</Link>
      </nav>
    </header>
  )
}
