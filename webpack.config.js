/* eslint-disable no-console, node/no-unpublished-require */
const path = require('path');

const webpack = require('webpack');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const WebpackBundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  const config = {
    entry: {
      index: path.resolve('src', 'client', 'index.tsx'),
    },
    output: {
      filename: '[name].[contenthash].bundle.js',
      chunkFilename: '[name].[contenthash].chunk.js',
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
      new WebpackManifestPlugin(),
    ],
    optimization: {
      minimize: isProd,
      splitChunks: {
        minSize: 100000,
        maxSize: 1500000,
        name: 'dist/public/commons',
        chunks: 'all',
        cacheGroups: {
          vendors: {
            test: /node_modules/,
            name: 'vendors',
            chunks: 'all',
            enforce: true,
          },
        },
      },
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
    devtool: isProd ? null : 'inline-source-map',
  };

  if (process.env.ANALYSIS === 'true') {
    console.log(`Building for analyze...`);
    config.plugins.push(new WebpackBundleAnalyzerPlugin());
  }
  return config;
};
