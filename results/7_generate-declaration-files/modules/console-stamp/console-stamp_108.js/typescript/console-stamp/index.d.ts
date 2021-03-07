export = ConsoleStamp;
declare function ConsoleStamp(con: ConsoleStamp.I__con, options: object, prefix_metadata?: undefined): void;
declare namespace ConsoleStamp {
    export interface I__con {
        __ts__?: undefined;
        log: Function;
        info: Function;
        warn: Function;
        error: Function;
        dir: Function;
        assert: Function;
    }
}
