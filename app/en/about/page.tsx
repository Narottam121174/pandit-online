import HeroSection from '@/components/HeroSection'
import styles from './page.module.css'

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About Pandit Online"
        subtitle="Your trusted guide to Hindu rituals and spirituality"
      />

      <article className={styles.about}>
        <div className="container">
          <section className={styles.section}>
            <h2>Our Mission</h2>
            <p>
              Pandit Online is dedicated to preserving and sharing the rich knowledge of Hindu rituals, pujas,
              and spiritual practices with people around the world. We believe that authentic spiritual wisdom
              should be accessible to everyone, regardless of their background or location.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Who We Are</h2>
            <p>
              We are a collective of spiritual practitioners, scholars, and educators committed to documenting
              and explaining Hindu traditions in clear, accessible language. Our team includes pandits,
              Sanskrit scholars, and spiritually-minded individuals who are passionate about spreading authentic
              knowledge.
            </p>
          </section>

          <section className={styles.section}>
            <h2>What We Offer</h2>
            <ul>
              <li>Comprehensive guides to major Hindu pujas and rituals</li>
              <li>Step-by-step instructions for performing rituals correctly</li>
              <li>Deep insights into the spiritual significance of practices</li>
              <li>Blog articles on Hindu philosophy and spirituality</li>
              <li>Multi-language support (English and Hindi)</li>
              <li>Free access to all content and resources</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Our Values</h2>
            <div className={styles.values}>
              <div className={styles.valueCard}>
                <h4>Authenticity</h4>
                <p>We ensure all content is based on traditional texts and authentic practices.</p>
              </div>
              <div className={styles.valueCard}>
                <h4>Accessibility</h4>
                <p>We make spiritual knowledge easily accessible to everyone.</p>
              </div>
              <div className={styles.valueCard}>
                <h4>Respect</h4>
                <p>We approach all traditions with deep respect and cultural sensitivity.</p>
              </div>
              <div className={styles.valueCard}>
                <h4>Quality</h4>
                <p>We maintain high standards of accuracy and detailed information.</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Get in Touch</h2>
            <p>
              Have questions? Want to contribute? We'd love to hear from you!
              <br />
              <strong>Email: <a href="mailto:info@panditonline.org">info@panditonline.org</a></strong>
            </p>
          </section>
        </div>
      </article>
    </>
  )
}
