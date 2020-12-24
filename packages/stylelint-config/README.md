[![Codacy Badge](https://app.codacy.com/project/badge/Grade/52734e6cba244cf7b6286854b90f2a10)](https://www.codacy.com/gh/dnb-hugo/stylelint-config-dnb/dashboard)

# stylelint-config-dnb
Stylelint configuration used for all DNB projects

Based on [stylelint-config-twbs-bootstrap](https://github.com/twbs/stylelint-config-twbs-bootstrap/).

## Installation

```bash
npm install dnb-hugo/stylelint-config-dnb#v1.1.12 --save-dev # or
npm install dnb-hugo/stylelint-config-dnb --save-dev
```

## Usage

Add the configuration to your repository (for instance in `.stylelintrc`):

```json
{
  "extends": "stylelint-config-dnb"
}
```

Add scripts to your package.json:

```json
{
  "scripts": {
    "stylelint": "stylelint assets/scss/",
    "stylelint-fix": "stylelint assets/scss/ --fix"
  }
}
```

Exchange the `assets/scss/` with your own styles folder.

Run stylelint:

```shell
npm run stylelint
npm run stylelint-fix
```
