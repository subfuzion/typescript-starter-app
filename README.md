# create-typescript-app

A starter Node.js app configured for TypeScript.

Configuration boilerplate includes:

- [TypeScript](https://typescriptlang.org/)
- [Jest](https://jestjs.io/)
- Linting and formatting
  - [EditorConfig](https://editorconfig.org/)
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)

The linting and formatting tools have been configured to work together:

- `.editorconfig` has format settings that feed into Prettier
- `.eslintrc.json` uses Prettier for formatting

## Development

There are a number of package scripts. Most of the time during development,
you probably want to run: `npm run dev` or `npm run dev:notify`.

Package scripts:

- `prepare`  
  Configure a git `commit` hook (using [Husky](https://typicode.github.io/husky/))
  for linting. If you used
  [create-typescript-app](https://github.com/subfuzion/create-typescript-app),
  then this has already been run for you.

- `compile`  
  `compile:watch`  
  Transpile the app to the `build` directory.

- `clean`  
  Remove the `build` directory

- `lint`  
  `lint:fix`  
  Report and fix lint issues.  
  When committing staged files, Husky is configured (in `./husky/pre-commit`) to
  run [lint-staged](https://github.com/okonet/lint-staged), which gets its
  configuration from under `"lint-staged"` in `package.json`.

- `test`  
  `test:watch`  
  Run tests with [Jest](https://jestjs.io/).

- `dev`  
  `dev:notify`  
  Run both `compile:watch` and `test:watch` concurrently, optionally using the
  system notifier (usually a banner) to alert you of test results.

> **Warning**
>
> You may occasionally see an warning in the terminal with Jest output when
> using `dev:notify` that starts with the following:
>
> _A worker process has failed to exit gracefully and has been force exited._
>
> When this happens, press `Ctrl-C` and try running `dev:notify` again.

## License

Licensed under [MIT](./LICENSE).
