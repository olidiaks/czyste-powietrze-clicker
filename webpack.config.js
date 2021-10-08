const path = require('path');

module.exports = {
  entry: './clicker/clicker.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};