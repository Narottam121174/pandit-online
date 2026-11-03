import styles from './HeroSection.module.css'

interface HeroSectionProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export default function HeroSection({ title, subtitle, backgroundImage }: HeroSectionProps) {
  return (
    <section
      className={styles.hero}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className={styles.overlay}></div>
      <div className="container">
        <div className={styles.content}>
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
    </section>
  )
}
