const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) =>{
    const isProduction = env === 'production';
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: "bundle.js",
        },
        module: {
            rules: [{
                    loader: "babel-loader",
                    test: /\.js$/,
                    exclude:/node_modules/
                }, {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }]

        },
        devtool: 'cheap-module-eval-source-map',
        // devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            publicPath: '/dist/',
            historyApiFallback: true,
        },
        // plugins: [
        //     new HtmlWebpackPlugin({
        //         template: 'public/index.html'
        //     })
        // ]
    }
}