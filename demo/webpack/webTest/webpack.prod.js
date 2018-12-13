 process.env.NODE_ENV = 'production' //传入webpack文件夹内，同cross-env NODE_ENV=production一样
const merge = require('webpack-merge')
const common = require('./webpack.base.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// const bootstrapEntryPoints = require('./webpack.bootstrap.config')
const webpack = require('webpack')
const path = require('path')

module.exports = merge(common, {
  entry: './src/app.js',
   output: {
    path:path.resolve(__dirname + '/dist'),
   filename: 'static/js/[name].[chunkhash].js'//模块热替换.打包js相对index.html的引入口
  },
  plugins: [
   //清除文件，每次打包就会清除dist文件里面的文件
  new CleanWebpackPlugin( 
          ['dist/*'],　 //匹配删除的文件
           /* {
                root: __dirname,       　　　　　　　　　　//根目录
                verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
                dry:      false        　　　　　　　　　　//启用删除文件
            }*/
        ),
    /*build特有*/
   new ExtractTextPlugin({
      filename: 'static/css/[name].[chunkhash].css',//打包css相对index.html的引入口
      disable: false
    }),
   //传入页面，同webpack-p一样
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // })
  ],
   module: {
      rules: [
          {
           test: /\.css$/,
           use: ExtractTextPlugin.extract({
             fallback: "style-loader",
             use: "css-loader"
           })
         },
      ]
   }
});