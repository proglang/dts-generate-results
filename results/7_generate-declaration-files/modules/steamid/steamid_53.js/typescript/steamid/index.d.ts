export = SteamID;
declare class SteamID {
    constructor(input?: undefined);
}
declare namespace SteamID {
    export function fromIndividualAccountID(accountid: number): SteamID;
}
