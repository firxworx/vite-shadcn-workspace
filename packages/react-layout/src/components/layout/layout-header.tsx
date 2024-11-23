import { useCallback, useState } from 'react'
import { Link, NavLink, type NavLinkProps } from 'react-router'
import { useWindowScroll, useDebouncedValue } from '@mantine/hooks'

import { cn } from '@workspace/tw-style'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@workspace/react-ui/components/ui/sheet'
import { Button } from '@workspace/react-ui/components/ui/button'
import { MenuIcon } from '@workspace/react-ui/components/icons/nav-icons'
import type { AppNavLink } from '@workspace/data'
import { ThemeMenu } from '@workspace/react-ui/components/layout/theme-menu'
import { Logo } from '@workspace/react-ui/components/assets/logo'

interface LayoutHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  navLinks?: AppNavLink[]
  className?: string
}

interface HeaderNavLinkProps extends AppNavLink, Omit<NavLinkProps, 'to'> {
  href: string
  title: string

  isAtScrollThreshold?: boolean
  className?: string
}

export function LayoutHeader({ navLinks, className }: LayoutHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  const [scroll] = useWindowScroll()
  const [debouncedScrollY] = useDebouncedValue(scroll.y, 150) // 150ms debounce

  const handleMenuLinkClick = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  const isAtScrollThreshold = debouncedScrollY > 50

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full border-b transition-all',
        'bg-transparent backdrop-blur supports-[backdrop-filter]:bg-background/75',
        isAtScrollThreshold ? 'bg-transparent border-border/100 dark:border-border/50 ' : 'border-transparent',
        className,
      )}
    >
      <nav
        className={cn('container flex ~gap-4/6 items-center ~h-14/16 w-full transition-all', {
          'opacity-75': isAtScrollThreshold,
        })}
      >
        <Link
          to="/"
          className={cn(
            'group flex ~gap-1.5/2.5 items-center ~-ml-4/6 ~px-4/6 ~text-lg/xl font-bold',
            'text-foreground hover:text-P-link-hover transition-colors',
          )}
          onClick={handleMenuLinkClick}
        >
          <Logo className="~size-5/6" />
          App
        </Link>
        <ul className="hidden md:flex ~gap-4/6">
          {navLinks?.map((item) => (
            <li key={item.title}>
              <HeaderNavLink href={item.href} title={item.title} />
            </li>
          ))}
        </ul>
        <div className="hidden md:flex md:items-center md:justify-end md:flex-1">
          <ThemeMenu iconSize="md" />
        </div>
        <div className="flex items-center justify-end flex-1 md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="~-mr-2/4">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className={className}>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription className="sr-only">Mobile Navigation Menu</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col items-start ~gap-0.5/1 ~mt-4/6">
                {navLinks?.map((item) => (
                  <HeaderNavLink
                    key={item.title}
                    title={item.title}
                    href={item.href}
                    isAtScrollThreshold={isAtScrollThreshold}
                    onClick={handleMenuLinkClick}
                  />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

function HeaderNavLink({ href, title, isAtScrollThreshold, className, ...restNavLinkProps }: HeaderNavLinkProps) {
  return (
    <NavLink
      to={href}
      className={({ isActive, isPending, isTransitioning }) =>
        cn(
          'flex py-2.5 font-medium text-foreground hover:text-P-link-hover transition-colors',
          'w-[calc(100%+theme(spacing.6)*2)] -mx-6 px-6 md:mx-0 md:~px-2/4 md:w-fit',
          '~text-base/lg md:~text-sm/base md:rounded-lg',
          {
            'animate-pulse text-muted': isPending,
            'bg-muted/75': isActive && !isAtScrollThreshold,
            'bg-muted/10': isActive && !!isAtScrollThreshold,
            'opacity-75': isTransitioning,
          },
          className,
        )
      }
      {...restNavLinkProps}
    >
      {title}
    </NavLink>
  )
}
