const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
      app: __dirname + '/src/entry.js'
    },
    output: {
      path: __dirname + '/build',
      filename: 'js/[name].js',
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: "css/[name].css"
        }),
    ],
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.scss$/,
            use: [
              {
                loader: 'file-loader',
              },
              {loader: 'extract-loader'},
              {
                loader: MiniCssExtractPlugin.loader
              },
              {loader: 'css-loader?url=false'},
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [autoprefixer()]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  // Prefer Dart Sass
                  implementation: require('sass'),
                  sassOptions: {
                    includePaths: ['./node_modules'],
                  },
                },
              },
            ],
          },
          {
            test: /\.css$/,
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[ext]',
                },
              },
              
            ],
          },
        ]
    },
    devServer: {
        contentBase: './dist',
        open: true
    },
};