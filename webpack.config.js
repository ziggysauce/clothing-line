const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, './app');
const BUILD_DIR = path.resolve(__dirname, './app/static');

module.exports = {
  entry: path.resolve(SRC_DIR, 'Index.js'),
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react'] }
        }],
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  }
}