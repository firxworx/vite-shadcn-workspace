# @workspace/react-layout

Package with React components for application layouts.

This is a pure TypeScript package with no build/bundle configuration.

Peer dependencies include:

- `react-router-dom` for router-specific `NavLink` + `Link` components
- `react-error-boundary` for implementing error boundaries and fallbacks

Refer to `package.json` for complete list of dependencies.

Downstream projects powered by Vite should use a TypeScript path alias resolution plugin such as `vite-tsconfig-paths` or manually map the directory paths in their `vite.config.ts`.

## Using this Package

### Add Dependency

To use this package in an application add it to `dependencies` in `package.json` using pnpm's workspace protocol:

```json
    "@workspace/react-layout": "workspace:*",
```

### TailwindCSS Configuration

Apps in this workspace that use this package must ensure its source files are referenced in their TaiwindCSS configuration so that its styles are included in the final build.

`tailwind.config.ts`:

```js
content: [
  // ...
  './packages/react-layout/src/**/*.{ts,tsx}',
  // ...
]
```
