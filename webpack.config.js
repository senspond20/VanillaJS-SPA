const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const { resolve } = require('path')

module.exports = {
  mode: 'production',
  entry: {
    router: resolve(__dirname, 'src','client','router.js'),
    app:  resolve(__dirname, 'src','client','index.js')
  },
  output: {
    path: resolve(__dirname, 'public','vendor'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: resolve(__dirname, 'public','index.html'),
      template: resolve(__dirname, 'src','client','root.html')
    }),
    new MiniCssExtractPlugin({ filename: 'app.css' }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['public']
    })
  ],

  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ]
  },
  // webpack 에서 기본적으로 js 파일은 minify가 되지만 css는 그렇지 않아서 저는 css minify를 추가
  optimization : {
    minimizer : [
      new UglifyJsPlugin({
        cache: true,
        parallel: 4
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
}
