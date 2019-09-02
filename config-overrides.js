const {
  override,
  overrideDevServer,
  fixBabelImports,
  addPostcssPlugins,
  useBabelRc,
  useEslintRc,
  addWebpackPlugin
} = require('customize-cra')
const WorkboxPlugin = require('workbox-webpack-plugin')

// 移除线上环境sourcemap
const removeDevTool = () => config => {
  config.devtool = 'none'
  return config
}

module.exports = {
  webpack: override(
    fixBabelImports('import', {
      libraryName: 'antd',
      style: 'css'
    }),
    addPostcssPlugins([
      require('postcss-cssnext')
    ]),
    useBabelRc(),
    useEslintRc(),
    addWebpackPlugin(
      new WorkboxPlugin.GenerateSW({
        cacheId: 'webpack-pwa', // 设置前缀
        skipWaiting: true, // 强制等待中的 Service Worker 被激活
        clientsClaim: true, // Service Worker 被激活后使其立即获得页面控制权
        runtimeCaching: [
          // 配置路由请求缓存
          {
            urlPattern: /.*\.js/, // 匹配文件
            handler: 'NetworkFirst' // 网络优先
          },
          {
            urlPattern: /\/api/, // 匹配文件
            handler: 'NetworkFirst' // 网络优先
          }
        ]
      })
    ),
    removeDevTool()
  ),
  devServer: overrideDevServer(config => {
    config.proxy = {
      '/smcAdmin': {
        target: '/',
        changeOrigin: true
        // pathRewrite: {
        //   '^/smcAdmin': '/smcAdmin'
        // }
      }
    }
    return config
  })
}
