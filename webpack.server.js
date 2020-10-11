const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const Dotenv = require('dotenv-webpack');

module.exports = env => {
    console.log('NODE_ENV:server ', env.NODE_ENV);
    const path_env = env.NODE_ENV ?'./.env.'+env.NODE_ENV :'./.env'
    return {
        target: 'node',
        entry: ["@babel/polyfill",'./src/index.js'],
        output: {
            path: path.resolve(__dirname, 'build'),
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
                { test: /\.(scss|css)$/, loader: "ignore-loader" }
            ]
        },
        plugins: [
            new Dotenv({
              path: path_env, // load this now instead of the ones in '.env'
              safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
              systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
              silent: true, // hide any errors
              defaults: false // load '.env.defaults' as the default values if empty.
            })
          ],
        externals: [webpackNodeExternals()]
    }
};