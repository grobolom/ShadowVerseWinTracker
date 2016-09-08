var webpack = require('webpack');

module.exports = {
  entry: [
    './tracker/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/static/',
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './static/',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
