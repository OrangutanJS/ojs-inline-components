const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    target: 'web',
    mode: 'development',
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '..', 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    {loader:MiniCssExtractPlugin.loader},
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            sourceMap: true
                        }
                    },
                    {loader: 'sass-loader'}],
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                // options: {
                //     "presets": ["@babel/preset-typescript"]
                // }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        ["@babel/preset-env", {useBuiltIns: 'usage', corejs: "2.6.5"}]
                    ],
                    plugins: [
                        "@babel/plugin-proposal-class-properties",
                        "@babel/plugin-proposal-private-methods",
                        "@babel/plugin-proposal-optional-chaining"
                    ]
                }
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devServer: {
        open: true,
        contentBase: path.resolve(__dirname, '..', 'dist'),
        historyApiFallback: {
            index: 'index.html'
        },
        watchContentBase: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new HtmlWebpackPlugin({
            title: 'ojs- inline components',
            base: 'http://localhost:8080/',
            hash: true,
            filename: './index.html' //relative to root of the application
        })
    ]
};
