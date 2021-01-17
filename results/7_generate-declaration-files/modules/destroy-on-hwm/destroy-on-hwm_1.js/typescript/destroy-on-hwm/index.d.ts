export = DestroyOnHwm;
declare function DestroyOnHwm(stream: PassThrough | DestroyOnHwm.I__stream, fn?: Function): PassThrough;
declare namespace DestroyOnHwm {
    export interface I__stream {
        _writableState: WritableState;
        write: Function;
    }
}
