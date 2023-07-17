const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslintPlugin = require('eslint-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const baseConfig = {
  entry: {
    main: path.resolve(__dirname, './src/index'),
  },
  mode: 'development',
  module: {
    rules: [
      // TS
      {
        test: /\.ts$/i,
        use: 'ts-loader',
      },
      // изображения
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      // шрифты и SVG
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      // CSS
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', 'json'],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/template.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new EslintPlugin({
      extensions: 'ts',
    }),
    new FaviconsWebpackPlugin({
      logo: './src/images/favicon.png',
      favicons: {
        icons: {
          android: false, // Create Android homescreen icon. `boolean` or `{ offset, background }` or an array of sources
          appleIcon: false, // Create Apple touch icons. `boolean` or `{ offset, background }` or an array of sources
          appleStartup: false, // Create Apple startup images. `boolean` or `{ offset, background }` or an array of sources
          favicons: true, // Create regular favicons. `boolean` or `{ offset, background }` or an array of sources
          windows: false, // Create Windows 8 tile icons. `boolean` or `{ offset, background }` or an array of sources
          yandex: false,
        },
      },
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, 'src/images'),
    //       to: path.resolve(__dirname, 'dist/images'),
    //     },
    //   ],
    // }),
  ],
};

module.exports = ({ mode }) => {
  const isProductionMode = mode === 'prod';
  const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

  return merge(baseConfig, envConfig);
};
