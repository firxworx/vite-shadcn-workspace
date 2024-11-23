import { useId, useState } from 'react'

import { Button } from '@workspace/react-ui/components/ui/button'
import { Input } from '@workspace/react-ui/components/ui/input'
import { Heading } from '@workspace/react-ui/components/ui/heading'

export interface CTASectionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {}

/**
 * Newsletter CTA (call-to-action) section for index/landing page with sign-up form.
 */
export function NewsletterSection({ id, className, ...restProps }: CTASectionProps): JSX.Element {
  const ssrId = useId()
  const sectionId = id || ssrId

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section id={sectionId} className={className} {...restProps}>
      <div className="container">
        <div className="flex flex-col items-center justify-center ~gap-2/4 text-center">
          <Heading as="h2" styleAs="h3" className="tracking-tighter md:tracking-tight">
            Sign Up for Updates
          </Heading>
          <p className="~text-lg/xl max-w-xl text-muted-foreground">
            Stay in the loop with our latest product news and updates.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col ~gap-2/4 sm:flex-row w-full max-w-sm ~pt-1/2">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="h-auto max-w-lg flex-1 text-base"
            />
            <Button type="submit" size="lg" disabled={isSubmitted}>
              Sign Up
            </Button>
          </form>
          {isSubmitted && (
            <div role="alert" className="bg-card text-muted-foreground ~p-2/4 rounded-md animate-in fade-in-0 ~-mt-2/4">
              <p className="~text-sm/base">This is a dummy form that doesn't do anything 🎉</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
