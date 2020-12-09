export = Logger;
declare class Logger {
    constructor(options: Logger.I__options | Logger, _childOptions: Logger.I___childOptions, _childSimple?: undefined);
    info(): void;
    _emit(rec: Logger.I__rec, noemit?: undefined): string;
    child(options: object, simple?: undefined): Logger;
    warn(): void;
}
declare namespace Logger {
    export interface I__options {
        name: string;
        stream?: undefined;
        streams?: any[];
        serializers?: null;
        level?: undefined;
        src?: boolean;
        _level: number;
        fields: object;
    }
    export interface I___childOptions {
        name?: undefined;
        stream?: undefined;
        streams?: undefined;
        serializers?: undefined;
        level?: undefined;
        src?: undefined;
    }
    export interface I__rec {
        level: number;
        msg: string;
    }
    export function createLogger(options: object): Logger;
    export function resolveLevel(nameOrNum: number): number;
}
