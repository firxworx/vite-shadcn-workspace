# @workspace/react-layout

Package with React components related to application layout that may be used across multiple apps.

This package depends on components in `@workspace/react-ui`.

Currently configured as a pure TypeScript package to use within the workspace; refer to `exports` in `package.json`.

A Vite configuration has been added to assist with development and to support the option to publish this package in future (with additional configuration required). To run a build: 

```sh
pnpm --filter @workspace/react-layout build
```

Refer to `package.json` for all dependencies. Peer dependencies include:

- `react-router-dom` for router-specific `NavLink` + `Link` components
- `react-error-boundary` for implementing error boundaries and fallbacks

Downstream projects powered by Vite can use a TypeScript path alias resolution plugin such as `vite-tsconfig-paths` or manually map the directory paths in their `vite.config.ts`.

## Path Aliases & Subpath Imports

The hash specifier `#` used as an import alias within this package is a requirement of [node subpath imports](https://nodejs.org/api/packages.html#subpath-imports) now supported in TypeScript v5.4+.

A redundant TypeScript `paths` defition exists in `tsconfig.json` as a temporary measure to support tooling that lags behind in support for subpath imports.

Refer to [docs/node-subpath-imports-and-aliases.md](../../docs/node-subpath-imports-and-aliases.md) for details.

## Using this Package

### Add Dependency

To use this package in an application add it to `dependencies` in `package.json` using pnpm's workspace protocol:

```json
    "@workspace/react-layout": "workspace:*",
```

Review `package.json` and ensure that the app satisfies the peer dependency requirements of this package.

### TailwindCSS Configuration

Any apps that use this package must ensure its source files are referenced in their TaiwindCSS configuration so that its styles are included in the final build.

`tailwind.config.ts`:

```js
content: [
  // ...
  './packages/react-layout/src/**/*.{ts,tsx}',
  // ...
]
```
