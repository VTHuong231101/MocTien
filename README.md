# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Commit rules
All commits must follow the following structure: `type(scope?): subject`

## Type:
- `build`: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)

- `ci`: Changes to our CI configuration files and scripts (example scopes: Gitlab CI, Circle, BrowserStack, SauceLabs)

- `chore`: add something without touching production code (Eg: update npm dependencies)

- `docs`: Documentation only changes

- `feat`: A new feature

- `fix`: A bug fix

- `perf`: A code change that improves performance

- `refactor`: A code change that neither fixes a bug nor adds a feature

- `revert`: Reverts a previous commit

- `style`: Changes that do not affect the meaning of the code (Eg: adding white-space, formatting, missing semi-colons, etc)

- `test`: Adding missing tests or correcting existing tests