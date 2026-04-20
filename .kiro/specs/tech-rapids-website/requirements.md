# Requirements Document

## Introduction

Tech Rapids is a premium IT company website built with Next.js 14, Tailwind CSS, Framer Motion, and shadcn/ui. The site presents the company's services, team, clients, and contact information with a modern dark/light alternating design, glassmorphism cards, animated sections, and a strong brand identity centered on the tagline "Flow Fast Through Tech Troubles". The site consists of five pages: Home, Services, About, Clients, and Contact.

## Glossary

- **Website**: The complete Next.js 14 multi-page application for Tech Rapids
- **Navbar**: The sticky top navigation bar present on every page
- **Footer**: The 4-column footer present on every page
- **Hero**: The full-screen introductory section at the top of each page
- **Glassmorphism_Card**: A UI card with frosted-glass visual effect (backdrop blur, semi-transparent background, border)
- **Framer_Motion**: The animation library used for all transitions and scroll-triggered effects
- **Marquee**: An infinitely auto-scrolling horizontal strip of client logos
- **Stats_Counter**: An animated numeric counter that counts up to a target value on scroll
- **CTA**: Call-to-action button or section prompting user engagement
- **shadcn_ui**: The component library providing accessible base UI primitives
- **App_Router**: Next.js 14 file-based routing system under the `app/` directory
- **Tailwind**: The utility-first CSS framework used for all styling
- **SEO_Metadata**: Next.js metadata exports providing title, description, and Open Graph tags per page

## Requirements

### Requirement 1: Project Setup and Configuration

**User Story:** As a developer, I want a properly configured Next.js 14 project, so that the application builds and runs correctly with all required dependencies.

#### Acceptance Criteria

1. THE Website SHALL be scaffolded as a Next.js 14 App Router project with TypeScript enabled.
2. THE Website SHALL include Tailwind CSS configured with the custom design tokens (colors: `--primary: #0066CC`, `--primary-light: #00AAFF`, `--secondary: #001F5B`, `--accent: #00D4FF`, `--dark: #0A0F1E`, `--gray-light: #F0F4FF`).
3. THE Website SHALL load Poppins (headings) and Inter (body) from Google Fonts via `next/font`.
4. THE Website SHALL configure `next.config.js` with `remotePatterns` allowing images from `images.unsplash.com`, `videos.pexels.com`, and `assets.zyrosite.com`.
5. THE Website SHALL include a `loading.tsx` branded loader component at the app root level.
6. THE Website SHALL install and configure shadcn/ui, Framer Motion, and Lucide React as dependencies.

---

### Requirement 2: Layout — Navbar

**User Story:** As a visitor, I want a sticky navigation bar, so that I can navigate between pages from anywhere on the site.

#### Acceptance Criteria

1. THE Navbar SHALL be sticky (fixed to the top) and present on every page via the root layout.
2. WHEN the user scrolls down more than 10px, THE Navbar SHALL apply a backdrop blur and semi-transparent dark background transition.
3. THE Navbar SHALL display the Tech Rapids logo on the left using a `next/image` component with `id="tech-rapids-logo"` and `src="/images/logo.png"`.
4. THE Navbar SHALL display navigation links centered: Home, Services, About, Clients, Contact.
5. THE Navbar SHALL display a "Get Quote" CTA button on the right linking to `/contact`.
6. WHEN the viewport width is below 768px, THE Navbar SHALL replace the center links and CTA with a hamburger menu icon.
7. WHEN the hamburger menu is activated, THE Navbar SHALL display a full-width dropdown or slide-in drawer with all navigation links.
8. THE Navbar SHALL highlight the active page link using a distinct color or underline indicator.

---

### Requirement 3: Layout — Footer

**User Story:** As a visitor, I want a consistent footer on every page, so that I can find company info, links, and contact details quickly.

#### Acceptance Criteria

1. THE Footer SHALL be present on every page via the root layout.
2. THE Footer SHALL contain four columns: (1) Logo, tagline, and social media icons; (2) Quick Links; (3) Services list; (4) Contact information.
3. THE Footer SHALL display the tagline "Flow Fast Through Tech Troubles" in column one.
4. THE Footer SHALL display the line "We don't just build solutions, we build your business growth." in the bottom bar.
5. THE Footer SHALL display a bottom bar with the text "© 2025 Tech Rapids. All rights reserved. | Founded by Rahi Sharma".
6. WHEN the viewport width is below 768px, THE Footer SHALL stack its four columns vertically.

---

### Requirement 4: Home Page — Hero Section

**User Story:** As a visitor, I want an impactful hero section, so that I immediately understand what Tech Rapids offers.

#### Acceptance Criteria

1. THE Hero SHALL occupy the full viewport height with a dark navy background (`#0A0F1E`).
2. THE Hero SHALL render an animated particle/dot grid in the background using Framer Motion or canvas.
3. THE Hero SHALL display a circuit board pattern as a subtle SVG or CSS background overlay.
4. THE Hero SHALL display the headline "Flow Fast Through Tech Troubles" with a word-by-word Framer Motion reveal animation on page load.
5. THE Hero SHALL display a subheadline describing Tech Rapids' value proposition below the main headline.
6. THE Hero SHALL display two CTA buttons: a primary "Get Started" button and a secondary "Our Services" button.
7. THE Hero SHALL display an animated stats row with four items: "500+ Projects", "50+ Clients", "5+ Years", "24/7 Support", each counting up via Stats_Counter on load.
8. THE Hero SHALL display a scroll indicator (animated chevron or arrow) at the bottom center.
9. WHEN the page loads, THE Hero text and buttons SHALL animate in with a fade-in and slide-up effect via Framer Motion.

---

### Requirement 5: Home Page — Video Section

**User Story:** As a visitor, I want to see a video section, so that I get a dynamic visual impression of Tech Rapids' work.

#### Acceptance Criteria

1. THE Video_Section SHALL display a full-width HTML `<video>` element with `autoPlay`, `muted`, `loop`, and `playsInline` attributes using the source `https://videos.pexels.com/video-files/6804109/6804109-uhd_2732_1440_25fps.mp4`.
2. THE Video_Section SHALL overlay a dark semi-transparent gradient over the video.
3. THE Video_Section SHALL display centered text and a play button icon over the overlay.
4. WHEN the play button is clicked, THE Video_Section SHALL open a modal dialog displaying the video with audio enabled.

---

### Requirement 6: Home Page — Services Preview

**User Story:** As a visitor, I want to see a preview of services, so that I can quickly understand what Tech Rapids offers.

#### Acceptance Criteria

1. THE Services_Preview SHALL display six Glassmorphism_Cards in a responsive grid (3 columns desktop, 2 tablet, 1 mobile).
2. THE Services_Preview SHALL include cards for: Web Development, Mobile App Development, Cloud Solutions, Cybersecurity, AI & Automation, IT Support.
3. EACH card SHALL display an icon (Lucide React), a title, and a short description.
4. WHEN the cards enter the viewport, THE Services_Preview SHALL animate them in with a staggered fade-in with 100ms delay between each card via Framer Motion.
5. WHEN a card is hovered, THE card SHALL apply a scale transform and blue neon glow effect.

---

### Requirement 7: Home Page — About Preview

**User Story:** As a visitor, I want a brief about section on the home page, so that I can learn about Tech Rapids without navigating away.

#### Acceptance Criteria

1. THE About_Preview SHALL use a two-column layout: stacked images on the left, content on the right.
2. THE About_Preview SHALL display at least two overlapping or stacked images using `next/image` with Unsplash URLs.
3. THE About_Preview SHALL display a heading, paragraph text, and a "Learn More" link to `/about`.
4. WHEN the section enters the viewport, THE About_Preview SHALL animate in via Framer Motion scroll-triggered fade and slide.

---

### Requirement 8: Home Page — Why Choose Us

**User Story:** As a visitor, I want to see reasons to choose Tech Rapids, so that I can evaluate the company's strengths.

#### Acceptance Criteria

1. THE Why_Choose_Us section SHALL display five dark Glassmorphism_Cards in a responsive grid.
2. EACH card SHALL include an icon, a title, and a description.
3. THE five cards SHALL cover: Expert Team, 24/7 Support, Proven Track Record, Cutting-Edge Technology, Client-Centric Approach.
4. WHEN the cards enter the viewport, THE Why_Choose_Us section SHALL animate them in with staggered Framer Motion transitions.

---

### Requirement 9: Home Page — Clients Marquee

**User Story:** As a visitor, I want to see a scrolling client logo strip, so that I can see who trusts Tech Rapids.

#### Acceptance Criteria

1. THE Clients_Marquee SHALL display an infinite auto-scrolling horizontal strip of client logos/names.
2. THE Clients_Marquee SHALL loop seamlessly without visible jumps.
3. WHEN the user hovers over the Marquee, THE Clients_Marquee SHALL pause the scrolling animation.

---

### Requirement 10: Home Page — Testimonials Carousel

**User Story:** As a visitor, I want to read client testimonials, so that I can assess Tech Rapids' reputation.

#### Acceptance Criteria

1. THE Testimonials section SHALL display three testimonial cards in a carousel.
2. THE Testimonials carousel SHALL auto-rotate every 4 seconds.
3. EACH testimonial card SHALL display a quote, client name, company, and a star rating.
4. THE Testimonials carousel SHALL provide manual navigation dots or arrows.

---

### Requirement 11: Home Page — Stats Counter Section

**User Story:** As a visitor, I want to see animated statistics, so that I can quickly grasp Tech Rapids' scale.

#### Acceptance Criteria

1. THE Stats_Counter section SHALL display four counters on a blue gradient background.
2. THE four counters SHALL represent: 500+ Projects Completed, 50+ Happy Clients, 5+ Years Experience, 24/7 Support Hours.
3. WHEN the Stats_Counter section enters the viewport, THE counters SHALL animate from 0 to their target values using Framer Motion.

---

### Requirement 12: Home Page — CTA Section

**User Story:** As a visitor, I want a final call-to-action section, so that I am prompted to contact Tech Rapids.

#### Acceptance Criteria

1. THE CTA_Section SHALL have a dark background with a blue neon glow effect.
2. THE CTA_Section SHALL display a heading, subtext, and a prominent "Contact Us" button linking to `/contact`.
3. WHEN the CTA_Section enters the viewport, THE section SHALL animate in via Framer Motion.

---

### Requirement 13: Services Page (/services)

**User Story:** As a visitor, I want a dedicated services page, so that I can explore each service in detail.

#### Acceptance Criteria

1. THE Services_Page SHALL display a hero section with a title "Our Services" and a breadcrumb (Home > Services).
2. THE Services_Page SHALL display six detailed service cards, each with a title, icon, feature list (at least 4 items), and a "Get Started" CTA button.
3. THE Services_Page SHALL display a "Work Process" section with four numbered steps and a connecting line between them.
4. THE Services_Page SHALL include SEO_Metadata with an appropriate title and description.

---

### Requirement 14: About Page (/about)

**User Story:** As a visitor, I want to learn about Tech Rapids' story and team, so that I can build trust with the company.

#### Acceptance Criteria

1. THE About_Page SHALL display a hero section with a title "About Us".
2. THE About_Page SHALL display a founder section featuring Rahi Sharma with a `next/image` component using `id="founder-photo"` and `src="/images/founder.jpg"`.
3. THE About_Page SHALL display Mission and Vision as two side-by-side cards.
4. THE About_Page SHALL display a team section with three placeholder team member cards, each with a photo, name, and role.
5. THE About_Page SHALL display a values section with six core company values as cards or icons.
6. THE About_Page SHALL include SEO_Metadata with an appropriate title and description.

---

### Requirement 15: Clients Page (/clients)

**User Story:** As a visitor, I want to see Tech Rapids' client portfolio, so that I can evaluate the company's experience.

#### Acceptance Criteria

1. THE Clients_Page SHALL display a hero section with a title "Our Clients".
2. THE Clients_Page SHALL display a featured client cards grid including "Education Solution Provider" and at least five additional placeholder clients.
3. THE Clients_Page SHALL display a success metrics section with key numbers.
4. THE Clients_Page SHALL display a client testimonials section.
5. THE Clients_Page SHALL include SEO_Metadata with an appropriate title and description.

---

### Requirement 16: Contact Page (/contact)

**User Story:** As a visitor, I want to contact Tech Rapids easily, so that I can request a quote or ask questions.

#### Acceptance Criteria

1. THE Contact_Page SHALL display a two-column layout: a contact form on the left and contact information on the right.
2. THE Contact_Form SHALL include fields: Full Name, Email, Phone, Service (dropdown), and Message (textarea).
3. THE Contact_Form SHALL validate all fields client-side before submission.
4. WHEN the form is submitted successfully, THE Contact_Page SHALL display a success toast notification.
5. IF a required field is empty on submission, THEN THE Contact_Form SHALL display an inline error message for that field.
6. THE Contact_Page SHALL display a map placeholder section below the two-column layout.
7. THE Contact_Page SHALL include SEO_Metadata with an appropriate title and description.

---

### Requirement 17: Animations and Motion

**User Story:** As a visitor, I want smooth, polished animations throughout the site, so that the experience feels premium and modern.

#### Acceptance Criteria

1. THE Website SHALL apply a page-load fade-in and slide-up animation to all page content via Framer Motion.
2. WHEN any section enters the viewport, THE Website SHALL trigger a scroll-based reveal animation via Framer Motion `whileInView`.
3. THE Website SHALL animate card grids with staggered entry (100ms delay per card).
4. WHEN a button is hovered, THE button SHALL scale up slightly via Framer Motion `whileHover`.
5. WHEN a button is clicked, THE button SHALL apply a scale-down tap effect via Framer Motion `whileTap`.
6. THE Navbar SHALL smoothly transition its background and blur on scroll.
7. THE Tech_Rapids logo in the Navbar SHALL apply a subtle pulse animation.

---

### Requirement 18: Accessibility and SEO

**User Story:** As a developer, I want the site to be accessible and SEO-friendly, so that it reaches more users and is usable by everyone.

#### Acceptance Criteria

1. THE Website SHALL include `aria-label` attributes on all icon-only buttons and interactive elements.
2. THE Website SHALL support full keyboard navigation for all interactive elements.
3. EACH page SHALL export a Next.js `metadata` object with a unique `title` and `description`.
4. THE Website SHALL use semantic HTML elements (`<nav>`, `<main>`, `<section>`, `<footer>`, `<header>`, `<article>`).
5. THE Website SHALL use `next/image` for all images with descriptive `alt` text.
6. THE Website SHALL be mobile-first responsive, with breakpoints at 640px, 768px, 1024px, and 1280px.
