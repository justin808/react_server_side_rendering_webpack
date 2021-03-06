const path = require('path');

module.exports = {
  context: __dirname,
  entry: [
    "Global"
  ],
  output: {
    path: '../app/assets/javascripts/generated',
    filename: "bundle.js",
    libaryTarget: "this"
  },
  resolve: {
    root: [path.join(__dirname, 'js')],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      // require Resolve must go first
      // 1. React must be exposed
      { test: require.resolve("react"), loader: "expose?React" },

      // 2. Expose the components
      { test: require.resolve("./js/HelloString.js"), loader: "expose?HelloString" },
      { test: require.resolve("./js/HelloWorld.js"), loader: "expose?HelloWorld" },

      { loader: 'babel-loader'}
    ]
  }
};
