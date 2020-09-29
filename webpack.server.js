const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    entry: ["@babel/polyfill",'./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
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
                loader: "ignore-loader"
            },
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(),
    ],
    externals: [webpackNodeExternals()]
};