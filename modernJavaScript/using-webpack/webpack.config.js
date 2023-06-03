const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js",
    hello: "./src/hello.js",
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "public"), // c:\Users\Max\Documents...\public
    filename: "[name].bundle.min.js",
  },
};
