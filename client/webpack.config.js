module.exports = {
    entry: './index.js',
    devtool: 'source-map',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    }
}
