const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './src/index.html'
  }),
  new CopyPlugin ({
    patterns: [
      {from: "src/images", to: "images/"}
    ]
  })
],
};