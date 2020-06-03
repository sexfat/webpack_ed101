const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: 'development', // "production" | "development" | "none"  開發模式
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    }, //輸出
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        index : 'index.html',
        port: 3300
    },
    module: {
        rules: [{
            test: /\.(sass|scss|css)$/, 
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // you can specify a publicPath here
                        // by default it use publicPath in webpackOptions.output
                        publicPath: './dist'
                    }
                },
                {
                    loader: 'css-loader', //(順序2)
                    options: {
                        modules: true
                    }
                },{
                    loader: 'sass-loader'//(順序1)
                }
            ]
        }]
    },
    plugins: [
         //清理舊的檔案
        new CleanWebpackPlugin(),
        //這個套件是載入 css 檔案
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "./css/[name].css"
        }),
        new HtmlWebpackPlugin({
            title : '首頁',
            //來源檔
            template: './src/index.html',
            //產生的檔案
            filename: 'index.html', 
            minify: false,
            inject: 'body' ,
        })

    ]
   };