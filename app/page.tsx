import HeroSection from '@/components/HeroSection'
import CategoryCard from '@/components/CategoryCard'
import styles from './page.module.css'

const categories = [
  {
    title: 'Ganesh Puja',
    description: 'Learn about the worship of Lord Ganesh, the remover of obstacles and the deity of beginnings.',
    icon: '🐘',
    href: '/en/pujas/ganesh-puja',
  },
  {
    title: 'Durga Puja',
    description: 'Explore the powerful rituals dedicated to Goddess Durga, celebrating victory over evil.',
    icon: '⚔️',
    href: '/en/pujas/durga-puja',
  },
  {
    title: 'Lakshmi Puja',
    description: 'Discover the blessings of Goddess Lakshmi through traditional rituals for prosperity.',
    icon: '💰',
    href: '/en/pujas/lakshmi-puja',
  },
  {
    title: 'Chhath Puja',
    description: 'Experience the sacred solar festival celebrated by devotees across regions.',
    icon: '☀️',
    href: '/en/pujas/chhath-puja',
  },
  {
    title: 'Daily Rituals',
    description: 'Master the everyday spiritual practices that form the foundation of Hindu life.',
    icon: '🔔',
    href: '/en/rituals',
  },
  {
    title: 'Mantras & Chants',
    description: 'Explore sacred mantras and their meanings to deepen your spiritual practice.',
    icon: '📿',
    href: '/en/mantras',
  },
]

const features = [
  {
    title: 'Comprehensive Knowledge',
    description: 'Detailed guides covering all aspects of Hindu rituals and pujas',
  },
  {
    title: 'Step-by-Step Instructions',
    description: 'Easy-to-follow procedures for performing rituals correctly',
  },
  {
    title: 'Multi-Language Support',
    description: 'Access content in both English and Hindi',
  },
  {
    title: 'Expert Information',
    description: 'Curated content from authentic Hindu traditions',
  },
]

export default function Home() {
  return (
    <>
      <HeroSection
        title="Welcome to Pandit Online"
        subtitle="Your comprehensive guide to Hindu rituals, pujas, and spiritual wisdom"
      />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Explore Our Pujas & Rituals</h2>
          </div>
          <div className={styles.grid}>
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.featuresSection}`}>
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Pandit Online?</h2>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((feature) => (
              <div key={feature.title} className={styles.featureCard}>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Start Your Spiritual Journey</h2>
            <p>Dive deep into the world of Hindu spirituality and rituals</p>
            <button className="btn btn-primary">Explore Now</button>
          </div>
        </div>
      </section>
    </>
  )
}
