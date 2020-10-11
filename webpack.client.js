const path = require('path');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // creates a CSS file per JS file
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin; // for code splitting
const TerserJSPlugin = require('terser-webpack-plugin'); // to minify js
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // to optimize \ minimize CSS assets
var webpack = require('webpack');
module.exports = env => {
    console.log('NODE_ENV: ', env.NODE_ENV);
    const path_env = env.NODE_ENV ? './.env.' + env.NODE_ENV : './.env'
    return {
        entry: ["@babel/polyfill", './src/client/client.js'],
        output: {
            path: path.join(__dirname, '/public'),
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.(s*)css$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader?url=false", "sass-loader"]
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                    exclude: /node_modules/,
                    use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
                },
                {
                    test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                    loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
                }

            ]
        },
        plugins: [
            new Dotenv({
                path: path_env, // load this now instead of the ones in '.env'
                safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
                systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
                silent: true, // hide any errors
                defaults: false // load '.env.defaults' as the default values if empty.
            }),
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[id].css',
            }),
            new ReactLoadablePlugin({
                filename: 'public/react-loadable.json',
            }),
            new webpack.optimize.ModuleConcatenationPlugin(), //minify everything
        ],
        optimization: {
            minimize: true,
            minimizer: [new TerserJSPlugin({
              terserOptions: {
                compress: {
                  drop_console: true,
                },
              }
            }), new OptimizeCSSAssetsPlugin({
      
            })],
          }

    }

}