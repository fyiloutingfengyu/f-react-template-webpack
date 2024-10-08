const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const prodConfig = merge(commonConfig, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_debugger: true,
            drop_console: true,
            // pure_funcs: ['console.log'] // 只移除数组中指定的方法
          },
          format: {
            comments: false // 删除所有注释
          }
        },
        parallel: true,  // 多核打包，提升打包速度
        extractComments: false //是否将注释全部集中到一个文件中
      })
    ]
  },
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip',
    }),
  ]
});

module.exports = prodConfig;
