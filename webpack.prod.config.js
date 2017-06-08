const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './app/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders:
            [
                {
                    test: /.js?$/,
                    loader: 'babel-loader',
                    include: path.join(__dirname, 'app'),
                    exclude: /node_modules/,
                    query: {
                        presets: ['es2015', 'react']
                    }
                },
                {
                    test: /\.less$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'less-loader']
                    }),
                    exclude: /node_modules/,
                    include: path.resolve(__dirname, 'app')
                }
            ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            title: "EvilToolkit - Webpack",
            filename: "index.html"
        }),
        new ExtractTextPlugin('style.css')
    ]
};