# @workspace/reactor-tw-shadcn

TailwindCSS [preset](https://tailwindcss.com/docs/presets) that includes theme and plugin definitions to effectively install [shadcn/ui](https://ui.shadcn.com/) as documented: https://ui.shadcn.com/docs/installation.

This preset takes care of adding the community [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) plugin required by shadcn/ui.

Build this project and restart any dev servers after making changes. To build this project from workspace root:

```sh
pnpm --filter @workspace/tw-preset-shadcn build
```

## Project Installation

Follow these steps to use this preset in an app or package (i.e. a _project_ within this _workspace_) that uses components based on shadcn/ui.

Install the `tailwindcss-animate` package as a dev dependency because it is required as a peer dependency of this package:

```sh
pnpm --filter @workspace/example add -D tailwindcss-animate
```

Install this package as a dev dependency:

```sh
pnpm add -D @workspace/tw-preset-shadcn
```

Import the preset and add it to the `presets` array in your project's taiwind config e.g. `tailwind.config.ts`:

```ts
import type { Config } from 'tailwindcss'
import { shadcnPreset } from '@workspace/tw-preset-shadcn'

const tailwindConfig = {
  // ...
  presets: [shadcnPreset],
  // ...
} satisfies Config

export default tailwindConfig
```

In case your project has multiple presets tailwindcss will intelligently merge them per the order of the `presets` array.

Conflicting values of subsequent (later) presets will override those of previous presets.

Any conflicting values defined in a `theme` of a tailwind config will in turn override those of any presets.

## Build

Refer to `tsup.config.ts` for the build configuration.

## License

MIT (c) Bitcurve Systems Inc. (Canada)

Written by Kevin Firko for Bitcurve Systems Inc.
