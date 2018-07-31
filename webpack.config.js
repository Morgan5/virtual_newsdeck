var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "dist");
var APP_DIR = path.resolve(__dirname, "src");

module.exports = {
    entry: APP_DIR + "/index.jsx",
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx", ".json"],
        modules: [
            path.resolve("./"),
            path.resolve("./src/frontend"),
            path.resolve("./node_modules")
        ]
    },
    module: {
        rules: [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : "babel-loader"
            },
            {
                test: /\.(html)$/,
                loader: "file-loader?name=[path][name].[ext]&context=./src"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader" ]
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve("url-loader"),
                options: {
                    limit: 10000,
                    name: "static/media/[name].[hash:8].[ext]",
                },
            },
            {
                test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
                loader: require.resolve("file-loader"),
                options: {
                    name: "/static/media/[name].[hash:8].[ext]",
                },
            }
        ]
    },
    output: {
        path: BUILD_DIR,
        filename: "app.js"
    }
};