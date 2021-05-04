const webpack = require('webpack')

path = require ('path')

var  WebpackMd5Hash  = require('webpack-md5-hash')
var HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

const TerserPlugin = require('terser-webpack-plugin')

const CopyWebpackPlugin = require('copy-webpack-plugin')

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ENV = process.env.APP_ENV
const isTest = ENV === 'test'
const isProd = ENV === 'prod'

function setDevTool() {
    if (isTest) {
      return 'inline-source-map'
    } else if (isProd) {
      return 'source-map'
    } else {
      return 'eval-source-map'
    }
}
if (isProd) {
    config.plugins.push(
        new UglifyJSPlugin(),
        new CopyWebpackPlugin([{
            from: __dirname + '/src/secondary/public/'
        }])
    )
}

const config = {
    entry: {
        'bundle-main': __dirname + "/src/app/index.js"
    },
    mode: "development",
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        publicPath: '/' 
    },
    devtool: setDevTool(),
    
    module:{
        rules:[
            {
                test: /\.js$/,
                use: [
                {loader: 'cache-loader'},
                {loader: 'babel-loader'},
                ],
                exclude: [
                    /node_modules/
                ],
            },
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options:{
                    presets:["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.css$/,
                use: ['cssnano','cache-loader']
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                {
                    loader: "sass-loader" // compiles Sass to CSS
                },
                {
                    loader:"postcss-loader"
                },
                {
                  loader:"cache-loader"
                } 
              ]  
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            {    
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader"
            }


        ],
    },
    optimization: {
        minimize: true,
        runtimeChunk: true,
        minimizer : [
            new  UglifyJSPlugin(),
            new TerserPlugin({
                cache: true,
                parallel: true
            })
        ],

        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 0,
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: __dirname + "/src/secondary/public/index.html",
          inject: 'body',
          hash: true,
    
        }),
        new HardSourceWebpackPlugin(),
        new WebpackMd5Hash(),
        
    ],
    devServer: {
        contentBase: './src/secondary/public',
        compress: true,
        port: 3000 ,
        watchContentBase: true,
        progress: true
      },  
}
module.exports = config
