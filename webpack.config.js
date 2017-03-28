module.exports = {
    entry: './client/index.js',
    devtool: 'source-map',
    output: {
        path: __dirname,
        filename: './client/bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    }
}
