'use client'

import { useState } from 'react'
import type { Lang } from '@/lib/content'
import { t } from '@/lib/i18n'

const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT

type State = 'idle' | 'sending' | 'sent' | 'failed'

export default function ContactForm({ lang }: { lang: Lang }) {
  const f = t(lang).form
  const [state, setState] = useState<State>('idle')

  if (!ENDPOINT) return <p className="notice">{f.off}</p>

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    if (data.get('_gotcha')) return
    setState('sending')
    try {
      const res = await fetch(ENDPOINT as string, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      setState(res.ok ? 'sent' : 'failed')
      if (res.ok) e.currentTarget.reset()
    } catch {
      setState('failed')
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
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
      <input className="hp" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
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
