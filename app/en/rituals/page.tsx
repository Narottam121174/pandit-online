import HeroSection from '@/components/HeroSection'
import CategoryCard from '@/components/CategoryCard'
import styles from './page.module.css'

const rituals = [
  {
    title: 'Daily Rituals',
    description: 'Essential spiritual practices to perform every day for well-being.',
    icon: '🔔',
    href: '/en/rituals/daily-rituals',
  },
  {
    title: 'Meditation & Yoga',
    description: 'Ancient practices for mental clarity and spiritual growth.',
    icon: '🧘',
    href: '/en/rituals/meditation',
  },
  {
    title: 'Life-Cycle Ceremonies',
    description: 'Important rituals marking significant life events.',
    icon: '👨‍👩‍👧‍👦',
    href: '/en/rituals/life-cycle',
  },
  {
    title: 'Seasonal Festivals',
    description: 'Celebrations and rituals for major Hindu festivals throughout the year.',
    icon: '🎉',
    href: '/en/rituals/festivals',
  },
]

export default function RitualsPage() {
  return (
    <>
      <HeroSection
        title="Hindu Rituals & Practices"
        subtitle="Guide to sacred rituals and spiritual practices"
      />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Explore Rituals</h2>
          </div>
          <div className={styles.grid}>
            {rituals.map((ritual) => (
              <CategoryCard key={ritual.title} {...ritual} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
