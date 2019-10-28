const path = require('path');
const slsw = require('serverless-webpack');

module.exports = {
  devtool: "source-map",
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  entry: slsw.lib.entries,
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.ts'
    ],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
  target: 'node'
};
