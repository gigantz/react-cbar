const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path:  path.resolve(__dirname, 'dist'),
        filename: 'react-cbar.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    devServer: {
        contentBase: [
            "dist",
        ],
        "port": 7979,
        hot: true,
    },
    watch: true,
    // plugins: [
    //     new webpack.DefinePlugin({
    //         'process.env':{
    //             'NODE_ENV': JSON.stringify('production')
    //         }
    //     }),
    //     new UglifyJSPlugin()
    // ]
};