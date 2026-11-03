'use client'

import { useEffect, useRef, useState } from 'react'

export type StepLink = { id: string; title: string }

export default function StepNav({ links, label }: { links: StepLink[]; label: string }) {
  const [active, setActive] = useState(links[0]?.id)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[]
    if (!els.length || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (hit) setActive(hit.target.id)
      },
      { rootMargin: '-15% 0px -70% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [links])

  useEffect(() => {
    const chip = listRef.current?.querySelector<HTMLElement>('[aria-current="true"]')
    chip?.scrollIntoView({ inline: 'center', block: 'nearest' })
  }, [active])

  return (
    <nav className="stepnav" aria-label={label}>
      <div className="stepnav-list" ref={listRef}>
        {links.map((l) => (
          <a key={l.id} href={`#${l.id}`} className="chip" aria-current={active === l.id ? 'true' : undefined}>
            {l.title}
          </a>
        ))}
      </div>
    </nav>
  )
}
