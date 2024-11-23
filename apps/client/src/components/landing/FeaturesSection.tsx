import { useId } from 'react'

import { Heading } from '@workspace/react-ui/components/ui/heading'
import { cn } from '@workspace/tw-style'
import { LandingSectionHeader } from '@/components/landing/SharedComponents'

export interface FeaturesSectionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {}

interface FeaturesListProps {
  features?: FeatureItem[]
  className?: string
}

interface FeatureItem {
  title: string
  description: string
}

const DEFAULT_IMG_SRC = 'https://illustrations.popsy.co/gray/man-riding-a-rocket.svg'
const DEFAULT_IMG_ALT = 'promo illustration'

const FEATURES: FeatureItem[] = [
  {
    title: 'Collaboration',
    description: 'Add an interdimensional spin with quantum-powered collaboration.',
  },
  {
    title: 'Automation',
    description: 'Automate workflows with hyperbolic integration.',
  },
  {
    title: 'Scale',
    description: 'Deploy to cloud platforms that scale beyond this universe.',
  },
]

/**
 * Features section for index/landing page.
 */
export function FeaturesSection({ id, className, ...restProps }: FeaturesSectionProps): JSX.Element {
  const ssrId = useId()
  const sectionId = id || ssrId

  return (
    <section id={sectionId} className={className} {...restProps}>
      <div className="container">
        <LandingSectionHeader
          lead="Key Features"
          title="Reticulate your splines at warp speed"
          description="Focus your team on shipping innovative features using multidimensional holographic time crystals powered by AI."
        />
        <div className="grid ~gap-6/8 mx-auto ~pt-4/6 max-w-5xl items-center lg:grid-cols-2">
          <MockImageFrame className="lg:order-last" />
          <FeaturesList features={FEATURES} />
        </div>
      </div>
    </section>
  )
}

/**
 * List of features for landing FeaturesSection.
 */
function FeaturesList({ features, className }: FeaturesListProps): JSX.Element {
  return (
    <ul className={cn('flex flex-col justify-center ~gap-4/6', className)}>
      {features?.map((feature) => (
        <li key={feature.title} className="flex flex-col ~gap-0.5/1">
          <Heading as="h3" styleAs="h4">
            {feature.title}
          </Heading>
          <p className="~text-base/lg text-pretty text-muted-foreground">{feature.description}</p>
        </li>
      ))}
    </ul>
  )
}

/**
 * Mock/placeholder image frame.
 */
function MockImageFrame({ className, imgClassName }: { className?: string; imgClassName?: string }): JSX.Element {
  return (
    <div
      className={cn(
        'mx-auto aspect-video overflow-hidden border rounded-xl',
        'w-full',
        'bg-primary/5 dark:bg-white/80 border-border',
        className,
      )}
    >
      <img className={cn('sm:object-contain sm:size-full', imgClassName)} src={DEFAULT_IMG_SRC} alt={DEFAULT_IMG_ALT} />
    </div>
  )
}
