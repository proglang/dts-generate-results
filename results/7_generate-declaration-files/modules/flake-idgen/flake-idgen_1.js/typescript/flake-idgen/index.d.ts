export = FlakeIdgen;
declare class FlakeIdgen {
    constructor(options?: undefined);
    next(cb?: undefined): Buffer;
}
