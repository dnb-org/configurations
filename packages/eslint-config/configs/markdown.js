import markdown from "@eslint/markdown";

export default {
  name: 'dnb/markdown',
  files: ["**/*.md"],
  plugins: {
    markdown
  },
  rules: {
    "markdown/no-html": "error"
  }
}
