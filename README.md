# Overview

This is a starter Node.js app configured for TypeScript. The app is generated
using [@subfuzion/create-typescript-app].

Configuration boilerplate includes:

-   [TypeScript]
-   [Jest]
-   Linting and formatting
    -   [EditorConfig]
    -   [ESLint]
    -   [Prettier]

The linting and formatting tools have been configured to work together:

-   `.editorconfig` has format settings that feed into Prettier
-   `.eslintrc.json` uses Prettier for formatting

## Development

There are a number of package scripts. Most of the time during development,
you probably want to run: `npm run dev` or `npm run dev:notify`.

Package scripts:

-   `prepare`  
    Configure a git `commit` hook (using [Husky])
    for linting. You need to run this if you cloned this repo instead of
    generating the app using [@subfuzion/create-typescript-app].

-   `clean`  
    Remove the `build` directory

-   `build` | `build:watch`  
    Compile the app to the `build` directory.

> **NOTE**
>
> The `build` directory is ignored by `.gitignore`. Depending on your workflow,
> you might want to remove it to commit your compiled output.

-   `test` | `test:watch`  
    Run tests with [Jest].

-   `lint` | `lint:fix`  
    Report and fix lint issues.  
    When committing staged files, Husky is configured (in `./husky/pre-commit`) to
    run [lint-staged], which gets its configuration from under `"lint-staged"` in
    `package.json`.

-   `dev` | `dev:notify`  
    Run both `build:watch` and `test:watch` concurrently, optionally using the
    system notifier (usually a banner) to alert you of test results.

> **Warning**
>
> When using `dev:notify`, you may occasionally see an warning in the terminal
> Jest output that starts with the following:
>
> _A worker process has failed to exit gracefully and has been force exited._
>
> You can ignore it (it might go away on a subsequent test run) or you can
> press `Ctrl-C` and try running `dev:notify` again.

## License

Licensed under [MIT].

[@subfuzion/create-typescript-app]: https://github.com/subfuzion/create-typescript-app/
[EditorConfig]: https://editorconfig.org/
[ESLint]: https://eslint.org/
[Husky]: https://typicode.github.io/husky/
[Jest]: https://jestjs.io/
[lint-staged]: https://github.com/okonet/lint-staged/
[MIT]: ./LICENSE
[Prettier]: https://prettier.io/
[TypeScript]: https://typescriptlang.org/
