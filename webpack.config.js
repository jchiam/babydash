const glob = require('glob');
const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            compact: false
          }
        }
      },
      {
        test: /\.(svg|png|jpe?g|gif)(\?\S*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: 'images/[name].[ext]'
          }
        }
      },
      {
        test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: 'fonts/[name].[ext]'
          }
        }
      },
      {
        test: require.resolve('jquery-knob'),
        use: {
          loader: 'imports-loader',
          options: {
            require: false,
            define: false,
            this: 'window'
          }
        }
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
