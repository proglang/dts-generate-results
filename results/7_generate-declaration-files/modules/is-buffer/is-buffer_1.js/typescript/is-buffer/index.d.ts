export = IsBuffer;
declare function IsBuffer(obj?: string | null | number | boolean | Function | IsBuffer.I__obj | Buffer): boolean;
declare namespace IsBuffer {
    export interface I__constructor {
        isBuffer?: Function;
    }
    export interface I__obj {
        constructor: Function | IsBuffer.I__constructor;
    }
}
