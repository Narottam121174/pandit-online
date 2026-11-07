'use client'

import { useState } from 'react'
import type { Lang } from '@/lib/content'
import { t } from '@/lib/i18n'

const ENDPOINT = 'https://formsubmit.co/ajax/momishra2006@gmail.com'

type State = 'idle' | 'sending' | 'sent' | 'failed'

export default function ContactForm({ lang }: { lang: Lang }) {
  const f = t(lang).form
  const [state, setState] = useState<State>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    if (data.get('_honey')) return
    setState('sending')
    try {
      const res = await fetch(ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      setState(res.ok ? 'sent' : 'failed')
      if (res.ok) e.currentTarget.reset()
    } catch {
      setState('failed')
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <input type="hidden" name="_subject" value="Pandit Online: new message" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
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
      <input className="hp" name="_honey" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button type="submit" disabled={state === 'sending'}>
        {state === 'sending' ? f.sending : f.send}
      </button>
      <p className="form-status" role="status" aria-live="polite">
        {state === 'sent' && f.sent}
        {state === 'failed' && f.failed}
      </p>
    </form>
  )
}
