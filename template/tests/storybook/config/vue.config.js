const vueConfig = require('../../../vue.config.js')
const res = (...args) => require('path').resolve(__dirname, ...args)

module.exports = {
  ...vueConfig,
  baseUrl:
    process.env.NODE_ENV === 'production' ? vueConfig.baseUrl + 'storybook/' : vueConfig.baseUrl,
  outputDir: 'dist/storybook',
  devServer: {
    ...vueConfig.devServer,
    port: 4401,
  },
  pages: {
    manager: {
      entry: res('addons.js'),
      template: res('manager.ejs'),
      filename: 'index.html',
    },
    iframe: {
      entry: res('config.js'),
      template: res('iframe.ejs'),
      filename: 'iframe.html',
    },
  },
  runtimeCompiler: true,
  chainWebpack: webpackConfig => {
    if (vueConfig.chainWebpack) vueConfig.chainWebpack(webpackConfig)

    webpackConfig.optimization.minimize(false)

    webpackConfig.entry('manager').add(require.resolve('@storybook/core/dist/client/manager'))
  },
}
