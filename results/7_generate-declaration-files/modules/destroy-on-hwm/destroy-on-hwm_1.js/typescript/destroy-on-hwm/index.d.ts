export = DestroyOnHwm;
declare function DestroyOnHwm(stream: DestroyOnHwm.I__stream | PassThrough, fn?: Function): PassThrough;
declare namespace DestroyOnHwm {
    export interface I__stream {
        _writableState: WritableState;
        write: Function;
    }
}
