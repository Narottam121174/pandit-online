import { Literata, Mukta, Noto_Serif_Devanagari, Rozha_One } from 'next/font/google'

export const display = Rozha_One({
  weight: '400',
  subsets: ['devanagari', 'latin'],
  variable: '--f-display',
  display: 'swap',
})

export const text = Noto_Serif_Devanagari({
  weight: ['400', '600', '700'],
  subsets: ['devanagari', 'latin'],
  variable: '--f-text',
  display: 'swap',
})

export const latin = Literata({
  subsets: ['latin'],
  variable: '--f-latin',
  display: 'swap',
})

export const label = Mukta({
  weight: ['400', '600', '800'],
  subsets: ['devanagari', 'latin'],
  variable: '--f-label',
  display: 'swap',
})
