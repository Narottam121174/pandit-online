import HeroSection from '@/components/HeroSection'
import styles from './page.module.css'

const blogPosts = [
  {
    title: 'Understanding the Significance of Pujas',
    date: '2024-01-15',
    excerpt: 'Explore the deep spiritual meaning behind Hindu worship rituals...',
    category: 'Spirituality',
  },
  {
    title: 'Festival Guide: Diwali Celebrations',
    date: '2024-01-10',
    excerpt: 'A comprehensive guide to celebrating Diwali with traditional practices...',
    category: 'Festivals',
  },
  {
    title: 'Mantras and Their Power',
    date: '2024-01-05',
    excerpt: 'Discover how sacred mantras can transform your spiritual practice...',
    category: 'Mantras',
  },
]

export default function BlogPage() {
  return (
    <>
      <HeroSection
        title="Blog"
        subtitle="Insights on Hindu rituals, spirituality, and practices"
      />

      <section className="section">
        <div className="container">
          <div className={styles.blogGrid}>
            {blogPosts.map((post) => (
              <article key={post.title} className={styles.blogCard}>
                <span className={styles.category}>{post.category}</span>
                <h3>{post.title}</h3>
                <p className={styles.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p>{post.excerpt}</p>
                <a href="#" className={styles.readMore}>Read More →</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
