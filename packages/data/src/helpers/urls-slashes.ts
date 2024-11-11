import { trailingSlash } from './slashes'

export interface SplitUrlParts {
  protocol?: string
  fqdn?: string
  service?: string
  subdomain?: string
  domain?: string
  port?: string
  path?: string
  query?: string
  hash?: string
}

/**
 * Half-decent regex to capture the different parts of a URL.
 * Capture groups: protocol (optional), fqdn, service, subdomain, domain, port, path, query, hash.
 *
 * This regex is for simple cases and does not handle the large number of nuances and corner-cases with URLS.
 * Please use a specialized library for complex cases.
 *
 * This function will NOT match `localhost` but will match IP addresses.
 *
 * Construct a URL with the following parts:
 * `${protocol}${fqdn}${port ? `:${port}` : ''}${path}${query ? `?${query}` : ''}${hash ? `#${hash}` : ''}`
 *
 * @see https://stackoverflow.com/a/75664821/9171738 for source (original modified to make protocol optional)
 */
export const URL_CAPTURE_REGEX =
  /^(?<protocol>https?:\/\/)?(?=(?<fqdn>[^:/]+))(?:(?<service>www|ww\d|cdn|ftp|mail|pop\d?|ns\d?|git)\.)?(?:(?<subdomain>[^:/]+)\.)*(?<domain>[^:/]+\.[a-z0-9]+)(?::(?<port>\d+))?(?<path>\/[^?]*)?(?:\?(?<query>[^#]*))?(?:#(?<hash>.*))?/i

// { protocol: string | undefined, fqdn, service, subdomain, domain, port, path, query, hash.}
export function splitUrl(url: string): SplitUrlParts | undefined {
  return url.match(URL_CAPTURE_REGEX)?.groups ?? undefined
}

/**
 * Apply a _trailing slash rule_ (tsr) that _enforces_ a trailing slash on a URL pathname or relative string URL pathname.
 *
 * This helper assists with reliably constructing URL's and can help ensure consistent canonical URL's for SEO.
 */
export function tsr(input: string): string
export function tsr(input: URL): URL
export function tsr(input: URL | string): URL | string {
  if (input instanceof URL) {
    const newUrl = new URL(input)
    newUrl.pathname = trailingSlash(newUrl.pathname)
    return newUrl
  }

  // slash rule is moot for links that are strictly hash "jump links"
  if (input.startsWith('#')) {
    return input
  }

  // the regex behind this will not match `localhost` but will match IP addresses
  const { protocol, fqdn, port } = splitUrl(input) ?? {}

  // URL constructor effectively handles edge cases with query strings, hash, and others (will throw TypeError on fail)
  if (!protocol && !fqdn && !port && !input.includes('localhost')) {
    const url = new URL(input, 'https://example.com')
    return `${trailingSlash(url.pathname)}${url.search}${url.hash}`
  }

  // attempt to parse with URL (this will throw TypeError on fail)
  const url = new URL(input)
  url.pathname = trailingSlash(url.pathname)
  return url.href
}
