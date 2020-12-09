export = Ipcheck;
declare class Ipcheck {
    constructor(input: string);
    match(cidr: string): boolean;
}
declare namespace Ipcheck {
    export function match(ip: string, cidr: string): boolean;
}
