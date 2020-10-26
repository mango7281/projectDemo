var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var { CleanWebpackPlugin } = require('clean-webpack-plugin')
var webpack = require('webpack')


var env = process.env.NODE_ENV

var config = {
  mode: 'production',  // 指定打包的环境
  // 入口
  entry: {
    // main: path.resolve(__dirname, './src/main.js')
    main: './src/main.js'
  },
  // 出口
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, './dist')  // 只能用绝对路径
  },
  // plugin
  plugins: [
    // 把打包成功后的.js文件自动插入到一个html模板中去
    new HtmlWebpackPlugin({
      title: '我们',
      template: path.resolve(__dirname, './public/index.html')
    }),
    // 用于自动删除dist目录
    new CleanWebpackPlugin(),
  ],
  // loaders
  module: {
    rules: [
      { test: /\.(scss|css)$/, use: ['style-loader', 'css-loader', 'sass-loader']},
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']},
      // exclude不包括
      { test: /\.js$/, exclude: /node_modules/,  use: ['babel-loader']}
    ]
  },
  resolve: {
    // 别名
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: [".js", ".json"]
  }
}


// 这是开发环境
if (env == 'development') {

  config.mode = 'development'
  // 用于热更新（这两个plugin是webpack内置的）
  config.plugins.push(new webpack.NamedModulesPlugin())
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
  // 本地服务
  config.devServer = {
    port: 8000,
    contentBase: path.resolve(__dirname, './public'),
    open: true,
    hot: true,   // 开启热更新
    overlay: {    // 报错时的浮层
      errors: true
    }
  }
  config.module.rules.push({
    test: /\.js$/,
    exclude: /node_modules/,
    use: ['eslint-loader'],
    enforce: 'pre'   // 在babel编译之间进行代码检测
  })
}

module.exports = config
