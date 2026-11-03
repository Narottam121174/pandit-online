import type { Metadata } from 'next'
import Link from 'next/link'
import Chevron from '@/components/Chevron'
import Footer from '@/components/Footer'
import Masthead from '@/components/Masthead'
import { getAarti, getCatalog, LANGS, type Lang } from '@/lib/content'
import { t } from '@/lib/i18n'

export const dynamicParams = false

export function generateStaticParams() {
  const aartis = getCatalog().aartis
  return LANGS.flatMap((lang) => aartis.map((a) => ({ lang, slug: a.slug })))
}

export function generateMetadata({ params }: { params: { lang: Lang; slug: string } }): Metadata {
  const entry = getCatalog().aartis.find((a) => a.slug === params.slug)
  const title = `${entry?.title[params.lang]} | ${t(params.lang).siteName}`
  const description =
    params.lang === 'hi' ? `${entry?.title.hi}: आरती के पूरे बोल।` : `${entry?.title.en}: the full aarti text, in Hindi.`
  return {
    title,
    description,
    alternates: {
      canonical: `/${params.lang}/aarti/${params.slug}/`,
      languages: { hi: `/hi/aarti/${params.slug}/`, en: `/en/aarti/${params.slug}/` },
    },
    openGraph: { title, description },
  }
}

export default function AartiPage({ params }: { params: { lang: Lang; slug: string } }) {
  const lang = params.lang
  const s = t(lang)
  const aarti = getAarti(params.slug)
  const catalog = getCatalog()
  const entry = catalog.aartis.find((a) => a.slug === params.slug)
  const others = catalog.aartis.filter((a) => a.slug !== params.slug)

  return (
    <div className="page--framed">
      <Masthead lang={lang} />
      <div className="title-block col">
        <h1>{entry?.title[lang] ?? aarti.title}</h1>
        <p className="subtitle" lang="hi">
          ।। आरती ।।
        </p>
        <div className="title-rule" />
        {s.notice && <p className="notice">{s.noticeAarti}</p>}
      </div>

      <article className="col" lang="hi" style={{ paddingTop: '2rem' }}>
        {aarti.stanzas.map((lines, i) => (
          <p className="stanza" key={i}>
            {lines.map((line, j) => (
              <span key={j} className={params.slug === 'jai-jagdish' && j === lines.length - 1 && i < aarti.stanzas.length - 1 ? 'refrain' : undefined}>
                {line}
              </span>
            ))}
          </p>
        ))}

        <h2 className="sec">{s.aartiHeading}</h2>
        <ol className="index" style={{ gridTemplateColumns: '1fr' }}>
          {others.map((a) => (
            <li key={a.slug}>
              <Link href={`/${lang}/aarti/${a.slug}/`}>
                <span>{a.title[lang]}</span>
                <span className="leader" aria-hidden="true" />
                <Chevron />
              </Link>
            </li>
          ))}
        </ol>
      </article>

      <Footer lang={lang} />
    </div>
  )
}
