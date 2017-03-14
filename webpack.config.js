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
            { test: /\.css$/,  loader: "style-loader!css-loader" },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
};