var path = require('path');

module.exports = {
    context: __dirname + "/",
    entry: ['whatwg-fetch', "babel-polyfill", './index.js'],
    output: {
        path : path.join(__dirname, './dist'),
        publicPath: __dirname+"/dist",
        filename: "bundle.js"
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            }
        ]
    }
};