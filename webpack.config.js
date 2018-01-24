const glob = require('glob');
const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'assets/javascripts/application.js'),
  widgets: glob.sync('./widgets/**/*.js'),
  build: path.join(__dirname, 'priv/static'),
  gridster: path.join(__dirname, 'node_modules/gridster/dist')
};

process.env.BABEL_ENV = TARGET;

const common = {
  entry: {
    application: PATHS.app,
    widgets: PATHS.widgets
  },
  resolve: {
    extensions: ['.js', '.jsx', 'css', 'scss'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, PATHS.gridster)
    ]
  },
  output: {
    path: PATHS.build,
    publicPath: '/assets/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.jsx?$/, loaders: ['babel-loader?cacheDirectory&compact=false'] },
      {
        test: /\.(svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: 'url-loader?limit=1000&name=images/[name].[ext]'
      },
      {
        test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/,
        loader: 'url-loader?limit=1000&name=fonts/[name].[ext]'
      },
      {
        test: require.resolve('jquery-knob'),
        loader: 'imports-loader?require=>false,define=>false,this=>window'
      }
    ]
  }
};

// Development Environment
if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      contentBase: PATHS.build,
      headers: { 'Access-Control-Allow-Origin': '*' },
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // display only errors to reduce the amount of output
      stats: 'errors-only',

      // Binding address of webpack-dev-server
      // Read more: https://github.com/kittoframework/kitto/wiki/Customize-Asset-Watcher
      host: process.env.KITTO_ASSETS_HOST,
      port: process.env.KITTO_ASSETS_PORT
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
  });
}

// Production Environment
if (TARGET === 'build') {
  var CompressionPlugin = require("compression-webpack-plugin");

  module.exports = merge(common, {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          keep_fnames: true
        },
        mangle: {
         keep_fnames: true
        }
      }),
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.html$/,
        verbose: true
      })
    ]
  });
}
