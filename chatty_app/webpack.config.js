const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: '../assets/',
    // chunkFilename: '[name].bundle.js'
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract([
        {
          loader: 'css-loader'
        },
        {
          loader: 'sass-loader'
        }
        ],
        {
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css', '.scss']
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
    // contentBase: path.join(__dirname, 'public'),
    inline: true,
    hot: true,
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './public/index.html',
      filename: './index.html'
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin({
      port: 3000
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(['dist']),
    new DashboardPlugin()
  ],
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  }
};

module.exports = config;
