module.exports = {
    chainWebpack: config => {
        config.module.rule('pdf')
          .test(/\.(pdf)(\?.*)?$/)
          .use('file-loader')
            .loader('file-loader')
            .options({
              name: 'assets/pdf/[name].[hash:8].[ext]'
            })
    
      },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/english10/dist/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
