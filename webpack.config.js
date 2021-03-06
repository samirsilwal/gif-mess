const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/app/app.tsx",

    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },

    resolve: {
        extensions:[".ts", ".tsx", ".js", ".json", ".jsx"]
    },

    module: {
        rules:[
            {test: /\.(ts|tsx)$/, loader: "ts-loader"},
            {
             test: /\.css$/,
             loader: "style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]"
            },

        ]
    },

    plugins:[
        new HTMLWebpackPlugin(
            {
                template: path.resolve(__dirname, "src", "app", "index.html")
            }
        ),
    ]
}