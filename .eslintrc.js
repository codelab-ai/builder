module.exports = {
  extends: 'dist/libs/eslint-config-codelab',
  parserOptions: {
    tsconfigRootDir: '.',
    project: ['tsconfig.eslint.json'],
  },
}
