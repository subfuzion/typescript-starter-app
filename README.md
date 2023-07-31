# create-typescript-app

A starter app with configurations for

* [TypeScript](https://typescriptlang.org/)
* [Jest](https://jestjs.io/)
* Linting and formatting
  * [EditorConfig](https://editorconfig.org/)
  * [ESLint](https://eslint.org/)
  * [Prettier](https://prettier.io/)
* Package run-scripts:
  * `prepare` - configures a  git `commit` hook (using [Husky](https://typicode.github.io/husky/)) for linting
  * `compile` - transpile the app to the `build` directory
  * `clean` - remove the `build` directory
  * `lint` and `fix` - find and fix lint issues
  * `test` - using [Jest](https://jestjs.io/)

The linting and formatting tools have been configured to  work together:

* `.editorconfig` has settings that feed into Prettier
* `.eslintrc.json` uses Prettier for formatting

## License

Licensed under [MIT](./LICENSE).
