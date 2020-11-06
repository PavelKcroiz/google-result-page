const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /.(png|jpg)$/,
        loader: "url-loader",
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./public/", to: "public/" },
        { from: "./index.html", to: "" },
      ],
    }),
  ],
};