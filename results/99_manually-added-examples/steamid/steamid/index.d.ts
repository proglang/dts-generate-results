export = SteamID;
declare class SteamID {
    constructor(input?: undefined);
    isValid(): boolean;
    isGroupChat(): boolean;
    isLobby(): boolean;
    getSteam2RenderedID(newerFormat?: boolean): string;
}
declare namespace SteamID {
    export function fromIndividualAccountID(accountid: string | number): SteamID;
}
