const { merge } = require("webpack-merge");
const configCommon = require("./webpack.config.js");

module.exports = merge(configCommon, {
  mode: "production",
  devtool: "source-map",
});
