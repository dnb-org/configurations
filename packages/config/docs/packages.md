- [Bootstrap](#bootstrap)
- [Markdownlint](#markdownlint)
- [ESLint](#eslint)
- [Browserslist](#browserslist)

# Bootstrap

Adds requirements for packages used by Bootstrap

- [@popperjs/core](https://www.npmjs.com/package/@popperjs/core) - Tooltip & Popover Positioning Engine
- [bootstrap](https://www.npmjs.com/package/bootstrap) - Sleek, intuitive, and powerful front-end framework for faster and easier web development.
- @types/bootstrap - Typescript types for Bootstrap

# Markdownlint

Adds a configuration file for Markdownlint.
Currently does not add markdownlint itself as package. Install it in VSCode as plugin.

Local configuration in `.markdownlint.json`:

```json
{
    "extends": "node_modules/@davidsneighbour/config/.markdownlint.json"
}
```

Add local overrides:

```json
{
  "extends": "node_modules/@davidsneighbour/config/.markdownlint.json",
  "MD040": false
}
```

# ESLint

This adds [@davidsneighbour/eslint-config](https://github.com/davidsneighbour/configurations/tree/main/packages/eslint-config) as requirement and makes it's configuration available. Read the [package documentation of @davidsneighbour/eslint-config](https://github.com/davidsneighbour/configurations/tree/main/packages/eslint-config).

# Browserslist

This adds [@davidsneighbour/browserslist-config](https://github.com/davidsneighbour/configurations/tree/main/packages/browserslist-config) as requirement and makes it's configuration available. Read the [package documentation of @davidsneighbour/browserslist-config](https://github.com/davidsneighbour/configurations/tree/main/packages/browserslist-config).
