import { cn } from '@workspace/tw-style'

import { Button } from '#components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '#components/ui/dropdown-menu'
import { useThemeContext } from '#hooks/use-theme-context'
import { MoonIcon, ServerIcon, SunIcon } from '#components/icons/theme-icons'

export interface ThemeMenuProps {
  className?: string
  iconSize?: 'xs' | 'sm' | 'md'
}

/**
 * Light/dark mode toggle drop-down menu that renders as an icon button.
 * Consuming apps must be wrapped by `ThemeContextProvider`.
 *
 * ```ts
 * // App.tsx
 * <ThemeContextProvider attribute="class" defaultTheme="system" enableSystem>
 *  <RouterProvider {...} />
 * </ThemeContextProvider>
 * ```
 *
 * @see https://ui.shadcn.com/docs/dark-mode
 */
export function ThemeMenu({ iconSize = 'md', className }: ThemeMenuProps): JSX.Element {
  const { setTheme } = useThemeContext()

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            'border border-transparent text-foreground hover:text-P-link/95 hover:bg-transparent',
            className,
          )}
        >
          <SunIcon
            className={cn('block rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0', {
              '~size-2.5/3': iconSize === 'xs',
              '~size-3/4': iconSize === 'sm',
              '~size-5/6': iconSize === 'md',
            })}
          />
          <MoonIcon
            className={cn('absolute block rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100', {
              '~size-2.5/3': iconSize === 'xs',
              '~size-3/4': iconSize === 'sm',
              '~size-5/6': iconSize === 'md',
            })}
          />
          <span className="sr-only">Open Light/Dark Theme Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => {
            setTheme('light')
          }}
        >
          <SunIcon className="~me-2/3 size-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme('dark')
          }}
        >
          <MoonIcon className="~me-2/3 size-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme('system')
          }}
        >
          <ServerIcon className="~me-2/3 size-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
