import HeroSection from '@/components/HeroSection'
import CategoryCard from '@/components/CategoryCard'
import styles from './page.module.css'

const pujas = [
  {
    title: 'Ganesh Puja',
    description: 'The worship of Lord Ganesh, remover of obstacles and lord of beginnings.',
    icon: '🐘',
    href: '/en/pujas/ganesh-puja',
  },
  {
    title: 'Durga Puja',
    description: 'Celebrate victory over evil with this powerful goddess worship ritual.',
    icon: '⚔️',
    href: '/en/pujas/durga-puja',
  },
  {
    title: 'Lakshmi Puja',
    description: 'Invoke prosperity and abundance through devotion to Goddess Lakshmi.',
    icon: '💰',
    href: '/en/pujas/lakshmi-puja',
  },
  {
    title: 'Chhath Puja',
    description: 'Experience the sacred solar festival of devotion and gratitude.',
    icon: '☀️',
    href: '/en/pujas/chhath-puja',
  },
  {
    title: 'Saraswati Puja',
    description: 'Seek knowledge and wisdom through worship of Goddess Saraswati.',
    icon: '📚',
    href: '/en/pujas/saraswati-puja',
  },
  {
    title: 'Hanuman Puja',
    description: 'Experience devotion and strength through worship of Lord Hanuman.',
    icon: '🙏',
    href: '/en/pujas/hanuman-puja',
  },
]

export default function PujasPage() {
  return (
    <>
      <HeroSection
        title="Hindu Pujas"
        subtitle="Learn about sacred worship rituals and their significance"
      />

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Explore All Pujas</h2>
          </div>
          <div className={styles.grid}>
            {pujas.map((puja) => (
              <CategoryCard key={puja.title} {...puja} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
