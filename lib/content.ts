import fs from 'node:fs'
import path from 'node:path'

export type Lang = 'hi' | 'en'
export const LANGS: Lang[] = ['hi', 'en']

export type Bilingual = { hi: string; en: string }
export type CatalogPuja = { slug: string; title: Bilingual; built: boolean; kind: 'puja' | 'names' }
export type CatalogAarti = { slug: string; title: Bilingual }
export type Catalog = { pujas: CatalogPuja[]; aartis: CatalogAarti[] }

export type PujaItem =
  | { t: 'step'; n?: number; text: string; mantra: string[] }
  | { t: 'text' | 'mantra' | 'verse' | 'sub'; text: string }
export type PujaSection = { id: string; title: string; items: PujaItem[] }
export type Puja = {
  slug: string
  title: string
  subtitle?: string
  samagriTitle: string | null
  samagri: string[]
  sections: PujaSection[]
  credit: string[]
}
export type Names = { slug: string; title: string; names: string[] }
export type Aarti = { slug: string; title: string; stanzas: string[][] }
export type Sandesh = {
  title: string
  messages: { body: string[]; name: string; roles: string[]; pdf?: string }[]
}
export type DownloadGroup = { id: string; title: Bilingual; items: { file: string; title: string; kb: number }[] }

const root = path.join(process.cwd(), 'content')
const read = <T,>(rel: string): T => JSON.parse(fs.readFileSync(path.join(root, rel), 'utf8')) as T

export const getCatalog = () => read<Catalog>('catalog.json')
export const getPuja = (slug: string) => read<Puja>(`hi/pujas/${slug}.json`)
export const getNames = (slug: string) => read<Names>(`hi/names-${slug}.json`)
export const getAarti = (slug: string) => read<Aarti>(`hi/aarti/${slug}.json`)
export const getSandesh = () => read<Sandesh>('hi/sandesh.json')

export function getDownloads(): DownloadGroup[] {
  const raw = read<{ groups: { id: string; title: Bilingual; items: { file: string; title: string }[] }[] }>('downloads.json')
  return raw.groups.map((g) => ({
    ...g,
    items: g.items.map((i) => ({
      ...i,
      kb: Math.round(fs.statSync(path.join(process.cwd(), 'public', 'downloads', i.file)).size / 1024),
    })),
  }))
}

export function creditLines(credit: string[]): string[] {
  return credit
    .join('\n')
    .split(/\n+/)
    .map((l) => l.trim().replace(/[,]$/, ''))
    .filter(Boolean)
}

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
export const asset = (p: string) => `${BASE}${p}`

function jpegSize(file: string): { w: number; h: number } | null {
  const b = fs.readFileSync(file)
  let i = 2
  while (i < b.length) {
    if (b[i] !== 0xff) return null
    const marker = b[i + 1]
    const len = b.readUInt16BE(i + 2)
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      return { h: b.readUInt16BE(i + 5), w: b.readUInt16BE(i + 7) }
    }
    i += 2 + len
  }
  return null
}

export type GodImage = { src: string; w: number; h: number }

// A picture is a file at public/images/gods/<slug>.jpg; pages without one render no plate.
export function getGodImage(slug: string): GodImage | null {
  const rel = `images/gods/${slug}.jpg`
  const file = path.join(process.cwd(), 'public', rel)
  if (!fs.existsSync(file)) return null
  const size = jpegSize(file)
  return size ? { src: asset(`/${rel}`), ...size } : null
}
