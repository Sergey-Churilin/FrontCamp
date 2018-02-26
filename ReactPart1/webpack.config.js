const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const autoprefixer = require('autoprefixer');
const nodeExternals = require('webpack-node-externals');

const browserConfig = {
    entry: './browser/index.js',
    //entry: './scripts/main.js',
    output: {
        path: __dirname,
        filename: './dist/bundle.js',
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

    /*plugins: [
        new ExtractTextPlugin({
            filename: 'browser/css/[name].css'
        }),
        new InlineManifestWebpackPlugin({
            name: 'webpackManifest'
        })
    ]*/
};

const serverConfig = {
    entry: './server/server.js',
    target: 'node',
    output: {
        path: __dirname,
        filename: 'server.js',
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
