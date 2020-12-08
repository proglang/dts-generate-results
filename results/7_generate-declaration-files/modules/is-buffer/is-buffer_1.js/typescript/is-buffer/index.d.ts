export = IsBuffer;
declare function IsBuffer(obj?: Buffer | Function | IsBuffer.I__obj | boolean | null | number | string): boolean;
declare namespace IsBuffer {
    export interface I__constructor {
        isBuffer?: Function;
    }
    export interface I__obj {
        constructor: IsBuffer.I__constructor | Function;
    }
}
