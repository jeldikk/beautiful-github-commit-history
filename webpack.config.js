const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {DefinePlugin} = require("webpack")

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "index.bundle.js"
    },
    // if NODE_ENV is not provided, 'development' will be taken
    mode: process.env.NODE_ENV || 'development',
    //resolve folders says, we can import anything from mentioned folders relatively
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"]
    },
    devServer: {
        port: 9000,
        contentBase: path.join(__dirname, "src")
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                use: {
                    loader: 'json-loader'
                }
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                use: ["file-loader"]
            }
        ]
    },
    plugins: [
        new DefinePlugin({
            'process.env':{
                "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html")
        })
    ]
}