import markdown from '@eslint/markdown';

export default {
  name: 'dnb/markdown',
  files: ['**/*.md'],
  plugins: {
    markdown,
  },
  language: 'markdown/commonmark',
  rules: {
    'markdown/no-html': 'error',
  },
};
