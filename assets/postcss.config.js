module.exports = {
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: ['**/*.html'],
      whitelist: [
        'pre',
        'code',
      ]
    },
    autoprefixer: {},
    cssnano: { preset: 'default' }
  }
};
