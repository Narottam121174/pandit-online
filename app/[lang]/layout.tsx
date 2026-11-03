import type { Metadata, Viewport } from 'next'
import '../globals.css'
import { LANGS, type Lang } from '@/lib/content'
import { display, label, latin, text } from '@/lib/fonts'

export const dynamicParams = false

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }))
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.panditonline.org'),
  applicationName: 'Pandit Online',
  openGraph: { siteName: 'Pandit Online', type: 'website' },
}

export const viewport: Viewport = {
  themeColor: '#b3261e',
  width: 'device-width',
  initialScale: 1,
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Lang }
}) {
  return (
    <html lang={params.lang} className={`${display.variable} ${text.variable} ${latin.variable} ${label.variable}`}>
      <body>{children}</body>
    </html>
  )
}
