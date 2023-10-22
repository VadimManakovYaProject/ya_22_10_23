import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack"
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): RuleSetRule[]  {
    const {isDev, paths} = options

    const svgLoader = {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    };

    const assetLoader = [
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: 'asset/resource'
      },
      // {
      //     test: /\.html/,
      //     type: 'asset/resource',
      //     generator: {
      //         filename: 'static/[hash][ext][query]',
      //     },
      // }, 
      // {
      //     test: /\.svg/,
      //     type: 'asset/inline',
      // }, 
      {
        test: /\.txt/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 // 4kb
          }
        }
      }
    ];

    const typescriptLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    };

    const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader, // для создания CSS файлов в build
        {
          loader: "css-loader",
          options: {
            modules: {
            auto: true,
            localIdentName: isDev 
              ? "[path][name]__[local]--[hash:base64:8]" 
              : "[hash:base64:8]",
            }
          }
        },
        "sass-loader", // компилируем sass/scss в css
      ],
    }

    return [
      svgLoader,
      ...assetLoader,
      typescriptLoader,
      cssLoader,
    ]
}