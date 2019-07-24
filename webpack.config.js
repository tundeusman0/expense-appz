const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env) =>{
    const isProduction = env === 'production';
    return {
        mode: isProduction ? 'production' : 'development',
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: "bundle.js",
            chunkFilename:'chunky.js',
        },
        module: {
            rules: [{
                    loader: "babel-loader",
                    test: /\.js$/,
                    exclude:/node_modules/
                }, {
                test: /\.s?css$/,
                use: [
                        MiniCssExtractPlugin.loader,
                        { loader: 'css-loader', options: { url: false, sourceMap: true } },
                        { loader: 'sass-loader', options: { sourceMap: true } }
                    ],
            }]

        },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            publicPath: '/dist/',
            historyApiFallback: true,
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "style.css"
            }),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({ 
                template: './public/index.html',
                filename: './index.html' 
            }),
        ],
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000,
        }
    }
}