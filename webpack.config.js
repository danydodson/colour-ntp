const path = require('path');

module.exports = {
  mode: 'production',
  context: path.join(__dirname, 'src/scripts'),
  entry: {
    colours: './colours.js',
    options: './options.js'
  },
  output: {
    path: path.join(__dirname, 'build/scripts'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  esmodules: true
                }
              }
            ]
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-transform-react-jsx'
          ]
        }
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader'
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src/scripts'),
      'node_modules'
    ]
  }
};
