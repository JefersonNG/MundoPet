const CopyPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
  mode: 'development',
  entry: {
    index: './src/main.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: path.resolve(__dirname, "src", "assets", "Dog-Duotone--Streamline-Phosphor.svg")
    }),
    new CopyPlugin({
      patterns: [
        {from: path.resolve(__dirname, "src", "assets"), 
          to: "assets"}
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}