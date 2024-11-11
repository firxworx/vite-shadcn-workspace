/**
 * Given a Twitter handle, return the URL to its corresponding Twitter profile.
 */
export function getTwitterUrl(handle: string): string {
  return `https://twitter.com/${handle}`
}

/**
 * Given a GitHub handle and an optional repo name, return the URL to the GitHub profile or repo.
 */
export function getGitHubUrl(handle: string, repo?: string): string {
  return typeof repo === 'string' && !!repo ? `https://github.com/${handle}/${repo}` : `https://github.com/${handle}`
}
