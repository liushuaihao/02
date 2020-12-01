/**
 * 配置参考: https://cli.vuejs.org/zh/config/
 */
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
  },
  productionSourceMap: false,
  devServer: {
    open: true,
    port: 8001,
    overlay: {
      errors: true,
      warnings: true
    },
    proxy: {
      '/': {
        target: 'http://101.200.153.53:31546',//代理地址，这里设置的地址会代替axios中设置的baseURL
        changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
        //ws: true, // proxy websockets
        //pathRewrite方法重写url
        // pathRewrite: {
        // pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
        //pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
        // }
      }
    }
  },
  lintOnSave: false, // 关闭格式检查
  productionSourceMap: false // 打包时不会生成 .map 文件，加快打包速度
}
