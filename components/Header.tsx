'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi'
import styles from './Header.module.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState('en')

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.nav}>
          <Link href="/" className={styles.logo}>
            🕉️ Pandit Online
          </Link>

          <button
            className={styles.menuButton}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          <nav className={`${styles.navMenu} ${isOpen ? styles.open : ''}`}>
            <Link href="/en/pujas" className={styles.navLink}>
              Pujas
            </Link>
            <Link href="/en/rituals" className={styles.navLink}>
              Rituals
            </Link>
            <Link href="/en/blog" className={styles.navLink}>
              Blog
            </Link>
            <Link href="/en/about" className={styles.navLink}>
              About
            </Link>
            <Link href="/en/contact" className={styles.navLink}>
              Contact
            </Link>
          </nav>

          <div className={styles.langSelector}>
            <button
              className={styles.langBtn}
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              title="Switch language"
            >
              <FiGlobe size={20} />
              {language.toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
