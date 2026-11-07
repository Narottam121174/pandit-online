import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Masthead from '@/components/Masthead'
import { getLegal, LANGS, type Lang } from '@/lib/content'
import { t } from '@/lib/i18n'

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }))
}

export function generateMetadata({ params }: { params: { lang: Lang } }): Metadata {
  const s = t(params.lang)
  const legal = getLegal('terms')
  const title = `${s.termsLink} | ${s.siteName}`
  return {
    title,
    description: legal.paragraphs[0].slice(0, 160),
    alternates: { canonical: `/${params.lang}/terms/`, languages: { hi: '/hi/terms/', en: '/en/terms/' } },
    openGraph: { title },
  }
}

export default function TermsPage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const s = t(lang)
  const legal = getLegal('terms')

  return (
    <div className="page--framed">
      <Masthead lang={lang} />
      <div className="title-block col">
        <h1>{s.termsLink}</h1>
        <div className="title-rule" />
        {s.legalNotice && <p className="notice">{s.legalNotice}</p>}
      </div>
      <article className="col legal" lang="en">
        {legal.paragraphs.map((p) => (
          <p key={p.slice(0, 30)}>{p}</p>
        ))}
      </article>
      <Footer lang={lang} />
    </div>
  )
}
