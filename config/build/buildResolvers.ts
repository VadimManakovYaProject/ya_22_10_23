import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildRelovers(options: BuildOptions):ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true, // в приоритете абсолютные пути
		modules: [options.paths.src, "node_modules"], // для ипорта node_modules как абсоютный путь, а не относительный
		mainFiles: ["index"], // файл по умолчанию при импорте (он и так по дефолту)
		alias: {}, // при такой записи абсолютный путь будет ввида app/shared/...
	}
}