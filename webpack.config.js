var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./js/app.js', './styles/main.scss'],
  output: {
    filename: 'assets/out.js'
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
                options: { presets: ['es2015'] },
            }],
        },
        // SCSS / SASS
        {
            test: /\.(sass|scss)$/,
            use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
        },
    ]

  },
  // Plugins
  plugins: [
    new ExtractTextPlugin({
      filename: 'assets/styles.css',
      allChunks: true,
    }),
  ],
  // END
};
