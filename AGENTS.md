## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Architecture & Code Conventions

- **Path Aliases:** Always use TypeScript path aliases instead of relative `../` imports:
  - `@components/*` -> `src/components/*` (subdivided into `common/`, `home/`, `icons/`, `icons/social/`)
  - `@layouts/*` -> `src/layouts/*` (prefer `BaseLayout.astro`)
  - `@assets/*` -> `src/assets/*` (`brand/`, `home/`, `destinos/`, `team/`)
  - `@data/*` -> `src/data/*`
  - `@styles/*` -> `src/styles/*`
- **Naming Conventions:** Use PascalCase for all Astro components and icons (`ArrowRight.astro`, `BaseLayout.astro`).
- **Navigation & Dropdowns:** Configure all header links and dropdown menus in `@data/Nav.ts` via the `dropdown` array on `NavItem`. `NavItem.astro` handles the floating glassmorphic popover on desktop and the indented list on mobile.
- **Global Components & Transitions:** Use `transition:persist` for persistent client elements across page loads (such as `@components/common/Cursor.astro`) inside `BaseLayout.astro`.
- **Commits:** Keep commits atomic, clean, and follow Conventional Commits (`feat:`, `fix:`, `refactor:`, `docs:`, etc.).

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
