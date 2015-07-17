module.exports = {
  context: __dirname,
  entry: ["./js/Global.js"],
  output: {
    path: '../app/assets/javascripts/generated',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {loader: 'babel-loader'}
    ]
  }
};
