import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Masthead from '@/components/Masthead'
import { LANGS, type Lang } from '@/lib/content'
import { t } from '@/lib/i18n'

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }))
}

export function generateMetadata({ params }: { params: { lang: Lang } }): Metadata {
  const s = t(params.lang)
  const title = `${s.contactTitle} | ${s.siteName}`
  return {
    title,
    description: s.contactLead,
    alternates: { canonical: `/${params.lang}/contact/`, languages: { hi: '/hi/contact/', en: '/en/contact/' } },
    openGraph: { title, description: s.contactLead },
  }
}

export default function ContactPage({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const s = t(lang)

  return (
    <div className="page--framed">
      <Masthead lang={lang} />
      <div className="title-block col">
        <h1>{s.contactTitle}</h1>
        <p className="subtitle">{s.contactLead}</p>
        <div className="title-rule" />
      </div>

      <article className="col">
        <ContactForm lang={lang} />

        <h2 className="sec">{s.addressHeading}</h2>
        <address className="address" lang="en">
          {s.address.map((l) => (
            <div key={l}>{l}</div>
          ))}
        </address>
      </article>

      <Footer lang={lang} />
    </div>
  )
}
