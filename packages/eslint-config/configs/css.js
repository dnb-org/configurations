import css from '@eslint/css'

export default [
  {
    files: ['**/*.css'],
    language: 'css/css',
    plugins: {
      css,
    },
    rules: {
      'css/no-empty-blocks': 'error',
    },
  },
]
