import type React from 'react'
import { useId, forwardRef } from 'react'
import { cn } from '@workspace/tw-style'

export type HeadingLevelProp = Extract<keyof JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>

/**
 * Heading component can be styled as any heading level or as a 'card' heading.
 */
export type StyleAsHeadingLevelProp = HeadingLevelProp | 'card'

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  id?: string | undefined
  as: HeadingLevelProp // vs. React.ElementType
  styleAs?: StyleAsHeadingLevelProp
}

const commonClassNames = 'w-full'

const classMap = new Map<StyleAsHeadingLevelProp, string>([
  ['h1', 'cx-h1 ~text-3xl/5xl font-extrabold text-balance [&_strong]:font-black tracking-tighter md:tracking-tight'],
  ['h2', 'cx-h2 ~text-2xl/4xl font-bold text-balance [&_strong]:font-extrabold tracking-tighter md:tracking-tight'],
  ['h3', 'cx-h3 ~text-xl/3xl font-bold text-balance [&_strong]:font-extrabold'],
  ['h4', 'cx-h4 ~text-lg/2xl font-bold text-pretty [&_strong]:font-extrabold'],
  ['h5', 'cx-h5 ~text-base/xl font-semibold text-pretty [&_strong]:font-bold'],
  ['h6', 'cx-h6 ~text-base/lg font-semibold text-pretty [&_strong]:font-bold'],
  ['card', 'cx-h-card ~text-xl/2xl leading-none font-semibold text-pretty [&_strong]:font-bold'],
])

/**
 * Heading component that renders a heading element with the tailwind theme's utilities applied.
 * Use the `styleAs` prop to render markup for one heading but style it as another.
 */
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(function Heading(
  { id, as: HeadingComponent, styleAs, className, children, ...props },
  ref,
) {
  const ssrId = useId()
  const headingId = id ?? ssrId

  return (
    <HeadingComponent
      ref={ref}
      id={headingId}
      className={cn(classMap.get(styleAs || HeadingComponent), commonClassNames, className)}
      {...props}
    >
      {children}
    </HeadingComponent>
  )
})
