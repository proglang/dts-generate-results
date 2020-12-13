export interface I__spec {
    rule?: undefined;
}
export function scheduleJob(): null;
export class Job {
    constructor(name: null, job: Function, callback?: undefined);
    schedule(spec: Date | I__spec): boolean;
}
