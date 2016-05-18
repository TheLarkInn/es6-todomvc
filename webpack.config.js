const {resolve} = require('path')
const isProd = process.env.NODE_ENV === 'production'
const GenerateIndexWithBundlePlugin = require('./other/webpack/generate-index-with-bundle-plugin')
module.exports = {
  entry: './js/app.js',
  output: {
    filename: 'bundle.[hash].js',
    path: resolve(__dirname, 'dist'),
    pathinfo: true,
  },
  context: resolve(__dirname, 'src'),
  devtool: isProd ? 'source-map' : 'eval',
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel!eslint', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style!css'},
    ],
  },
  plugins: [
    GenerateIndexWithBundlePlugin,
  ]
}
