import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Masthead from '@/components/Masthead'
import { asset, getSandesh, LANGS, type Lang } from '@/lib/content'
import { t } from '@/lib/i18n'

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }))
}

export function generateMetadata({ params }: { params: { lang: Lang } }): Metadata {
  const s = t(params.lang)
  const title = `${s.patronsHeading} | ${s.siteName}`
  return {
    title,
    description: s.patronsLead,
    alternates: { canonical: `/${params.lang}/sandesh/`, languages: { hi: '/hi/sandesh/', en: '/en/sandesh/' } },
    openGraph: { title, description: s.patronsLead },
  }
}

export default function SandeshPage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const s = t(lang)
  const sandesh = getSandesh()

  return (
    <div className="page--framed">
      <Masthead lang={lang} />
      <div className="title-block col">
        <h1>{s.patronsHeading}</h1>
        <p className="subtitle">{s.patronsLead}</p>
        <div className="title-rule" />
        {s.notice && <p className="notice">{s.noticeMessages}</p>}
      </div>

      <article className="col" lang="hi" style={{ paddingTop: '2rem' }}>
        {sandesh.messages.map((m) => (
          <section className="letter" key={m.name}>
            {m.body.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
            <p className="signoff">{m.name}</p>
            <p className="roles">
              {m.roles.map((r) => (
                <span key={r}>
                  {r}
                  <br />
                </span>
              ))}
            </p>
            {m.pdf && (
              <a className="textlink" href={asset(`/downloads/${m.pdf}`)} download>
                {s.originalLetter}
              </a>
            )}
          </section>
        ))}
      </article>

      <Footer lang={lang} />
    </div>
  )
}
