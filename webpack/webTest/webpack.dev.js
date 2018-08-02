process.env.NODE_ENV = 'development' //传入webpack文件夹内 同cross-env NODE_ENV=production一样
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const path = require('path')
const webpack = require('webpack')
module.exports = merge(common, {
  entry: './src/app.js',
  output: {
    
    path:path.resolve(__dirname + '/dist'),
    // filename: 'static/js/app.bundle.js' //路径写死,可以热更新
   // filename: 'static/js/[name].[chunkhash].js' //动态路径，,可以热更新
   filename: '[name].js',//模块热替换
   //publicPath: "/bbb",
   
  },
   //使用devServer,启动项目，打包地址在内存里面，不在打包在本地。并启动热更新
  devServer: {
    host:'0.0.0.0',//指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问，指定如下：
    port: 9000,
    open: true, //自动打开浏览器。
    hot: true  //启动模块热替换。
  },
  plugins:[
  //传入页面,同webpack-p一样
  /* new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),*/
   // 这两行是新增的，模块热替换
  /*dev特有*/
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin()
  ],
  module: {
      rules: [
          {
           test: /\.css$/,
           use: [ 'style-loader', 'css-loader' ]
         }
      ]
   }
  // devtool: 'inline-source-map',
});