import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Masthead from '@/components/Masthead'
import { asset, getDownloads, LANGS, type Lang } from '@/lib/content'
import { t } from '@/lib/i18n'

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }))
}

export function generateMetadata({ params }: { params: { lang: Lang } }): Metadata {
  const s = t(params.lang)
  const title = `${s.downloadsTitle} | ${s.siteName}`
  return {
    title,
    description: s.downloadsLead,
    alternates: { canonical: `/${params.lang}/downloads/`, languages: { hi: '/hi/downloads/', en: '/en/downloads/' } },
    openGraph: { title, description: s.downloadsLead },
  }
}

export default function DownloadsPage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const s = t(lang)
  const groups = getDownloads()

  return (
    <div className="page--framed">
      <Masthead lang={lang} />
      <div className="title-block col">
        <h1>{s.downloadsTitle}</h1>
        <p className="subtitle">{s.downloadsLead}</p>
        <div className="title-rule" />
      </div>

      <article className="col">
        {groups.map((g, gi) => (
          <section key={g.id}>
            <h2 className={gi === 0 ? 'sec sec--first' : 'sec'}>{g.title[lang]}</h2>
            <ul className="index">
              {g.items.map((it) => (
                <li key={it.file}>
                  <a href={asset(`/downloads/${it.file}`)} download>
                    <span lang="hi">{it.title}</span>
                    <span className="leader" aria-hidden="true" />
                    <span className="soon">
                      {s.pdf} · {it.kb} KB
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </article>

      <Footer lang={lang} />
    </div>
  )
}
