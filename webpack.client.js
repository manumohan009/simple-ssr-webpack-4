const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')

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
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new ReactLoadablePlugin({
            filename: 'public/react-loadable.json',
        }),
        // new CleanWebpackPlugin()
    ]
}