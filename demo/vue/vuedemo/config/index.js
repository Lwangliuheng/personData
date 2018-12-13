'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',//内存里面放静态资源的文件名
    assetsPublicPath: '/',//生产模式或开发模式下html、js等文件内部引用的公共路径以及动态创建app.js的目录
    proxyTable: {
        '/boot-pub-survey-video': {
          // target: 'http://192.168.1.69:18081',      // 志猛个人服务器
          // target: 'http://192.168.1.154:80',      // 和鹏个人服务器
          // target: 'http://192.168.1.18:8080',//元鹏
          //target: 'https://chakan.zhongchebaolian.com', // 生产
          target: 'https://survey.zhongchebaolian.com', // 测试
          changeOrigin: true,
          /*定向多个需要去掉*/
          /*定向多个需要去掉*/
          pathRewrite: {
            '^/boot-pub-survey-video/': '/boot-pub-survey-video/'
          }
        },
        '/insure_survey_web': {
          // target: 'http://lipengwei.furui.com',      // 个人服务器
          // target: 'http://liangxing.furui.com',      // 个人服务器
          // target: 'http://luhongguang.furui.com',
          // target: 'http://testmall.aiganyisheng.com', // 测试
          // target: 'https://api.accidentx.zhongchebaolian.com', // 正式
          changeOrigin: true,
          //定向多个需要去掉
          // pathRewrite: {
          //   '^/insure_survey_web': '/insure_survey_web'
          // }
        },
    },

    // Various Dev Server settings
    host: '0.0.0.0', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
