/*jshint esversion: 6 */

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fontawesome = require('@fortawesome/fontawesome');
const webpack = require('webpack');
const path = require('path');

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css'
});

const config = {
  entry: {
    vendor: ['jquery', 'bootstrap', 'popper.js', '@fortawesome/fontawesome', '@fortawesome/fontawesome-free-solid'],
    app: './src/js/app.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/')
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
    ],
  },
  externals: {
    fontawesome: 'fontawesome'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'landing.html',
      template: 'src/landing.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'pricing.html',
      template: 'src/pricing.html'
    }),
    extractSass,
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
};

module.exports = config;
