var path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
      filename: 'main.js',
    },
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            {
              loader: 'resolve-url-loader',
              options: {
                sourceMap: true
              }
            },
            // Compiles Sass to CSS
            'sass-loader',
          ],
          exclude: /node_modules/
        },
        
        //{
        //  test: /\.css$/i,
        //  use: [
        //    // Creates `style` nodes from JS strings
        //    'style-loader',
        //    // Translates CSS into CommonJS
        //    'css-loader',
        //  ],
        //},
        {
          test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }]
        }
      ],
    },
};