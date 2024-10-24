const { merge } = require("webpack-merge");
const configCommon = require("./webpack.config.js");

module.exports = merge(configCommon, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/index.html"],
  },
});
