# Node Subpath Imports & Aliases

Certain projects in this workspace use [node subpath imports](https://nodejs.org/api/packages.html#subpath-imports).

The hash specifier `#` used as an import alias within these packages is a strict requirement of this type of import. Do not replace `#` with a `~` or `@` or any other character.

This format is supported in TypeScript v5.4+ and recent versions of Vite support the feature as well.

Refer to the `imports` entry in `package.json` for the subpath import configuration.

## Redundant `tsconfig.json` for IDE/tooling support

VSCode and other IDE's lag behind in offering full support for subpath imports. 

Example: [TypeScript #52460](https://github.com/microsoft/TypeScript/issues/52460) (open issue).

The shadcn/ui CLI currently does **not** support subpath imports: it only reads `components.json` and `tsconfig.json`.

To support the limitations of current-generation tooling a redundant `paths` configuration is defined in `tsconfig.json` that mirrors the `imports` configuration of `package.json`. Refer to the [TypeScript Docs on Paths](https://www.typescriptlang.org/tsconfig/#paths) for further details.

In future, the use of TypeScript path aliases in project `tsconfig.json` files should be replaced by Node subpath imports.

One of the most common causes of build/bundler issues _and_ headaches when using monorepos is due to TypeScript path aliases.

The `@workspace/tw-preset-workspace` package is a current example of where typescript path aliases are avoided to save on configuration complexity and build headaches: any app's `tailwind.config.ts` can reference the preset source and enjoy automatic refresh because Vite's dev server will watch the files. Changes are reflected quickly because no additional TS build and bundle step is required where the bundler resolves the paths.
