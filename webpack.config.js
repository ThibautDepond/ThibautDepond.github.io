const path = require("path")
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [{
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
        }]
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            inject: "body",
            filename: "index.html",
          }),
        new webpack.ProvidePlugin({m: "mithril"}),
        new MiniCssExtractPlugin({
            filename: 'style/style.css'
        }),
    ]
};