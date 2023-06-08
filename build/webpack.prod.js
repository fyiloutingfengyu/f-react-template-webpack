const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env) => {
  console.log('env', env);
  // 打包分析，查看打包后的文件大小
  const addAnalyzer = () => {
    // 执行分析命令的时候才进行打包分析
    if (env.analyzer) {
      return new BundleAnalyzerPlugin({
        analyzerMode: 'static', // 生成report.html文件
        openAnalyzer: false, // 关闭自动在浏览器中打开报告
      });
    } else {
      return () => {
      };
    }
  };

  return merge(commonConfig, {
    mode: 'production',
    plugins: [
      addAnalyzer()
    ],
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
};
