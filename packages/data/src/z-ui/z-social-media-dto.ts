import { z } from 'zod'

export interface SocialMediaDto extends z.infer<typeof zSocialMediaDto> {}

/**
 * Schema to contain social media handles for use by projects in this workspace.
 */
export const zSocialMediaDto = z.object({
  github: z.string().optional(),
  twitter: z.string().optional(),
})
