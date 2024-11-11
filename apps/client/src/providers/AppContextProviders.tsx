import type React from 'react'
import { HelmetProvider } from 'react-helmet-async'

import { Toaster } from '@workspace/react-ui/components/ui/toaster'
import { ThemeContextProvider } from '@workspace/react-ui/components/layout/theme-context-provider'

export interface AppContextProvidersProps extends React.PropsWithChildren {}

/**
 * React context providers to serve as high-level parents of this app's component tree.
 */
export function AppContextProviders({ children }: AppContextProvidersProps): JSX.Element {
  return (
    <ThemeContextProvider>
      <HelmetProvider>{children}</HelmetProvider>
      <Toaster />
    </ThemeContextProvider>
  )
}
