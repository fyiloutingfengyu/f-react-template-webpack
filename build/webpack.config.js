const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv');
const fs = require('fs');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';
console.log('ENV_FILE', process.env.ENV_FILE);
const dotenvFile = path.resolve(__dirname, `../.env.${process.env.ENV_FILE}`);
console.log('dotenvFile', dotenvFile);

dotenv.config({
  path: fs.existsSync(dotenvFile)
    ? dotenvFile
    : path.resolve(__dirname, `../.env.prod`),
});

console.log('process.env.REACT_APP_BUILD_ENV', process.env.REACT_APP_BUILD_ENV);

module.exports = {
  entry: './src/index.tsx',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[contenthash:8].js',
    chunkFilename: 'js/[name].[contenthash:8].js',
    assetModuleFilename: 'images/[name].[contenthash:8].[ext]'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'all',
          minChunks: 2,
          minSize: 0,
          name: 'commons'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    }),
    // 复制public中的资源到打包后的目录中，使用绝对路径引用public中的资源
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          // to: '', 可以省略 to，自动从 output 的 path 去找
          globOptions: {
            ignore: ['**/index.html'] // 忽略任意目录下的index.html文件
          }
        },
      ],
    }),
    new webpack.DefinePlugin({
      'GLOBAL_ENV': JSON.stringify(process.env)
    })
  ],
  module: {
    rules: [
      {
        test: /\.js|jsx|ts|tsx$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ],
        include: path.join(__dirname, '../src'),
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              sourceMap: isDev,
              resources: [
                path.resolve(__dirname, '../src/styles/variables.scss'),
              ],
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  }
};
