const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack');
//区分生产和开发环境
let isProd = process.env.NODE_ENV === 'production'; // true or false
/*环境变量 process.env.NODE_ENV 之webpack应用
https://blog.csdn.net/z69183787/article/details/54138818
https://blog.csdn.net/icewfz/article/details/76640319*/
console.log("isProd 的值是："+isProd)
console.log("process.env.NODE_ENV 的值是(webpack.config.js)："+ process.env.NODE_ENV)
var cssDev = [ 'style-loader', 'css-loader' ];
var cssProd = ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: "css-loader"
})
var cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: './src/app.js',
  devtool: 'source-map',//准确找到未打包文件的报错位置
  output: {
    path:path.resolve(__dirname + '/dist'),
    // filename: 'static/js/app.bundle.js' //路径写死,可以热更新
   // filename: 'static/js/[name].[chunkhash].js' //动态路径，,可以热更新
   filename: 'static/js/[name].[hash].js',//模块热替换.//打包js的打包位置，如果没有配置publicPath时，也是index.html的引入口。
   //publicPath:'/kz' //全局作用。对js，css，img引用都起作用。index.html的引入口 = publicPath + filename;//访问路径需要加上/kz,也改变index.html里面资源的引入路径。
  },
  //使用devServer,启动项目，打包地址在内存里面，不在打包在本地。并启动热更新
  devServer: {
    // contentBase: path.join(__dirname, "/"),//将使用当前工作目录作为提供内容的目录，但是你可以修改为其他目录.
    //publicPath:"/kz",//访问路径需要加上/kz,不改变index.html里面资源的引入路径。与output.publicPath要保持一致
    port: 9007,
    open: true, //自动打开浏览器。
    hot: true  //启动模块热替换。不能用webpack-dev-server --hot （--hot） 不能加
  },
  plugins: [
  //动态生成indexer.html文件
  new HtmlWebpackPlugin({
  	 template: './src/index.html',//有时候我们要让 index.html 根据我们的意愿来生成。就是说它的内容是我们自己定的。
  	 filename: 'index.html',//默认情况下生成的 html 文件叫 index.html，但有时候你不想叫这个名字，可以改。
  	 title: "hello world", 
  	 minify: {
         removeComments: true,//删除注释
         collapseWhitespace:true//删除空格
    },
    hash: true,//为了更好的 cache，可以在文件名后加个 hash。
  }),
  //单独打包css
  // new ExtractTextPlugin('static/css/style.css'),//路径写死,可以热更新
  //new ExtractTextPlugin('static/css/[name].[chunkhash].css'),//动态路径，可以热更新
  //new ExtractTextPlugin('static/css/[name].[hash].css'),//模块热替换 ，但页面不会刷新需要下一步的改变
  new ExtractTextPlugin({      //模块热替换 ，但页面会刷新。在用 模块热替换的时候要先把它关闭一下。用一个参数 disable: true 就可以关闭掉。
		  filename: 'static/css/[name].[hash].css',//打包css相对index.html的引入口，也是打包位置。不使用插件打包到js里面。
		  disable: !isProd
    }),
  //清除文件，每次打包就会清除dist文件里面的文件
  new CleanWebpackPlugin( 
          ['dist/*'],　 //匹配删除的文件
           /* {
                root: __dirname,       　　　　　　　　　　//根目录
                verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
                dry:      false        　　　　　　　　　　//启用删除文件
            }*/
            ),
  // 这两行是新增的，模块热替换
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin()
  ],
   module: {
    rules: [
      /*
       css普通解析方式，解析到js里
       */
      {
        test: /\.css$/,
        use: cssConfig
      },
      /*
       css单独打包到一个文件夹解析方式
       */
      //  {
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: "style-loader",
      //     use: "css-loader"
      //   })
      // },
      /*
       scss普通解析方式，解析到js里
       */
      // {
      //   test: /\.scss$/,
      //   use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      // }
      /*
       scss单独打包到一个文件夹解析方式
       该插件有三个参数意义分别如下：
       use:指需要什么样的loader去编译文件,这里由于源文件是.css所以选择css-loader
       fallback:编译后用什么loader来提取css文件
       publicfile:用来覆盖项目路径,生成该css文件的文件路径 (无效属性)
       */
      // {
      //   test: /\.scss$/,
      //   use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      // }
      //  {
      //   test: /\.scss$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader', 'sass-loader']
      //   })
      // }
    
      /*
       file-loader与html-loader处理图片资源，单独打包出来
      */
     {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
                   name: '[name].[ext]',//[name] 代表文件名，[ext] 代表文件扩展名，outputPath 是输出的路径。不是默认根目录
                   outputPath: 'images/',//打包位置（html里面的也打包到这里）
                   //publicPath:'./images'//打包后css里面的图片引用地址，但是是以css文件夹为基础的相对路径,有默认值
                    }
          }
        ]
      },
     /*
      file-loader与html-loader处理图片资源
     */
     {//依赖file-loader
       test: /\.html$/,
       use: [ {
         loader: 'html-loader',
         options: {//打包后html里面的图片引用地址，是以index.html文件夹为基础的相对路径.
           minimize: true
         }
       }]
     },
     /*
       url-loader处理图片资源，打包到引用的文件里
      */
      // {
      //   test: /\.(gif|png|jpe?g|svg)$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //              name: '[name].[ext]',//[name] 代表文件名，[ext] 代表文件扩展名，outputPath 是输出的路径。不是默认根目录
      //              outputPath: 'images/',//无效，打包到js里面，base64位
      //              // publicPath: '../images'//无效
      //               }
      //     }
      //   ]
      // }
      
    ]
  }
};