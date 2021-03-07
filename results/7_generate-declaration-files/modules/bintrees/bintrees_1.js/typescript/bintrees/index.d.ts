export class RBTree {
    constructor(comparator: ((a: number, b: number) => number));
    insert(data: number): boolean;
    _comparator(a: number, b: number): number;
}
