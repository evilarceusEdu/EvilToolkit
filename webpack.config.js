const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ['./app/index.js']
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/'
    },
    devServer: {
        contentBase: './app',
        publicPath: 'http://localhost:8080/'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "EvilToolkit - Webpack",
            filename: "app/index.html"
        })
    ]
}
