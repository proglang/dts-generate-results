export interface I__promise {
    _onError: null;
}
export function async(callback: ((() => void)) | (((promise: I__promise | Promise) => void)), arg?: Promise): void;
export class Promise {
    constructor(resolver: Function, label?: undefined);
    then(onFulfillment: Function, onRejection?: undefined, label?: undefined): Promise;
    catch(): Promise;
}
