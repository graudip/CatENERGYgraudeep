const path = require("path");

module.exports = {
  entry: "./source/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "source/js")
  },
  devServer: {
     contentBase: path.join(__dirname, 'source/'),
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
}
