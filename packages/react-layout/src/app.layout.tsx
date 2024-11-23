import { Outlet, useLocation } from 'react-router-dom'
import { cn } from '@workspace/tw-style'
import type { AppNavLink, AppNavLinkGroup, SocialMediaDto } from '@workspace/data'

import { LayoutHeader } from './components/layout/layout-header.tsx'
import { LayoutFooter } from './components/layout/layout-footer.tsx'
import { LayoutMain } from './components/layout/layout-main.tsx'

export interface AppLayoutProps {
  navLinks?: AppNavLink[]
  footerNavLinkGroups?: AppNavLinkGroup[]
  socialMedia?: SocialMediaDto
  hasMain?: boolean
  isMainContainer?: boolean
  className?: string
}

/** ..
 * Render the application's primary layout with a header, optional main, and footer.
 *
 * The `main` element adds `container` CSS class for all routes that are not '/'.
 * Override the container default for non-'/' routes by setting `isMainContainer` to `false`.
 *
 * The `className` prop is applied to the `main` element if it is rendered.
 *
 * Adds `self-start` (`align-self: start`) to the header to prevent it from stretching if it is a grid item.
 */
export function AppLayout({
  navLinks,
  socialMedia,
  hasMain = true,
  isMainContainer = true,
  className,
}: AppLayoutProps): JSX.Element {
  const location = useLocation()
  const isHomeLocation = location.pathname === '/'

  return (
    <>
      <LayoutHeader navLinks={navLinks} className="self-start" />
      {hasMain ? (
        <LayoutMain isContainer={isHomeLocation ? false : isMainContainer} className={cn('flex-1', className)}>
          <Outlet />
        </LayoutMain>
      ) : (
        <Outlet />
      )}

      <LayoutFooter socialMedia={socialMedia} />
    </>
  )
}
