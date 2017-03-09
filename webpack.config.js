var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: ["./src/index.jsx"],
    output: {
        path: path.resolve(__dirname, 'builds'),
        filename: "bundle.js",
        publicPath: '/builds/'
    },
    devServer: {
        contentBase: 'src'
    },

    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
};