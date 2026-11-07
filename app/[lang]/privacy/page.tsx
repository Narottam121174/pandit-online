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
  const title = `${s.privacyLink} | ${s.siteName}`
  return {
    title,
    alternates: { canonical: `/${params.lang}/privacy/`, languages: { hi: '/hi/privacy/', en: '/en/privacy/' } },
    openGraph: { title },
  }
}

export default function PrivacyPage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const s = t(lang)
  const legal = getLegal('privacy')

  const blocks: React.ReactNode[] = []
  let list: string[] = []
  const flush = (k: string) => {
    if (!list.length) return
    blocks.push(
      <ul key={`ul-${k}`} className="legal-list">
        {list.map((li) => (
          <li key={li}>{li.replace(/^–\s*/, '')}</li>
        ))}
      </ul>,
    )
    list = []
  }
  legal.paragraphs.forEach((p, i) => {
    if (p.startsWith('–')) {
      list.push(p)
      return
    }
    flush(String(i))
    blocks.push(<p key={i}>{p}</p>)
  })
  flush('end')

  return (
    <div className="page--framed">
      <Masthead lang={lang} />
      <div className="title-block col">
        <h1>{s.privacyLink}</h1>
        <div className="title-rule" />
        {s.legalNotice && <p className="notice">{s.legalNotice}</p>}
      </div>
      <article className="col legal" lang="en">
        {blocks}
      </article>
      <Footer lang={lang} />
    </div>
  )
}
