const path = require('path');


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
                    loader: 'style-loader' //(順序2)
                },
                {
                    loader: 'css-loader', //(順序1)
                    options: {
                        modules: true
                    }
                }]
        }]
    },
    // plugins: []
   };