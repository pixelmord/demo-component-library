# Component Library Demo

This is a demo example for a component library.

The roadmap and acceptance criteria for the component example `DataTable` can be found in [this issue](https://github.com/pixelmord/demo-component-library/issues/1)

A preview of the demo app can be found here: [DEMO](https://demo-component-library.vercel.app/).
A Storybook of the components can be found here: [Storybook](https://demo-component-library-docs.vercel.app/).

## What's inside?

This [Turborepo](https://turbo.build) includes the following packages/apps:

### Apps and Packages

- `demo`: a [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/) that consumes `packages/data-table` and showcases uses of the table components

- `data-table`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/) that implements components for a data table
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tailwind-config`: a [Tailwind CSS](https://tailwindcss.com/) configuration that is shared by all packages/apps
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Building packages/data-table

This example is setup to build `packages/data-table` and output the transpiled source and compiled styles to `dist/`. This was chosen to make sharing one `tailwind.config.js` as easy as possible, and to ensure only the CSS that is used by the current application and its dependencies is generated.

Another option is to consume `packages/data-table` directly from source without building. If using this option, you will need to update your `tailwind.config.js` to be aware of your package locations, so it can find all usages of the `tailwindcss` class names.

For example, in [tailwind.config.js](packages/tailwind-config/tailwind.config.js):

```js
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
```

### Utilities

This Turborepo has some additional tools already setup for you:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
