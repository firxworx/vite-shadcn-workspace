# @workspace/tw-preset-workspace

Tailwind workspace preset with common configuration, plugin suite, and theme / design system for packages and apps within this workspace.

Take care to register any custom tailwind components and utilities with `tailwind-merge` and the `cn()` function in `packages/tw-style` so they can be properly merged.

This package does not use TypeScript import aliases in `tsconfig.json` to support efficient live updates in Vite during development. Refer to downstream project-level `tailwind.config.ts`.

## Installation

Install this package as a dev dependency in your app or library project:

```sh
pnpm add -D @workspace/tw-preset-workspace
```

Revise `tailwind.config.ts` to import the preset and add it to the `presets` array:

```ts
import { workspacePreset } from '@workspace/tw-preset-workspace'

const tailwindConfig = {
  // ...
  presets: [workspacePreset],
  // ...
}

export default tailwindConfig
```

In case your project has multiple presets remember that tailwindcss will intelligently merge them. The order of the presets array matters:

- Conflicting values from earlier presets will be overridden by later presets.
- Any conflicting values defined in the config itself take precedence over values from presets.

When writing components use the `cn()` utility from `@workspace/tw-style` to merge class names.
