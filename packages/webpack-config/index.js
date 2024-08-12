import TerserPlugin from "terser-webpack-plugin";
import { dirname, resolve as _resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// noinspection JSUnresolvedVariable
export default {
  mode: process.env.production ? "production" : "development",
  devtool: process.env.production ? "source-map" : "inline-source-map",

  output: {
    path: join(__dirname, 'static/assets/dist'),
  },

  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
    ignored: '**/node_modules',
  },

  target: ["browserslist"],
  stats: "minimal",

  performance: {
    maxEntrypointSize: 400000,
    maxAssetSize: 250000,
    hints: "warning",
  },

  optimization: {
    minimize: !!process.env.production,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
    emitOnErrors: true,
    moduleIds: "deterministic",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    mangleWasmImports: true,
    mangleExports: "deterministic",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        loader: "babel-loader",
        test: /\.js?$/,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
