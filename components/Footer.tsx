import Link from 'next/link'
import { FiFacebook, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.section}>
            <h4>About Pandit Online</h4>
            <p>Your comprehensive guide to Hindu rituals, pujas, and spiritual practices.</p>
          </div>

          <div className={styles.section}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/en/pujas">Pujas</Link></li>
              <li><Link href="/en/rituals">Rituals</Link></li>
              <li><Link href="/en/blog">Blog</Link></li>
              <li><Link href="/en/about">About</Link></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Contact</h4>
            <p>Email: <a href="mailto:info@panditonline.org">info@panditonline.org</a></p>
            <p>Follow us on social media</p>
            <div className={styles.social}>
              <a href="#" aria-label="Facebook"><FiFacebook /></a>
              <a href="#" aria-label="Twitter"><FiTwitter /></a>
              <a href="#" aria-label="Instagram"><FiInstagram /></a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Pandit Online. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
