import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Masthead from '@/components/Masthead'
import Plate from '@/components/Plate'
import StepNav from '@/components/StepNav'
import {
  creditLines,
  getCatalog,
  getGodImage,
  getNames,
  getPuja,
  LANGS,
  type Lang,
  type PujaItem,
} from '@/lib/content'
import { t } from '@/lib/i18n'

export const dynamicParams = false

export function generateStaticParams() {
  const all = getCatalog().pujas.filter((p) => p.built)
  return LANGS.flatMap((lang) => all.map((p) => ({ lang, slug: p.slug })))
}

export function generateMetadata({ params }: { params: { lang: Lang; slug: string } }): Metadata {
  const entry = getCatalog().pujas.find((p) => p.slug === params.slug)!
  const title = `${entry.title[params.lang]} | ${t(params.lang).siteName}`
  const description =
    params.lang === 'hi'
      ? `${entry.title.hi}: विधि, मन्त्र और सामग्री।`
      : `${entry.title.en}: vidhi, mantras and materials, in Hindi and Sanskrit.`
  return {
    title,
    description,
    alternates: {
      canonical: `/${params.lang}/puja/${params.slug}/`,
      languages: { hi: `/hi/puja/${params.slug}/`, en: `/en/puja/${params.slug}/` },
    },
    openGraph: { title, description },
  }
}

const DEVA = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९']
const numeral = (n: number, lang: Lang) =>
  lang === 'hi' ? String(n).split('').map((d) => DEVA[Number(d)]).join('') : String(n)

function Items({ items, lang }: { items: PujaItem[]; lang: Lang }) {
  const out: React.ReactNode[] = []
  let mantras: string[] = []
  const flush = (key: string) => {
    if (!mantras.length) return
    out.push(
      <div className="mantra" key={`m-${key}`}>
        {mantras.map((m, i) => (
          <p key={i}>{m}</p>
        ))}
      </div>,
    )
    mantras = []
  }
  items.forEach((it, i) => {
    if (it.t === 'mantra') {
      mantras.push(it.text)
      return
    }
    flush(String(i))
    if (it.t === 'step') {
      const numbered = typeof it.n === 'number'
      out.push(
        <div className={numbered ? 'step' : 'step step--plain'} key={i}>
          {numbered && (
            <span className="step-n" aria-label={`${t(lang).stepsLabel} ${it.n}`}>
              {numeral(it.n as number, lang)}
            </span>
          )}
          <div className="step-body">
            <p>{it.text}</p>
            {it.mantra.length > 0 && (
              <div className="mantra">
                {it.mantra.map((m, j) => (
                  <p key={j}>{m}</p>
                ))}
              </div>
            )}
          </div>
        </div>,
      )
    } else if (it.t === 'sub') {
      out.push(
        <h3 className="sub" key={i}>
          {it.text}
        </h3>,
      )
    } else if (it.t === 'verse') {
      out.push(
        <p className="verse" key={i}>
          {it.text}
        </p>,
      )
    } else {
      const end = it.text.startsWith('इति') && it.text.includes('समाप्त')
      out.push(
        <p className={end ? 'text text--end' : 'text'} key={i}>
          {it.text}
        </p>,
      )
    }
  })
  flush('last')
  return <>{out}</>
}

export default function PujaPage({ params }: { params: { lang: Lang; slug: string } }) {
  const lang = params.lang
  const s = t(lang)
  const entry = getCatalog().pujas.find((p) => p.slug === params.slug)!
  const image = getGodImage(params.slug)
  const name = entry.title[lang]
  const plate = image && <Plate image={image} alt={s.godAlt(name)} priority />

  if (entry.kind === 'names') {
    const names = getNames(params.slug)
    return (
      <div className="page--framed">
        <Masthead lang={lang} />
        <div className="title-block col">
          <h1>{name}</h1>
          <div className="title-rule" />
          {s.notice && <p className="notice">{s.notice}</p>}
          {plate}
        </div>
        <article className="col" lang="hi">
          <h2 className="sec">{s.namesHeading}</h2>
          <ol className="names">
            {names.names.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ol>
        </article>
        <Footer lang={lang} />
      </div>
    )
  }

  const puja = getPuja(params.slug)
  const links = [
    ...(puja.samagri.length ? [{ id: 'samagri', title: s.samagri }] : []),
    ...puja.sections.map((sec) => ({ id: sec.id, title: sec.title })),
  ]
  const useChips = links.length >= 2 && links.length <= 12

  return (
    <div className="page--framed">
      <Masthead lang={lang} />
      <div className="title-block col">
        <h1>{name}</h1>
        {puja.subtitle && (
          <p className="subtitle" lang="hi">
            {puja.subtitle}
          </p>
        )}
        <div className="title-rule" />
        {s.notice && <p className="notice">{s.notice}</p>}
        {plate}
      </div>

      {useChips && <StepNav links={links} label={s.stepsLabel} />}

      <article className="col" lang="hi">
        {!useChips && links.length > 1 && (
          <details className="toc">
            <summary>{s.contents}</summary>
            <ol>
              {links.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`}>{l.title}</a>
                </li>
              ))}
            </ol>
          </details>
        )}

        {puja.samagri.length > 0 && (
          <>
            <h2 className="sec" id="samagri">
              {puja.samagriTitle ?? s.samagri}
            </h2>
            <ul className="samagri">
              {puja.samagri.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {puja.sections.map((sec) => (
          <section key={sec.id}>
            <h2 className="sec" id={sec.id}>
              {sec.title}
            </h2>
            <Items items={sec.items} lang={lang} />
          </section>
        ))}

        {puja.credit.length > 0 && (
          <div className="colophon">
            {creditLines(puja.credit).map((l, i) => (
              <div key={i}>{l}</div>
            ))}
          </div>
        )}
      </article>

      <Footer lang={lang} />
    </div>
  )
}
