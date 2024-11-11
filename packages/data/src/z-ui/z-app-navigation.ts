import { z } from 'zod'

export interface AppNavLink extends z.infer<typeof zAppNavLink> {}
export interface AppNavLinkGroup extends z.infer<typeof zAppNavLinkGroup> {}

/**
 * Schema of an AppNavLink that includes a title and href.
 */
export const zAppNavLink = z.object({
  title: z.string(),
  href: z.string(),
})

/**
 * Schema of an AppNavLink that includes an icon as pathname or URL.
 */
export const zAppIconNavLink = zAppNavLink.extend({
  icon: z.string(),
})

/**
 * Schema for a group of AppNavLink's that are displayed together in a navigation menu.
 */
export const zAppNavLinkGroup = z.object({
  title: z.string(),
  links: z.array(zAppNavLink),
})
