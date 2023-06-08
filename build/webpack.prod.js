const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

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
    ]
  });
};
