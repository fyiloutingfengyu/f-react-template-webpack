const { merge } = require('webpack-merge');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const prodConfig = require('./webpack.prod');

module.exports = () => {
  // 打包分析，查看打包后的文件大小
  const addAnalyzer = () => {
    return new BundleAnalyzerPlugin({
      analyzerMode: 'static', // 生成report.html文件
      openAnalyzer: false, // 关闭自动在浏览器中打开报告
    });
  };

  return smp.wrap(merge(prodConfig, {
    plugins: [
      addAnalyzer()
    ],
  }));
};
