const path = require("path")

module.exports = {
  entry: './src/scripts/script.js',
  output: {
    path: path.join(__dirname, "build/scripts/"),
    filename: "script.js",
    clean: true,
  },
  devtool: "source-map",
  mode: "production",
  devServer: {
    hot: true
  },
  experiments: {
    topLevelAwait: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
