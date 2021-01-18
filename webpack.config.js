const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    /* rule to transform typescript files .ts to javascript files */
    module: {
        rules: [
            {
                /* with regular expression test any file that ends with .ts and used ts-loader
                to compile that file */
                test: /\.ts$/,
                use: "ts-loader",
                include: [path.resolve(__dirname, "src")]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
      },
    devtool: 'eval-source-map',
    /* compile javascript file and keep it in public dir */
    output: {
        publicPath: "public",
        filename: 'weblib.js',
        path: path.resolve(__dirname, "public")
    }

}