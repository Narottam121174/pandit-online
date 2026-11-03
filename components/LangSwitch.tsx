'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Lang } from '@/lib/content'
import { t } from '@/lib/i18n'

export default function LangSwitch({ lang }: { lang: Lang }) {
  const pathname = usePathname() || `/${lang}/`
  const other: Lang = lang === 'hi' ? 'en' : 'hi'
  const href = pathname.replace(/^\/(hi|en)(?=\/|$)/, `/${other}`)
  return (
    <Link href={href} className="langswitch" hrefLang={other} lang={other} aria-label={t(lang).switchLabel}>
      {t(lang).switchTo}
    </Link>
  )
}
