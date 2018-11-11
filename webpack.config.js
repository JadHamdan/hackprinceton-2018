const path = require('path')

var config = {
  entry: './public/main.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
    crossOriginLoading: 'anonymous',
  },
  mode: 'development',
  devServer: {
    contentBase: "./public",
    hot: true,
    inline: true,
    port: 5000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  }
}

module.exports = config
