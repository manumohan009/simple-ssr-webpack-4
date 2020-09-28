const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// import { ReactLoadablePlugin } from 'react-loadable/webpack';
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;

module.exports = {
    entry: './src/client/client.js',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            }

        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: './src/index.html'
        // }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new ReactLoadablePlugin({
            filename: 'public/react-loadable.json',
          }),
    ]
}