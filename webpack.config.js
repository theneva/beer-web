const webpack = require('webpack');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(srcDir, 'index.jsx')
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      include: srcDir
    }]
  }
};
