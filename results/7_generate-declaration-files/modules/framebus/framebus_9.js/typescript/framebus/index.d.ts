export = Framebus;
declare class Framebus {
    constructor(origin?: undefined);
    on(event: string, fn: Function): boolean;
}
