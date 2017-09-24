var webpack = require('webpack');
var path = require('path');

var BUILD_PATH = path.resolve(__dirname, 'src/public');
var SRC_PATH = path.resolve(__dirname, 'src/static');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ExtractSass = new ExtractTextPlugin({
    filename: "index.css",
});

var config = {
  entry: [
    SRC_PATH + '/client.js'
  ],
  output: {
    path: BUILD_PATH,
    filename: 'build.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module : {
    loaders : [
      {
        test: /\.scss$/,
        use: ExtractSass.extract({
          use: [{
            loader: "css-loader"
            }, {
            loader: "sass-loader"
          }]
        })
      }
    ]
  },
  plugins: [
        ExtractSass
  ],
  node: {
    fs: "empty"
  }
};

module.exports = config;