module.exports = options => ({
  html: {
    template: './src/index.html',
  },
  entry: './src/main.js',
  presets: [
    require('poi-preset-bundle-report')(),
    require('poi-preset-eslint')({ mode: '*' }),
    require('poi-preset-yaml')(),
    // require('poi-preset-uglifyjs')(),
  ],
})
