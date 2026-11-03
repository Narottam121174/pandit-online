import type { Metadata } from 'next'
import Link from 'next/link'
import Chevron from '@/components/Chevron'
import Footer from '@/components/Footer'
import Masthead from '@/components/Masthead'
import Plate from '@/components/Plate'
import { getCatalog, getGodImage, type Lang } from '@/lib/content'
import { pageMeta, t } from '@/lib/i18n'

export function generateMetadata({ params }: { params: { lang: Lang } }): Metadata {
  const m = pageMeta.home[params.lang]
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: { canonical: `/${params.lang}/`, languages: { hi: '/hi/', en: '/en/' } },
    openGraph: { title: m.title, description: m.description, locale: params.lang === 'hi' ? 'hi_IN' : 'en_IN' },
  }
}

export default function Home({ params }: { params: { lang: Lang } }) {
  const lang = params.lang
  const s = t(lang)
  const catalog = getCatalog()
  const ganesh = getGodImage('ganesh-puja')

  return (
    <div className="page--home">
      <div className="cover">
        <Masthead lang={lang} cover />
        <div className="cover-body">
          <h1 className="cover-title">{s.siteName}</h1>
          <p className="cover-line">{s.objective}</p>
          {ganesh && <Plate className="cover-plate" image={ganesh} alt={s.ganeshAlt} caption={s.ganeshCaption} priority />}
        </div>
        <div className="cover-rule" />
        <div className="cover-rule-gap" />
      </div>

      <main className="wrap">
        <section id="pooja" className="home-section">
          <h2 className="sec sec--first">{s.poojaHeading}</h2>
          <ol className="index">
            {catalog.pujas.map((p) => (
              <li key={p.slug}>
                {p.built ? (
                  <Link href={`/${lang}/puja/${p.slug}/`}>
                    <span>{p.title[lang]}</span>
                    <span className="leader" aria-hidden="true" />
                    <Chevron />
                  </Link>
                ) : (
                  <div className="pending">
                    <span>{p.title[lang]}</span>
                    <span className="leader" aria-hidden="true" />
                    <span className="soon">{s.soonLong}</span>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section id="aarti" className="home-section">
          <h2 className="sec">{s.aartiHeading}</h2>
          <ol className="index">
            {catalog.aartis.map((a) => (
              <li key={a.slug}>
                <Link href={`/${lang}/aarti/${a.slug}/`}>
                  <span>{a.title[lang]}</span>
                  <span className="leader" aria-hidden="true" />
                  <Chevron />
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <section className="home-section">
          <h2 className="sec">{s.aboutHeading}</h2>
          <ul className="about-list">
            {s.aboutItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="home-section">
          <h2 className="sec">{s.patronsHeading}</h2>
          <p className="patrons-lead">{s.patronsLead}</p>
          <Link href={`/${lang}/sandesh/`} className="textlink">
            <span>{s.readMessages}</span>
            <Chevron />
          </Link>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  )
}
