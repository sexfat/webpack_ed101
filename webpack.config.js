const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development', // "production" | "development" | "none"  開發模式
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    }, //輸出
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // you can specify a publicPath here
                        // by default it use publicPath in webpackOptions.output
                        publicPath: './dist'
                    }
                },
                {
                    loader: 'css-loader', //(順序1)
                    options: {
                        modules: true
                    }
                }]
        }]
    },
    plugins: [
        //這個套件是載入 css 檔案
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "./css/[name].css"
        })
    ]
   };