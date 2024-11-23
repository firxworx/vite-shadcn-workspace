import { useId } from 'react'
import { Link } from 'react-router'

import { cn } from '@workspace/tw-style'
import { LinkButton } from '@workspace/react-ui/components/ui/link-button'
import { Heading } from '@workspace/react-ui/components/ui/heading'

export interface HeroSectionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {}

const DEFAULT_IMG_SRC = 'https://illustrations.popsy.co/gray/product-launch.svg'
const DEFAULT_IMG_ALT = 'promo illustration'

/**
 * Hero section for index/landing page.
 */
export function HeroSection({ id, className, ...restProps }: HeroSectionProps): JSX.Element {
  const ssrId = useId()
  const sectionId = id || ssrId

  return (
    <section id={sectionId} className={className} {...restProps}>
      <div className="container grid ~gap-6/8 grid-cols-1 sm:grid-cols-2">
        <div className="~gap-4/6 flex flex-col justify-center">
          <div className="~gap-4/6 flex flex-col">
            <Heading as="h1">Hero heading</Heading>
            <p className="~text-lg/xl max-w-lg text-pretty text-muted-foreground">
              Empower your team with the tools to create quantum AI moonshots on the galactic interwebs.
            </p>
          </div>
          <div className="flex flex-wrap items-center ~gap-2/4">
            <LinkButton asChild variant="default" size="hero">
              <Link to="/demo" className="max-w-md">
                Get Started
              </Link>
            </LinkButton>
            <LinkButton asChild variant="outline" size="hero">
              <Link to="/demo" className="max-w-md">
                Contact Sales
              </Link>
            </LinkButton>
          </div>
        </div>
        <MockImageFrame className="place-self-center" />
      </div>
    </section>
  )
}

function MockImageFrame({ className, imgClassName }: { className?: string; imgClassName?: string }): JSX.Element {
  return (
    <div
      className={cn(
        'mx-auto aspect-video overflow-hidden border rounded-xl size-full',
        'bg-primary/5 dark:bg-white/80 border-border',
        className,
      )}
    >
      <img
        className={cn('object-contain scale-90 ~-translate-y-4/6', imgClassName)}
        src={DEFAULT_IMG_SRC}
        alt={DEFAULT_IMG_ALT}
      />
    </div>
  )
}
