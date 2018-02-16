const path = require('path');
const webpack = require('webpack');
require('dotenv').config();
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, './app');
const BUILD_DIR = path.resolve(__dirname, './app/static');

module.exports = {
  entry: {
    'app': [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/dev-server',
      `./app/index.js`
    ]
  },
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
    publicPath: '/static'
},
devServer: {
  historyApiFallback: true,
},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader?cacheDirectory',
        include: SRC_DIR,
        exclude: [/node_modules/],
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react'],
          plugins: ['react-hot-loader/babel']
      },
        // use: [{
        //   loader: ['babel-loader'],
        //   options: { presets: ['es2015', 'react'] }
        // }],
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'cheap-module-eval-source-map'
}