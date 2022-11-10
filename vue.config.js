const webpack = require('webpack');
const target = 'http://127.0.0.1:8080';
module.exports = {
  devServer: {
    proxy: {
        //proxy 요청을 보낼 api 시작 부분
        '/api': {
            target,
            changeOrigin: true
        }
    }
  },
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  pwa: {
    name: 'Vue Argon Design',
    themeColor: '#172b4d',
    msTileColor: '#172b4d',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#172b4d'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  },
  
};
