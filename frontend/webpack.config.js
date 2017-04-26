var webpack = require('webpack');
var WriteFilePlugin = require('write-file-webpack-plugin')
var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    publicPath: "/assets/",
    path: __dirname + "/../backend/public/",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: [ 'es2015', 'react' ]}
      },
      {
        test: /\.css$/,
        loaders: 'style-loader!css-loader'
      }
    ]
  }
};
