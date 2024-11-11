# @workspace/data

Package that serves as the "master" source of truth for shared interfaces, types, zod/data schemas, and related helper functions across all projects in the workspace.

This is an isomorphic (client/server) TypeScript package with no build/bundle step.

This package has minimal dependencies because it must ready for use anywhere in the workspace with zero friction and without creating circular dependencies or other issues.

Currently `zod` is the only production dependency as it is standardized for use across all projects in the workspace.

## Rules

All exports of this package must be:

- free of side-effects and respect `sideEffects: false` in `package.json` to support effective tree-shaking by bundlers
- isomorphic i.e. compatible with client-side (browser) and server-side (node etc.) runtime environments

Use safe conditional checks to select between browser/DOM vs. node API's as required.

Do not hardcode secrets or proprietary back-end logic in this package. Assume anything in this package may be exposed to the public via any client codebases that import it.
