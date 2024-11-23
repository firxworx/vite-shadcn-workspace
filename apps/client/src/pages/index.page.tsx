import { HeroSection } from '@/components/landing/HeroSection'
import { FeaturesSection } from '@/components/landing/FeaturesSection'
import { NewsletterSection } from '@/components/landing/NewsletterSection'

export default function IndexPage(): JSX.Element {
  return (
    <div className="grid grid-cols-1 ~gap-16/32">
      <HeroSection />
      <FeaturesSection />
      <NewsletterSection />
    </div>
  )
}
