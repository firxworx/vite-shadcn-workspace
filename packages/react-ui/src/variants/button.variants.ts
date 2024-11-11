import { cva } from 'class-variance-authority'
import { clsx } from '@workspace/tw-style'
import { focusClassNames, disabledInputClassNames } from '#variants/common.styles'

export const buttonVariants = cva(
  clsx(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors',
    'text-sm font-medium',
    focusClassNames,
    disabledInputClassNames,
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',

    // commented out the following because it is the most annoying shadcn/ui style and it limits customization
    // '[&_svg]:size-4',
  ),
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        hero: 'rounded-lg ~py-3/4 ~px-5/7 ~text-sm/base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)
