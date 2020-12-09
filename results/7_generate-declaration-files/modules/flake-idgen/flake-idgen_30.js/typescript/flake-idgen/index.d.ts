export = FlakeIdgen;
declare class FlakeIdgen {
    constructor(options: FlakeIdgen.I__options);
    next(cb?: undefined): Buffer;
}
declare namespace FlakeIdgen {
    export interface I__options {
        id?: undefined;
        datacenter?: undefined;
        worker?: undefined;
        epoch: number;
        seqMask?: undefined;
    }
}
