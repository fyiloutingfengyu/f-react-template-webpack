const { merge } = require('webpack-merge');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const prodConfig = require('./webpack.prod');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  console.log(env);
  // 打包分析，查看打包后的文件大小
  const addAnalyzer = () => {
    return new BundleAnalyzerPlugin({
      analyzerMode: 'static', // 生成report.html文件
      openAnalyzer: false, // 关闭自动在浏览器中打开报告
    });
  };

  const miniCssExtractPluginConfig = new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash].css',
    chunkFilename: 'css/[name].[contenthash].css'
  });

  const webpackConfig = merge(prodConfig, {
    plugins: [
      addAnalyzer(),
      miniCssExtractPluginConfig
    ],
  });

  // todo f
  if (env.analyzer) {
    let index = webpackConfig.plugins.findIndex(plugin => {
      console.log(plugin);
      return plugin === miniCssExtractPluginConfig;
    });
    console.log(index);

    webpackConfig.plugins.splice(index, 1);
  }

  return smp.wrap(webpackConfig);
};
