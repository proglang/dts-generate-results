export = ThenEos;
declare function ThenEos(stream: ThenEos.I__stream | ReadStream): Promise;
declare namespace ThenEos {
    export interface I__stream {
        readable: boolean;
        writable?: undefined;
    }
}
