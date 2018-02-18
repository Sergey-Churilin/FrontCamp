const webpack = require('webpack');
const commonParams = require("./common");

module.exports = Object.assign(commonParams, {
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
        ]
    },
    devtool: '#source-map',
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        host: "0.0.0.0",
        disableHostCheck: true,
    },
});