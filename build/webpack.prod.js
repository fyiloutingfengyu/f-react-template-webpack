const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_debugger: true,
            drop_console: true,
            pure_funcs: ['console.log']
          },
          format: {
            comments: false // 删除所有注释
          }

        },
        parallel: true,  // 多核打包，提升打包速度
        extractComments: false //是否将注释全部集中到一个文件中
      })
    ]
  }
});
