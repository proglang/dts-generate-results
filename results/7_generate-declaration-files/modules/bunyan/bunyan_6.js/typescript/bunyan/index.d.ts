export = Logger;
declare class Logger {
    constructor(options: Logger.I__options, _childOptions?: undefined, _childSimple?: undefined);
    info(): void;
    _emit(rec: Logger.I__rec, noemit?: undefined): string;
    warn(): void;
}
declare namespace Logger {
    export interface I__options {
        name: string;
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
