const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpackConfig = require('./webpack.config');

module.exports = {
    output: {
        publicPath: '/'
      },
      devServer: {
        historyApiFallback: true,
      },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(js|jsx|tsx|ts|mjs)$/,
        include: [path.resolve(__dirname, "src")],
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.jsx?$/, 
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: ['url-loader?limit=100000'] },
      {
        test: /@?(ui-kitten|eva-design).*\.(ts|js)x?$/,
        loader: 'babel-loader'
       },
      {
        test: /(@?react-(navigation|native)).*\.(ts|js)x?$/,
        include: /node_modules/,
        exclude: [/react-native-web/, /\.(native|ios|android)\.(ts|js)x?$/],
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ],
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
    extensions: [
      ".web.js",
      ".js",
      ".web.ts",
      ".ts",
      ".web.tsx",
      ".tsx",
      ".web.mjs",
      ".mjs"
    ]
  }
};