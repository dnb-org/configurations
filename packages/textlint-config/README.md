# Textlint Configuration (deprecated)

I deprecated @davidsneighbour/textlint-config due to several issues:

- [It's not possible to extend the configuration properly](https://textlint.github.io/docs/configuring.html#sharable-configuration), even with a JS based configuration the config file needs to be in the root of a project.
- Many of the used plugins lead to security review issues (`npm audit`) that can't be easily fixed without un-using the plugins in question and struggle with keeping up to API changes in textlint itself.
- Other plugins are not maintained anymore.
- Newer tools like [Vale](https://vale.sh/) or [Write Good](https://github.com/btford/write-good) are more flexible and easier to use and maintained properly.

I will keep the package on npm for now, but I will not update it anymore. It will be marked as deprecated as soon as a replacement (most probably [Vale](https://vale.sh/)) is available.

# All configurations

- [Babel](/packages/babel-config)
- [Bootstrap](/packages/bootstrap-config)
- [Browserslist](/packages/browserslist-config)
- [Commitlint](/packages/commitlint-config)
- [CssNano](/packages/cssnano-config)
- [Cypress](/packages/cypress-config)
- [ESLint](/packages/eslint-config)
- [Markdownlint](/packages/markdownlint-config)
- [PostCSS](/packages/postcss-config)
- [Prettier](/packages/prettier-config)
- [Remark Lint](/packages/remark-config)
- [Standard Version](/packages/standard-version-config)
- [Stylelint](/packages/stylelint-config)
- [Tools](/packages/tools)
- [Webpack](/packages/webpack-config)
