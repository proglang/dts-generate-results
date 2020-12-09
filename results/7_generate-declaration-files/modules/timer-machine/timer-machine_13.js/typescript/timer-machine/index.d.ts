export = Timer;
declare class Timer {
    constructor(start?: undefined);
}
declare namespace Timer {
    export function get(name: string): Timer;
}
