'use client'

import HeroSection from '@/components/HeroSection'
import { useState } from 'react'
import styles from './page.module.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with email service (Formspree, EmailJS, etc.)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with our team"
      />

      <section className="section">
        <div className="container">
          <div className={styles.contactWrapper}>
            <div className={styles.info}>
              <h2>Get in Touch</h2>
              <p>
                Have questions about Hindu rituals? Want to contribute to our knowledge base?
                Or just want to say hello? We'd love to hear from you!
              </p>

              <div className={styles.infoCard}>
                <h4>Email</h4>
                <p>
                  <a href="mailto:info@panditonline.org">info@panditonline.org</a>
                </p>
              </div>

              <div className={styles.infoCard}>
                <h4>Response Time</h4>
                <p>We typically respond to inquiries within 24-48 hours.</p>
              </div>

              <div className={styles.infoCard}>
                <h4>Follow Us</h4>
                <p>
                  Connect with us on social media for daily spiritual insights and updates.
                </p>
              </div>
            </div>

            <div className={styles.form}>
              <h2>Send us a Message</h2>
              {submitted && (
                <div className={styles.successMessage}>
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this about?"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message here..."
                    rows={5}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
