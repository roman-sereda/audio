var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path');

module.exports = {
  entry: [
    './app/index.js'
  ],
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
        loader: ['babel-loader']
      }
    ]
  },
  plugins: [
    /*new UglifyJSPlugin(),*/
    /*new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV' : '"production"'
      }
    })*/
  ]
};
