import type { PresetsConfig } from 'tailwindcss/types/config'
import { shadcnPreset, shadcnPresetPluginDependencies } from './preset'
import { shadcnPresetBaseStylesPlugin, shadcnPresetCssVariablesPlugin } from './plugins'

export interface ShadcnPresetFactoryOptions {
  theme?: {
    /** Flag to include theme.container definition of shadcn/ui default configuration per its installation docs. */
    container?: boolean

    /** Flag to include theme.extend.colors definitions that reference the palette global CSS variables. */
    colors?: boolean

    /** Flag to include theme.extend.borderRadius with shadcn/ui defaults in the preset's tailwind theme. */
    borderRadius?: boolean
  }
  styles?: {
    /** Flag to include base layer global CSS styles on the HTML and body per shadcn/ui installation docs. */
    baseGlobalStyles?: boolean
  }
  palette?: {
    /** Flag to include CSS variables with shadcn/ui default HSL palette value and border radius definitions. */
    cssCustomVariables?: boolean
  }
}

const defaultOptions: ShadcnPresetFactoryOptions = {
  theme: {
    container: true,
    colors: true,
    borderRadius: true,
  },
  styles: {
    baseGlobalStyles: true,
  },
  palette: {
    cssCustomVariables: true,
  },
}

/**
 * Factory function to create a custom tailwindcss preset for shadcn/ui with customized options.
 */
export function createShadcnPreset(config: ShadcnPresetFactoryOptions): PresetsConfig {
  const opts = {
    theme: { ...defaultOptions.theme, ...config.theme },
    styles: { ...defaultOptions.styles, ...config.styles },
    palette: { ...defaultOptions.palette, ...config.palette },
  }

  return {
    ...shadcnPreset,

    theme: {
      ...shadcnPreset.theme,
      container: opts.theme?.container ? shadcnPreset.theme?.container : undefined,
      extend: {
        ...shadcnPreset.theme?.extend,
        colors: opts.theme?.colors ? shadcnPreset.theme?.extend?.colors : undefined,
        borderRadius: opts.theme?.borderRadius ? shadcnPreset.theme?.extend?.borderRadius : undefined,
      },
    },

    plugins: [
      ...shadcnPresetPluginDependencies,
      opts.styles?.baseGlobalStyles ? shadcnPresetBaseStylesPlugin : undefined,
      opts.palette?.cssCustomVariables ? shadcnPresetCssVariablesPlugin : undefined,
    ].filter(Boolean),
  }
}
