const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: __dirname + "/",
    entry: ['./scripts'],
    output: {
        filename: "./dist/[name].js"
    },
    resolveLoader: {
        alias: {
            "remove-number-keys": path.join(__dirname, "./loaders/remove-number-keys")
        }
    },
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
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {minimize: true}
                    }
                ]
            },
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                use: 'remove-number-keys'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
};