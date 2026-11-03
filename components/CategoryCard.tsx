import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import styles from './CategoryCard.module.css'

interface CategoryCardProps {
  title: string
  description: string
  icon: string
  href: string
  count?: number
}

export default function CategoryCard({ title, description, icon, href, count }: CategoryCardProps) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.iconContainer}>
        <span className={styles.icon}>{icon}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {count && <span className={styles.count}>{count} articles</span>}
      <div className={styles.footer}>
        <span>Learn more</span>
        <FiArrowRight size={18} />
      </div>
    </Link>
  )
}
