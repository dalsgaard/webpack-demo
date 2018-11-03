const path = require('path');

module.exports = {
  mode: 'development',
  entry: "./src",
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js'
  },

  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
}
