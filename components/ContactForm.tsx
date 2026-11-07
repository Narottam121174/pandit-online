'use client'

import { useEffect, useState } from 'react'
import type { Lang } from '@/lib/content'
import { t } from '@/lib/i18n'

const ENDPOINT = 'https://api.web3forms.com/submit'
const ACCESS_KEY = '09ebe9a0-d2cd-46c8-9674-872e7cbeeb53'
const FALLBACK_ORIGIN = 'https://panditonline.org'

export default function ContactForm({ lang }: { lang: Lang }) {
  const f = t(lang).form
  const [origin, setOrigin] = useState(FALLBACK_ORIGIN)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    setOrigin(window.location.origin)
    setSent(new URLSearchParams(window.location.search).get('sent') === '1')
  }, [])

  return (
    <form className="form" action={ENDPOINT} method="POST">
      <input type="hidden" name="access_key" value={ACCESS_KEY} />
      <input type="hidden" name="subject" value="Pandit Online: new message" />
      <input type="hidden" name="from_name" value="Pandit Online" />
      <input type="hidden" name="redirect" value={`${origin}/${lang}/contact/?sent=1`} />
      <label>
        <span>{f.name}</span>
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        <span>{f.email}</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        <span>{f.message}</span>
        <textarea name="message" rows={6} required />
      </label>
      <input className="hp" name="botcheck" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button type="submit">{f.send}</button>
      <p className="form-status" role="status" aria-live="polite">
        {sent && f.sent}
      </p>
    </form>
  )
}
