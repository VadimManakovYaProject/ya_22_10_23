import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildLoaders } from "./buildLoaders";
import { buildRelovers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServers";

export function buildWebpackConfig(options: BuildOptions): Configuration {
		const {mode, paths, isDev} = options;
		return {
			mode: mode,
			entry: paths.entry,
			output: {
				filename: "[name].[contenthash].js",
				path: paths.build,
				clean: true,
			},
			module: {
				rules: buildLoaders(options),
			},
			resolve: buildRelovers(options),
			plugins: buildPlugins(options),
			devtool: isDev ? "inline-source-map" : undefined, // отображает строку с ошибкой в webpack
			devServer: isDev ? buildDevServer(options) : undefined, // отслеживает изменения файлов и пересобирает
		}
}