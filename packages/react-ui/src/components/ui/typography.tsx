import type React from 'react'
import { forwardRef } from 'react'
import { cn } from '#lib/utils'

interface TextCommonProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
}

type H1Props = TextCommonProps
type H2Props = TextCommonProps
type H3Props = TextCommonProps
type H4Props = TextCommonProps
type PProps = TextCommonProps
type BlockquoteProps = TextCommonProps
type InlineCodeProps = TextCommonProps
type LeadProps = TextCommonProps
type LargeProps = TextCommonProps
type SmallProps = TextCommonProps
type MutedProps = TextCommonProps

/**
 * Custom (non-shadcn) compound component for Typography that implements the shadcn "Default" styles.
 *
 * @see https://ui.shadcn.com/docs/components/typography
 * @see Heading for more tailored heading component with custom styles.
 */
export const Typography = {
  H1: forwardRef<HTMLHeadingElement, H1Props>(({ className, children, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)}
      {...props}
    >
      {children}
    </h1>
  )),

  H2: forwardRef<HTMLHeadingElement, H2Props>(({ className, children, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn('scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0', className)}
      {...props}
    >
      {children}
    </h2>
  )),

  H3: forwardRef<HTMLHeadingElement, H3Props>(({ className, children, ...props }, ref) => (
    <h3 ref={ref} className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)} {...props}>
      {children}
    </h3>
  )),

  H4: forwardRef<HTMLHeadingElement, H4Props>(({ className, children, ...props }, ref) => (
    <h4 ref={ref} className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)} {...props}>
      {children}
    </h4>
  )),

  Paragraph: forwardRef<HTMLParagraphElement, PProps>(({ className, children, ...props }, ref) => (
    <p ref={ref} className={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...props}>
      {children}
    </p>
  )),

  BlockQuote: forwardRef<HTMLQuoteElement, BlockquoteProps>(({ className, children, ...props }, ref) => (
    <blockquote ref={ref} className={cn('mt-6 border-l-2 pl-6 italic', className)} {...props}>
      {children}
    </blockquote>
  )),

  InlineCode: forwardRef<HTMLElement, InlineCodeProps>(({ className, children, ...props }, ref) => (
    <code
      ref={ref}
      className={cn('relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold', className)}
      {...props}
    >
      {children}
    </code>
  )),

  Lead: forwardRef<HTMLParagraphElement, LeadProps>(({ className, children, ...props }, ref) => (
    <p ref={ref} className={cn('text-xl text-muted-foreground', className)} {...props}>
      {children}
    </p>
  )),

  Large: forwardRef<HTMLDivElement, LargeProps>(({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('text-lg font-semibold', className)} {...props}>
      {children}
    </div>
  )),

  Small: forwardRef<HTMLElement, SmallProps>(({ className, children, ...props }, ref) => (
    <small ref={ref} className={cn('text-sm font-medium leading-none', className)} {...props}>
      {children}
    </small>
  )),

  Muted: forwardRef<HTMLParagraphElement, MutedProps>(({ className, children, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props}>
      {children}
    </p>
  )),
}

Typography.H1.displayName = 'Typography.H1'
Typography.H2.displayName = 'Typography.H2'
Typography.H3.displayName = 'Typography.H3'
Typography.H4.displayName = 'Typography.H4'
Typography.Paragraph.displayName = 'Typography.Paragraph'
Typography.BlockQuote.displayName = 'Typography.BlockQuote'
Typography.InlineCode.displayName = 'Typography.InlineCode'
Typography.Lead.displayName = 'Typography.Lead'
Typography.Muted.displayName = 'Typography.Muted'
Typography.Large.displayName = 'Typography.Large'
Typography.Small.displayName = 'Typography.Small'
