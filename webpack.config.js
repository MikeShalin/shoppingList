const path = require("path");
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ["./source/js/front/react/index.js","./source/less/style.less"],
    output: {
        path: __dirname + "/public_html",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'style.css',
                            outputPath: '/'
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        modules: [path.join(__dirname, 'source'), 'node_modules']
    },
    devServer: {
        proxy: { // proxy URLs to backend development server
            '/app': 'http://localhost:9191'
        },
        contentBase: path.join(__dirname, 'public_html'), // boolean | string | array, static file location
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        // hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: true, // only errors & warns on hot reload
        // ...
    },
    devtool:'inline-cheap-module-source-map'

};
