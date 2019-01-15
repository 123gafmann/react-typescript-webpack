const path = require('path');

module.exports = {
    mode:"development",
    entry: ["./src/index.tsx"],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: "/node_modules/",
                use: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts", ".jsx", ".tsx"]
    }
}