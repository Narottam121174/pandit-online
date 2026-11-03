import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Masthead from '@/components/Masthead'
import { LANGS, type Lang } from '@/lib/content'
import { t } from '@/lib/i18n'

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }))
}

export function generateMetadata({ params }: { params: { lang: Lang } }): Metadata {
  const s = t(params.lang)
  const title = `${s.aboutTitle} | ${s.siteName}`
  return {
    title,
    description: s.aboutLead,
    alternates: { canonical: `/${params.lang}/about/`, languages: { hi: '/hi/about/', en: '/en/about/' } },
    openGraph: { title, description: s.aboutLead },
  }
}

export default function AboutPage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const s = t(lang)

  return (
    <div className="page--framed">
      <Masthead lang={lang} />
      <div className="title-block col">
        <h1>{s.aboutTitle}</h1>
        <p className="subtitle">{s.aboutLead}</p>
        <div className="title-rule" />
      </div>

      <article className="col">
        <h2 className="sec sec--first">{s.aboutHeading}</h2>
        <ul className="about-list">
          {s.aboutItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 className="sec">{s.aboutOriginHeading}</h2>
        {s.aboutNotice && <p className="notice">{s.aboutNotice}</p>}
        <div lang="en" className="en-text">
          {s.aboutOrigin.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>

        <div className="colophon" lang="en">
          {s.address.map((l) => (
            <div key={l}>{l}</div>
          ))}
        </div>
      </article>

      <Footer lang={lang} />
    </div>
  )
}
