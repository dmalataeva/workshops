var webpack = require('webpack');
var path = require('path');

var BUILD_PATH = path.resolve(__dirname, 'src/public');
var SRC_PATH = path.resolve(__dirname, 'src');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ExtractSass = new ExtractTextPlugin({
    filename: "index.css",
});

var config = {
  entry: [
    SRC_PATH + '/script.js'
  ],
  output: {
    path: BUILD_PATH,
    filename: 'webgl.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module : {
    loaders : [
      {
        test: /\.(js|jsx)$/,
        include : SRC_PATH,
        loader : 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }, 
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