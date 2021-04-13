const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  entry: "./src/index.js",
  mode: isDev ? "development" : "production",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: isDev ? "[name].js" : "[name].[contenthash].js"
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    compress: true,
    open: true,
    port: 3000,
    hot: true,
    watchContentBase: true,
    progress: true
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: isDev ? "[name]__[local]___[hash:base64:5]" : "[hash:base64:5]"
              },
              sourceMap: true
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        use: [
          {
            options: {
              outputPath: "images"
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
        use: [
          {
            options: {
              outputPath: "fonts"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
    new HtmlWebpackPlugin({
      title: 'webpack 5',
      template: path.resolve(__dirname, './src/index.html'), // шаблон
      filename: 'index.html', // название выходного файла
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
