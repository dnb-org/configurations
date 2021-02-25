[![Codacy Badge](https://app.codacy.com/project/badge/Grade/52734e6cba244cf7b6286854b90f2a10)](https://www.codacy.com/gh/dnb-hugo/stylelint-config/dashboard)

## dnb-hugo / stylelint-config

Stylelint configuration used for all dnb-hugo projects.

### Installation

```bash
npm install @dnb-hugo/stylelint-config --save-dev
```

### Configuration

Add the configuration to your repository (for instance in `.stylelintrc` or `.stylelintrc.json`):

```json
{
  "extends": "@dnb-hugo/stylelint-config"
}
```

Add scripts to your package.json:

```json
{
  "scripts": {
    "stylelint": "stylelint assets/scss/",
    "stylelint-fix": "stylelint assets/scss/ --fix",
    "stylelint-config": "stylelint --print-config index.js"
  }
}
```

Exchange the `assets/scss/` with your own styles folder.

### Usage

Run stylelint and show errors and warnings:

```shell
npm run stylelint
```

Run stylelint and fix automatically fixable issues:

```shell
npm run stylelint-fix
```

Print the current stylelint configuration:

```shell
npm run stylelint-config
```

### Development

- Github Repository: https://www.npmjs.com/package/@dnb-hugo/stylelint-config
- NPM Package: https://www.npmjs.com/package/@dnb-hugo/stylelint-config
