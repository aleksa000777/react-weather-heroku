// 1) Webpack needs to know the starting point of your application, or your root JavaScript file.
// 2) Webpack needs to know which transformations to make on your code.
// 3) Webpack needs to know to which location it should save the new transformed code.
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackStrip = require('webpack-strip');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    'babel-polyfill',
    './app/index.js'
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.css$/, loader: "style-loader!css-loader"},
      { test: /\.js$/, loader: WebpackStrip.loader('console.log', 'console.error') }
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  plugins: [HTMLWebpackPluginConfig]
};
