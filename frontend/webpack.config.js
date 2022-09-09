const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname),
    hot: true,
    open: false,
  },
};
