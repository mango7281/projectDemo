// 只要改变vue.config.js文件后，必须重启项目才能生效

// node.js代码风格
module.exports = {
  filenameHashing: true,

  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',

  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '首页',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    about: {
      entry: 'src/about.js',
      title: '关于我们'
    },
    good: {
      entry: 'src/good.js',
      title: '商品'
    }
  },
  devServer: {
    port: 8888,
    proxy: {
      // 代理，转发
      // 当请求URL中包含 '/soso' 字符串时，才执行代理转发
      '/soso': {
        target: 'https://c.y.qq.com',  // 目标（远程）服务器地址
        ws: true,
        changeOrigin: true
      }
    }
  }
}
