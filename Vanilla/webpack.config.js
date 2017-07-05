const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./js/app.js', './styles/main.scss'],
  output: {
    filename: 'out/app.js'
  },
  watch: true,
  module: {
    // Rules
    rules: [
        // JS
        {
            test: /\.js$/,
            exclude: [ /node_modules/ ],
            use: [{
                loader: 'babel-loader',
                options: { presets: ['es2015', 'stage-2'] },
            }],
        },
        // SCSS / SASS
        {
            test: /\.(sass|scss)$/,
            use: ExtractTextPlugin.extract(['raw-loader', 'sass-loader'])
        },
    ]

  },
  // Plugins
  plugins: [
    new ExtractTextPlugin({
      filename: 'out/styles.css',
      allChunks: true,
    }),
  ],
  // END
};
