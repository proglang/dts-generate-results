export = Bytebuffer;
declare class Bytebuffer {
    constructor(capacity?: undefined, littleEndian?: undefined, noAssert?: undefined);
    writeIString(str: string, offset?: undefined): ;
    flip(): ;
    readIString(): string;
    readUint32(): number;
    readUTF8String(): object;
}
