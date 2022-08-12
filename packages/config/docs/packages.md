# Packages and their use

## Bootstrap

Adds requirements for packages used by Bootstrap

- [@popperjs/core](https://www.npmjs.com/package/@popperjs/core) - Tooltip & Popover Positioning Engine
- [bootstrap](https://www.npmjs.com/package/bootstrap) - Sleek, intuitive, and powerful front-end framework for faster and easier web development.
- @types/bootstrap - Typescript types for Bootstrap

## Markdownlint 

Adds a configuration file for Markdownlint. 
Currently does not add markdownlint itself as package. Install it in VSCode as plugin.

Local configuration:

```json
{
    "extends": "node_modules/@davidsneighbour/config/.markdownlint.json"
}
```

Add changes like:

```json
{
  "extends": "node_modules/@davidsneighbour/config/.markdownlint.json",
  "MD040": false
}
```
