import HeroSection from '@/components/HeroSection'
import styles from './page.module.css'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export default function GaneshPuja({ params }: ArticlePageProps) {
  return (
    <>
      <HeroSection
        title="Ganesh Puja"
        subtitle="Worship of the Remover of Obstacles"
      />

      <article className={styles.article}>
        <div className="container">
          <div className={styles.content}>
            <section>
              <h2>About Ganesh Puja</h2>
              <p>
                Ganesh Puja is one of the most important and widely performed rituals in Hinduism. Lord Ganesh,
                with his elephant head and rotund figure, is worshipped as the remover of obstacles (Vighnaharta)
                and the lord of beginnings. Every Hindu ritual traditionally begins with the worship of Ganesh.
              </p>
            </section>

            <section>
              <h2>Significance</h2>
              <p>
                Ganesh represents wisdom, intelligence, and prosperity. His worship is believed to remove obstacles
                from one's path and ensure success in new ventures. The mouse (Vahana) of Ganesh symbolizes the
                control of ego and material desires.
              </p>
            </section>

            <section>
              <h2>When to Perform</h2>
              <ul>
                <li>At the beginning of any new undertaking or venture</li>
                <li>During Ganesh Chaturthi (Birthday of Ganesh)</li>
                <li>Before starting important rituals or ceremonies</li>
                <li>On Wednesdays (Ganesh's special day)</li>
              </ul>
            </section>

            <section>
              <h2>Items Required (Samagri)</h2>
              <ul>
                <li>Flowers (lotus, hibiscus, jasmine)</li>
                <li>Incense (Agarbatti)</li>
                <li>Oil lamp (Diya)</li>
                <li>Food offerings (Modak, laddoo, jaggery)</li>
                <li>Water for ritual (Narmada water or any holy water)</li>
                <li>Turmeric powder</li>
                <li>Vermillion (Sindoor)</li>
                <li>Sandalwood paste</li>
              </ul>
            </section>

            <section>
              <h2>Step-by-Step Procedure</h2>
              <ol>
                <li><strong>Preparation:</strong> Clean the worship area and arrange all items.</li>
                <li><strong>Invocation:</strong> Ring the bell to invite the deity.</li>
                <li><strong>Bathing:</strong> Offer ritual bathing with water and sandalwood.</li>
                <li><strong>Decoration:</strong> Dress the idol with flowers and garlands.</li>
                <li><strong>Prayers:</strong> Chant Ganesh mantras and prayers.</li>
                <li><strong>Offering:</strong> Present flowers, incense, and food offerings.</li>
                <li><strong>Aarti:</strong> Perform the ritual of waving lamps (Aarti).</li>
                <li><strong>Blessing:</strong> Receive the deity's blessings and distribute prasad (blessed food).</li>
              </ol>
            </section>

            <section>
              <h2>Important Mantras</h2>
              <p className={styles.mantra}>
                "ॐ गं गणपतये नमः" <br/>
                (Om Gam Ganapataye Namah)
              </p>
              <p>
                This is the most sacred mantra of Lord Ganesh. Chanting it removes obstacles and invites positive energy.
              </p>
            </section>

            <section>
              <h2>Tips for Best Results</h2>
              <ul>
                <li>Perform with a pure heart and sincere devotion</li>
                <li>Maintain cleanliness and purity</li>
                <li>Use fresh and quality items for offerings</li>
                <li>Chant mantras with proper pronunciation</li>
                <li>Distribute the blessed food (Prasad) to family and devotees</li>
              </ul>
            </section>

            <section>
              <h2>Related Festivals</h2>
              <p>
                <strong>Ganesh Chaturthi:</strong> The most important festival celebrating Ganesh's birthday,
                usually in August or September. Families set up elaborate altars and perform day-long rituals.
              </p>
            </section>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.card}>
              <h4>Quick Facts</h4>
              <ul>
                <li><strong>Deity:</strong> Lord Ganesh</li>
                <li><strong>Best Day:</strong> Wednesday</li>
                <li><strong>Duration:</strong> 30 minutes to 2 hours</li>
                <li><strong>Difficulty:</strong> Easy to Moderate</li>
              </ul>
            </div>

            <div className={styles.card}>
              <h4>Related Topics</h4>
              <ul>
                <li><a href="/en/pujas/durga-puja">Durga Puja</a></li>
                <li><a href="/en/pujas/lakshmi-puja">Lakshmi Puja</a></li>
                <li><a href="/en/rituals">Daily Rituals</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </article>
    </>
  )
}
