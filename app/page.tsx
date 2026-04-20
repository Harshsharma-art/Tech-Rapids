import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import VideoSection from '@/components/sections/VideoSection'
import ServicesPreview from '@/components/sections/ServicesPreview'
import AboutPreview from '@/components/sections/AboutPreview'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Clients from '@/components/sections/Clients'
import Testimonials from '@/components/sections/Testimonials'
import StatsCounter from '@/components/sections/StatsCounter'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Tech Rapids — Flow Fast Through Tech Troubles',
  description:
    'Tech Rapids delivers premium IT solutions including web development, mobile apps, cloud, cybersecurity, AI automation, and 24/7 IT support.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <VideoSection />
      <ServicesPreview />
      <AboutPreview />
      <WhyChooseUs />
      <Clients />
      <Testimonials />
      <StatsCounter />
      <CTASection />
    </>
  )
}
