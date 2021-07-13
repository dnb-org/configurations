## Usage

Create `postcss.config.js` with the following content:

```js
const config = require("@dnb-org/postcss-config");
module.exports = config;
```

## [Hugo](https://gohugo.io) Notes

Hugo is weird, but great. To get PostCSS to work with Hugo the `postcss-cli` packages needs to be installed in the 
repo itself and is not handed through this configuration. Run the following to get PostCSS going on Hugo:

```shell
npm install -D postcss-cli
```

A global `postcss-cli` installation won't work if the plugins in this package are not installed globally as well. 
It's a all-or-nothing situation. 
