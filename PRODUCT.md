# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router, TypeScript), static export, deployed to GitHub Pages. Confirmed by the user.

## Users

Primary: a household member in the middle of performing a puja, usually on a phone, who needs the vidhi (procedure), samagri (materials list), mantras, and aarti text quickly and legibly, mostly in Hindi/Devanagari. Secondary (not confirmed as equal): people planning a puja days ahead and reading calmly.

## Product Purpose

A free, wiki-style reference library of puja-paddhati (ritual procedures), mantras, and aarti, written in Hindi/Sanskrit with an English translation. It replaces the original Wix site at panditonline.org ("Online Pooja | Panditonline | Darbhanga"). Success: someone can open a puja page on a phone, follow it start to finish without hunting, and trust the text.

## Positioning

The source material is a Mithila/Darbhanga tradition library: it includes Mithila-specific observances (चौठचन्द्र, कोजागरा लक्ष्मीपूजा) alongside pan-Hindu pujas, and the original homepage states that questions are answered personally by scholars of a Sanskrit university, not by computer. A generic Hindu-rituals site cannot truthfully claim this.

## Operating Context

Pages are long-form ritual procedures in Devanagari: step-by-step vidhi, Sanskrit shlokas with Hindi explanation, and aarti lyrics. Text is read at arm's length, often in low light or with hands occupied. Content is organized in the original as: पूजा संग्रह (puja collection), आरती संग्रह (aarti collection), Downloads, About/Objective/Message-from-patrons, Blog, Contact, Terms, Privacy.

## Capabilities and Constraints

- Free to read. No payment, no booking, no paid services of any kind. The original's paid items (online live puja, anushthan, kundli, muhurat services) are dropped by decision.
- Multi-language: Hindi leads, English second, as full parallel pages, not machine-flavored summaries.
- Contact form delivers to an email address the user will supply (not yet provided; do not hard-code the scrape's "Test pandit" address).
- Static site only: no backend, so the form needs a third-party form endpoint or mailto fallback. Undecided.
- Mobile readiness and SEO are wanted.
- The earlier first-pass build under app/ invented content (generic puja cards, a "team of scholars" About copy, a placeholder email) and is not authoritative.

## Brand Commitments

Name: Pandit Online. The scrape shows the site logo/favicon image `3dbd93_9e666581f0414615a420b7506b0de243_mv2.jpg`. No other brand colors, type, or voice were confirmed by the user.

## Evidence on Hand

- Scraped Wix mirror at `../pandit online/www.panditonline.org/` (68 HTML files under `en/`, 9 are Wix 400-error pages). Real copy exists on en.html, about.html, and the puja pages (e.g. गणेश पूजा, छठ पूजा, पूजा-पद्धति pages).
- 41 original images in `../pandit online/www.panditonline.org/../static.wixstatic.com/media/`.
- Original homepage includes two embedded media items (durations 04:28 and 03:30) and a scanned page image.
- Absent, must not be fabricated: testimonials, team bios, a verified contact email, any pricing, any claim about the scholars' names or credentials beyond what the original page text says. A phone number (+91 8789272667) appears in the scrape, but the user chose to drop inquiry/paid contact, so it is not displayed.

## Product Principles

1. The text is the product: Devanagari reads first, large, and unbroken; nothing decorates between the visitor and the vidhi.
2. Hindi is primary, not a translation layer bolted onto English.
3. Content comes from the original source; never invent ritual content, credentials, or contact details.
4. Free and reference-only: no commerce framing anywhere.
5. Findable by festival, deity, and aarti name, in the vocabulary the original already uses.

## Accessibility & Inclusion

Devanagari must render correctly everywhere (proper font with full conjunct coverage, no letterspacing on Devanagari). Large, high-contrast reading text for older users and low-light use. Mobile-first tap targets. Not otherwise specified by the user.
