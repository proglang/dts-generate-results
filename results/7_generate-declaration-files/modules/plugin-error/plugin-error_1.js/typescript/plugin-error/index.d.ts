export = PluginError;

declare class PluginError {
	constructor(plugin: string, message: Error, options: object);
}

declare namespace PluginError {
}