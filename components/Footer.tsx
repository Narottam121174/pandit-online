import Link from 'next/link'
import type { Lang } from '@/lib/content'
import { t } from '@/lib/i18n'

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="foot">
      <Link href={`/${lang}/`}>{t(lang).siteName}</Link>
      <span>{t(lang).footer}</span>
    </footer>
  )
}
