const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config');
const path = require('path');

console.log('NODE_ENV',process.env.NODE_ENV);
console.log('REACT_APP_BUILD_ENV',process.env.REACT_APP_BUILD_ENV);

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    compress: true,
    hot: true,
    historyApiFallback: true,
    open: false,
    port: 5000,
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite: {
          '^/api': '/api'
        },
        changeOrigin: true
      }
    }
  },
  devtool: 'source-map',
});
