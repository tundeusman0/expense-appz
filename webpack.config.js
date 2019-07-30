const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack")
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV === "test"){
    require("dotenv").config({ path: ".env.test" })
} else if (process.env.NODE_ENV === "development"){
    require("dotenv").config({ path: ".env.development" })
}
module.exports = (env) =>{
    const isProduction = env === 'production';
    return {
        mode: isProduction ? 'production' : 'development',
        entry: ['@babel/polyfill','./src/app.js'],
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
            new webpack.DefinePlugin({
                "process.env.FIREBASE_API_KEY": JSON.stringify(process.env.FIREBASE_API_KEY),
                "process.env.FIREBASE_AUTH_DOMAIN" : JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                "process.env.FIREBASE_DATABASE_URL": JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                "process.env.FIREBASE_PROJECT_ID": JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                "process.env.FIREBASE_STORAGE_BUCKET": JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                "process.env.FIREBASE_MESSAGING_SENDER_ID": JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
                "process.env.FIREBASE_APP_ID" : JSON.stringify(process.env.FIREBASE_APP_ID)
            })
        ],
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000,
        }
    }
}