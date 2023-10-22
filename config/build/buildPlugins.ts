import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import DotenvPlugin from "dotenv-webpack";
import webpack, { WebpackPluginInstance } from "webpack";
import { BuildOptions } from "./types/config";

export function buildPlugins({paths, isDev}: BuildOptions): WebpackPluginInstance[] {
    return [
      new DotenvPlugin(),
      new HtmlWebpackPlugin({template: paths.html}),
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      }),
      new webpack.ProgressPlugin(),
    ]
}