module.exports = {
  extends: ["airbnb-base", "prettier", "plugin:compat/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
  env: {
    browser: true,
  },
};
