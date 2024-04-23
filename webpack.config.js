const path = require('path');

module.exports = {
  entry: {
    'index': './scripts/model-loader.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'app'),
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      // { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.js$/, loader: "source-map-loader" },
    ],
  },
  optimization: {
    minimize: false
  }
};