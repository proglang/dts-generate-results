export = FlakeIdgen;
declare class FlakeIdgen {
    constructor(options?: undefined);
    next(cb: Function): void;
}
