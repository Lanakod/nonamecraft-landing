const path = require("path");
module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: { path: path.resolve("dist"), filename: "bundle.js" },
  module: {
    rules: [
      {
        test: /\.js$/i,
        include: path.resolve("src", "js"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve("src", "css"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        include: path.resolve("src", "fonts"),
        type: "asset/resource",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: path.resolve("src", "assets"),
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve("dist"),
    },
  },
};
