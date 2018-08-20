const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
// const path = require('path')
// 
console.log("process.env.NODE_ENV 的值是(webpack.config.js)："+ process.env.NODE_ENV)
module.exports = {
  // entry: './src/app.js',
  devtool: 'source-map',//准确找到未打包文件的报错位置
  // output: {
  //   path:path.resolve(__dirname + '/dist'),
  //  filename: 'static/js/[name].[chunkhash].js'//模块热替换
  // },
  plugins: [
  //动态生成indexer.html文件
  new HtmlWebpackPlugin({
     template: './src/index.html',//有时候我们要让 index.html 根据我们的意愿来生成。就是说它的内容是我们自己定的。
     filename: 'index.html',//默认情况下生成的 html 文件叫 index.html，但有时候你不想叫这个名字，可以改。
     title: "hello world", 
     // minify: {
       //     removeComments: true,//删除注释
        //     collapseWhitespace:true//删除空格

    // },
    hash: process.env.NODE_ENV === 'production',//开发不需要带hash。build的时候，生产包需要
    //chunks: ['contact'],//多index.html文件
  }),
  ],
   module: {
    rules: [
     
      /*
       file-loader与html-loader处理图片资源，单独打包出来
      */
     // {
     //    test: /\.(gif|png|jpe?g|svg)$/i,
     //    use: [
     //      {
     //        loader: 'file-loader',
     //        options: {
     //               name: '[name].[ext]',//[name] 代表文件名，[ext] 代表文件扩展名，outputPath 是输出的路径。不是默认根目录
     //               outputPath: 'images/',
     //               publicPath:'/images'//图片引用地址，以css文件夹为基础的相对路径,有默认值.
     //                }
     //      }
     //    ]
     //  },
      /*
       file-loader与html-loader处理图片资源
      */
      // {//依赖file-loader
      //   test: /\.html$/,
      //   use: [ {
      //     loader: 'html-loader',
      //     options: {//引用地址是以index。文件夹为基础的相对路径,有默认值.
      //       minimize: true
      //     }
      //   }]
      // },
     /*
       url-loader处理图片资源，打包到引用的文件里
      */
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
                   name: '[name].[ext]',//[name] 代表文件名，[ext] 代表文件扩展名，outputPath 是输出的路径。不是默认根目录
                   outputPath: 'images/',//无效
                   // publicPath: '../images'//无效
                    }
          }
        ]
      }
      
    ]
  }
};