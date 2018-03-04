const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const browserConfig = {
    entry: './browser/index.js',
    output: {
        path: __dirname,
        filename: './build/bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            },
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }]
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        })
    ]
};

const serverConfig = {
    entry: './server/server.js',
    target: 'node',
    output: {
        path: __dirname,
        filename: './build/server.js',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            },
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }]
    },

    externals: [nodeExternals()]
};

module.exports = [browserConfig, serverConfig];
