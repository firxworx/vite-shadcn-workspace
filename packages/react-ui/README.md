# @workspace/react-ui

This package ("project") is home to shared React UI components, hooks, variants, and related utilities used by projects in this workspace.

The workspace-level `shadcn` script target defined in the root `package.json` is configured to execute [shadcn/ui cli](https://ui.shadcn.com/docs/cli) and manage the components in this package.

The workspace-level `postshadcn` script will run immediately after its `shadcn` counterpart to run biome to line and format the generated files followed by `fix-shadcn-import-paths.sh` to fix the paths of [node subpath imports](https://nodejs.org/api/packages.html#subpath-imports) which the shadcn CLI will break.

## Purpose of this Package

This package serves as the "base" internal UI package for any other React apps and internal packages to use.

The `exports` defined in `package.json` are TypeScript files to be built/bundled by downstream consumers.

This package includes a `build` script target and features a Vite configuration to bundle it in _library mode_.

The build step is currently for development and debugging purposes only: it is a good practice to ensure that this package can build without errors.

The working build configuration can also serve as a jump start for creating a publishable design system and/or component library in the future if/as required. By publishing this package to a registry it can be used in projects outside of this workspace.

## shadcn/ui CLI

Run shadcn cli by executing the following command from the _workspace root_ directory:

```sh
pnpm shadcn <command> [options] [args]
```

For example:

```sh
pnpm shadcn add button
```

Substitute the `pnpm shadcn <command>` command for any examples in shadcn's docs that follow the pattern `npx shadcn@latest <command> ...`.

The [biomejs](https://biomejs.dev/) lint/formatter is configured to run in write/fix mode after running a `shadcn` command.

Many shadcn/ui components have minor issues that will be detected by the lint rules. Most of these will be automatically fixed by biome however some issues will require manual intervention to resolve.

- Always inspect the console output after running a `shadcn` command for warnings and errors.
- Always inspect the newly generated files to ensure they do not have issues and confirm that the imports are correct.

There are minor bugs in some shadcn/ui component templates where preferences in `components.json` are not respected.

> Example: Vite projects do not require `use client` directives like NextJS and will produce console warnings on build if they are present. The `rsc: false` directive in `components.json` is supposed to disable them from being added however it is inconsistent.

In many cases you will further customize shadcn/ui components after they are generated.

Customizing components is a safe practice and is encouraged by shadcn. The CLI will always prompt for confirmation before overwriting any individual file. Any mistakes can always be easily fixed by reverting the changes using `git`.

### Maintaining `style.css` 

If you add a new shadcn/ui component and it changes to `src/style.css` file you may need to incorporate those changes into the workspace tailwind preset at `@workspace/tw-preset-workspace`.

Workspace projects such as `apps/client` are configured use the preset instead of referencing `style.css` from this package.

### Maintaining Components with `variants`

Many shadcn/ui components use `class-variance-authority` to define and apply _variants_ (style variations).

These components may export a `variants` object (or you may want to export the variants in cases where they are not exported).

This export pattern is an issue for different toolchains that support hot reloading in development: component files should _only_ export components and not variables or functions.

To export a component's variants, create a file under the `variants` directory that's named after the component and export its `variants` object from there. Then revise your component to import its variants from that file.

Refer to the `button` component and variants for an example.

Note how shared `button` variants are then used in the `link-button` component. This is a handy non-shadcn component that renders links with similar styling and functionality to buttons.

## Path Aliases & Subpath Imports

The hash specifier `#` used as an import alias within this package is a requirement of [node subpath imports](https://nodejs.org/api/packages.html#subpath-imports) now supported in TypeScript v5.4+.

A redundant TypeScript `paths` defition exists in `tsconfig.json` as a temporary measure to support tooling that lags behind in support for subpath imports.

Refer to [docs/node-subpath-imports-and-aliases.md](../../docs/node-subpath-imports-and-aliases.md) for details.

## Package Structure

Refer to `components.json` for the paths that shadcn cli will output files to.

shadcn cli also generates files in `src/app` for complex blocks like `sidebar-01`; there is no configuration option for this. It uses this path for components related to application pages or layouts.

The `exports` entry in `package.json` define several opinionated paths that you can customize to suit your needs.

## Technical Documentation

The workspace `shadcn` command is defined in the root `package.json` file. It is configured to use `pnpm` and to install components into this `@workspace/react-ui` package per the local `components.json` shadcn cli config file.

The workspace command calls `shadcn` script target in this project's `package.json` file and passes along any arguments and options.

The workspace command automatically executes the [biomejs](https://biomejs.dev/) lint/formatter in write/fix mode after each command.

Biome is configured at the workspace vs. package level because biome does not yet have full support for package-level configuration in a monorepo. The approach in this workspace follows the monorepo practices recommended in biome's official documentation.

Workspace level lint configuration can be more efficient and it is easier to maintain consistency vs. multiple package-level configurations.

## References

- [shadcn/ui](https://ui.shadcn.com/docs)
- [shadcn/ui CLI](https://ui.shadcn.com/docs/cli)
- [shadcn/ui components.json](https://ui.shadcn.com/docs/components-json)
