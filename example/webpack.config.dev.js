var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  mode: 'development',
  entry: [
    'babel-polyfill',
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    modules: ['src', 'node_modules'],
    // extensions: ['.json', '.js'],
    alias: {
      'redux-form-material-ui': path.join(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loaders: ['babel-loader', 'eslint-loader'],
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, '../src'),
        ],
      },
      // {
      //   test: /\.json$/,
      //   loader: 'json-loader',
      // },
      // {
      //   test: /\.json$/,
      //   loader: 'raw-loader',
      //   include: [/libphonenumber-js/, /react-phone-number-input/],
      // },
      {
        test: /\.md/,
        loaders: ['html-loader', 'markdown-loader'],
      },
    ],
  },
};