import { CTASection, FeaturesSection, HeroSection } from '@workspace/react-layout'

export default function IndexPage(): JSX.Element {
  return (
    <div className="grid grid-cols-1 ~gap-16/32">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </div>
  )
}
