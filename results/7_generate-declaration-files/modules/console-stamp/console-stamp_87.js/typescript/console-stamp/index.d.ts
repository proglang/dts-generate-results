export = ConsoleStamp;
declare function ConsoleStamp(con: ConsoleStamp.I__con | Console, options: object, prefix_metadata?: undefined): void;
declare namespace ConsoleStamp {
    export interface I__con {
        __ts__?: undefined;
        debug: Function;
        info: Function;
        warn: Function;
        error: Function;
        fatal: Function;
    }
}
