import type React from 'react'

import { cn } from '@workspace/tw-style'
import { GradientTextSpan } from '@workspace/react-ui/components/display/gradient-text-span'
import { Heading } from '@workspace/react-ui/components/ui/heading'

export interface LandingSectionHeaderProps {
  lead?: string
  title: string
  description?: string | React.ReactNode
  leadVariant?: LeadProps['variant']
}

export interface LeadProps {
  variant: 'pill' | 'gradient'
  children?: React.ReactNode
}

/**
 * Renders a `<header>` element with optional lead, title (as `h2` heading element), and optional description.
 * Indended for use in index/landing page sections.
 */
export function LandingSectionHeader({
  lead,
  title,
  description,
  leadVariant = 'pill',
}: LandingSectionHeaderProps): JSX.Element {
  return (
    <header className="flex flex-col items-center ~gap-2/4 text-center justify-center">
      {lead ? <Lead variant={leadVariant}>{lead}</Lead> : null}
      <Heading as="h2" className="font-heading ~text-3xl/4xl">
        {title}
      </Heading>
      {description ? (
        <>
          {typeof description === 'string' ? (
            <p className={cn('~pt-2/0 text-pretty ~text-lg/xl text-muted-foreground max-w-3xl')}>{description}</p>
          ) : (
            <div className={cn('text-pretty ~text-lg/xl text-muted-foreground max-w-3xl')}>{description}</div>
          )}
        </>
      ) : null}
    </header>
  )
}

/**
 * Lead text to render above a landing section's primary heading.
 */
function Lead({ variant = 'pill', children }: LeadProps): JSX.Element | null {
  if (!children) {
    return null
  }

  return variant === 'pill' ? (
    <div className="~text-xs/sm rounded-lg ~py-1/1.5 ~px-2/4 bg-muted">{children}</div>
  ) : variant === 'gradient' ? (
    <div className="font-semibold ~text-base/lg">
      {variant === 'gradient' ? <GradientTextSpan>{children}</GradientTextSpan> : null}
    </div>
  ) : null
}
