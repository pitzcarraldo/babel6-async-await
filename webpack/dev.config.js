var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, '..'),
  entry: {
    polyfills: [
      'es5-shim',
      'es5-shim/es5-sham'
    ],
    app: './src/index.js'
  },
  output: {
    path: path.join(__dirname, '..', 'static', 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ],
    postLoaders: [
      {
        test: /\.js$/,
        loader: 'es3ify'
      }
    ]
  }
};
