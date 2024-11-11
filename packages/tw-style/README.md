# @workspace/tw-style

This package is home to the `cn()` utility for intelligently merging tailwindcss utility class names.

The utility is powered by customized/extended `tailwind-merge`.

This package also exports a custom implementation of `clsx()` for dumb but more performant merging of class names. 

The `cn()` function is extended to recognize and merge custom class names corresponding to custom tailwindcss variants
and utilities added by any presets or plugins.

Build this project and restart any dev servers after making changes. To build this project from workspace root:

```sh
pnpm --filter @workspace/tw-style build
```

## Installation

Install this package in your project:

```sh
pnpm add @workspace/tw-style
```

The `cn()` function is designed for compatibility with the workspace preset: `@workspace/tw-preset-workspace`.

This package's key dependencies are `tailwind-merge` and `@fluid-tailwind/tailwind-merge`.

## Usage

This package exports both `cn()` and `clsx()`.

### Merge css class names with `cn()`

```ts
import { cn } from '@workspace/tw-style'

const className = cn('text-primary-500', 'bg-primary-100', 'hover:bg-primary-200')
```

The `cn()` function supports the same input formats as `clsx()`.

Refer to the clsx docs for more details: https://www.npmjs.com/package/clsx
