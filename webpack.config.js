/* eslint-disable no-console, node/no-unpublished-require */
const path = require('path');

const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

module.exports = (env, argv) => {
  const config = {
    entry: {
      index: path.resolve('src', 'client', 'index.tsx'),
    },
    output: {
      filename: '[name].bundle.js',
      chunkFilename: '[name].chunk.js',
      path: path.resolve('dist', 'public'),
      publicPath: '/public/',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
      plugins: [
        new TsconfigPathsPlugin({
          configFile: './tsconfig.client.json',
        }),
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': JSON.stringify({
          NODE_ENV: process.env.NODE_ENV,
        }),
      }),
    ],
    optimization: {
      minimize: argv.mode === 'production',
      // splitChunks: {
      //   minSize: 100000,
      //   maxSize: 1500000,
      //   name: 'dist/public/commons',
      //   chunks: 'all',
      //   cacheGroups: {
      //     vendors: {
      //       test: /node_modules/,
      //       name: 'vendors',
      //       chunks: 'all',
      //       enforce: true,
      //     },
      //   },
      // },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.client.json',
            },
          },
        },
      ],
    },
  };

  if (NODE_ENV === 'production') {
    console.log(`Building as production...`);
    config.optimization.minimize = true;

    if (process.env.ANALYSIS === 'true') {
      console.log(`Building for analyze...`);
      config.plugins.push(new BundleAnalyzerPlugin());
    }
  } else {
    console.log('Building as development...');
    config.devtool = 'inline-source-map';
  }
  return config;
};
