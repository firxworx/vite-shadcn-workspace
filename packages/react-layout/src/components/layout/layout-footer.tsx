import type React from 'react'
import { Link } from 'react-router'

import { cn } from '@workspace/tw-style'
import { ThemeMenu } from '@workspace/react-ui/components/layout/theme-menu'
import { GitHubIcon } from '@workspace/react-ui/components/icons/tech-icons'
import { getGitHubUrl, getTwitterUrl, type AppNavLink, type SocialMediaDto } from '@workspace/data'

export interface LayoutFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  socialMedia?: SocialMediaDto
  className?: string
}

interface FooterCapLinkProps extends Omit<AppNavLink, 'title'>, React.PropsWithChildren {}

/**
 * Application layout footer.
 */
export function LayoutFooter({ socialMedia, className, ...restProps }: LayoutFooterProps) {
  return (
    <footer className={className} {...restProps}>
      <div className={cn('border-t py-4', className)}>
        <div className="container flex flex-wrap items-center justify-between ~gap-2/4">
          <p className="text-center ~text-xs/sm text-muted-foreground w-full xs:w-fit">
            <span className="whitespace-nowrap">
              Created by <FooterCapLink href={getTwitterUrl('firxworx')}>firxworx</FooterCapLink>.{' '}
            </span>
            <span className="whitespace-nowrap">
              <FooterCapLink href="/about">Acknowledgements</FooterCapLink>.
            </span>
          </p>

          <div className="flex w-full xs:w-fit items-center justify-center ~gap-2/3">
            <FooterSocialIcons socialMedia={socialMedia} />
            <ThemeMenu iconSize="md" />
          </div>
        </div>
      </div>
    </footer>
  )
}

/**
 * Social media icon links for the footer.
 */
function FooterSocialIcons({ socialMedia }: { socialMedia?: SocialMediaDto }): JSX.Element {
  return (
    <>
      {/*
          {!!socialMedia?.twitter && (
            <Link to={getTwitterUrl(socialMedia.twitter)} target="_blank" rel="noopener noreferrer">
              <TwitterXIcon className="~size-5/6" />
            </Link>
          )}
          */}
      {!!socialMedia?.github && (
        <Link to={getGitHubUrl(socialMedia.github)} target="_blank" rel="noopener noreferrer" className="group">
          <GitHubIcon className="~size-5/6 group-hover:text-P-link-hover transition-colors" />
        </Link>
      )}
    </>
  )
}

/**
 * A link in the final "cap" row of the footer that opens in a new tab.
 */
function FooterCapLink({ href, children }: FooterCapLinkProps): JSX.Element {
  return (
    <Link
      to={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group font-medium underline underline-offset-4 text-muted-foreground hover:text-P-link-hover transition-colors"
    >
      {children}
    </Link>
  )
}

// /**
//  * Render a title followed by a list of footer links.
//  */
// function FooterLinkList({ title, links, className }: FooterLinkListProps): JSX.Element {
//   return (
//     <div key={title} className={cn('flex flex-col ~gap-2/4', className)}>
//       <span className="~text-base/lg font-medium text-foreground">{title}</span>
//       <ul className="flex flex-col ~gap-0.5/1 list-inside">
//         {links?.map((link) => (
//           <li key={link.title}>
//             <Link to={link.href} className="block ~py-1/2 text-sm text-muted-foreground hover:text-primary">
//               {link.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }
