const path = require("path")
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
          {
          test: /\.scss$/,
          use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader'
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                }
              }
            ]
        },
        {
          test: /\.png/,
          type: "asset/resource"
        },
        {
          test: /\.pdf/,
          type: "asset/resource",
          generator: {
            filename: 'files/[name][ext]', 
          }
        }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        m: "mithril",
        "i18n": [path.resolve(path.join(__dirname, "/src/lib/i18n.js")), "i18n"],
        "$t": [path.resolve(path.join(__dirname, "/src/lib/i18n.js")), "t"],
        "$td": [path.resolve(path.join(__dirname, "/src/lib/i18n.js")), "td"]
      }),
      new HtmlWebpackPlugin({
          template: "./index.html",
          inject: "body",
          filename: "index.html",
          favicon: "./src/media/favicon.ico"
        }),
      new MiniCssExtractPlugin({
          filename: 'style/style.css'
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'public',
            to: '.'
          }
        ]
      }),
    ]
};