import { z } from 'zod'
import { zSocialMediaDto } from '@workspace/data'

export interface AppConfig extends z.infer<typeof zAppConfig> {}

export const IS_CLIENT = typeof globalThis?.window !== 'undefined'
export const IS_PRODUCTION = import.meta.env.PROD
export const IS_DEVELOPMENT = import.meta.env.DEV

/**
 * Zod schema for this app's config object.
 * Do not store sensitive information in this object because it is publicly exposed to the client.
 *
 * The `locale` string must be valid BCP-47 format e.g. `en-US` or `fr-CA` although the schema only
 * validates it as `string`.
 *
 * **SEO & meta reference**
 *
 * The _recommended_ maximum lengths for fields related to SEO and meta are:
 *
 * - `title` <= 60 (at least for the most important parts to display on a search results page)
 * - `description` <= 155
 * - `keywords` < 10 comma separated keywords
 *
 * **Important reminders for working with Vite:**
 *
 * - `import.meta.env.BASE_URL` value is derived from the `base` property in `vite.config.ts`
 * - `import.meta.X` variables are "find and replace" with hardcoded values-in-place during Vite build
 * - `VITE_` prefix is required on environment variable names for Vite to expose them to browser/client environments
 * - `process.env.X` is a Node-specific convention that does not exist in browser/client environments
 *
 * `vite.config.ts` has a custom `define` to replace `process.env.NODE_ENV` with a harcoded
 * value based on the `NODE_ENV` value in play during the build process. This step enables any dependencies
 * that may rely on `process.env.NODE_ENV` to work as expected and not cause runtime errors in the browser.
 *
 * @see index.html for environment variable usage such as `%VITE_LOCALE%`
 */
export const zAppConfig = z.object({
  title: z.string().default('App'),
  locale: z.string().default('en'),
  textDirection: z.enum(['ltr', 'rtl']).default('ltr'),
  description: z.string().default(''),
  author: z.string().default(''),
  keywords: z.string().default(''),
  contacts: z.object({
    legal: z.string().min(1),
  }),

  socialMedia: zSocialMediaDto.optional(),

  // opengraph and x/twitter cards are not implemented (commented example below)
  // image: z.string().optional(),
  // ogImageHeightPx: z.coerce.number().default(630),
  // ogImageWidthPx: z.coerce.number().default(1200),

  // analytics is not implemented (commented example below)
  // analytics: z.object({
  //   gaId: z.string().optional(),
  // }),
})

/**
 * This project's config object.
 */
export const CONFIG: AppConfig = zAppConfig.parse({
  title: import.meta.env.VITE_APP_TITLE,
  locale: import.meta.env.VITE_LOCALE,
  textDirection: import.meta.env.VITE_TEXT_DIRECTION,
  description: import.meta.env.VITE_META_DESCRIPTION,
  author: import.meta.env.VITE_META_AUTHOR,
  keywords: import.meta.env.VITE_META_KEYWORDS_CSV,
  contacts: {
    legal: import.meta.env.VITE_LEGAL_CONTACT,
  },
  socialMedia: {
    github: import.meta.env.VITE_GITHUB,
    twitter: import.meta.env.VITE_TWITTER,
  },
})
