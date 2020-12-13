export class RBTree {
    constructor(comparator: Function);
    insert(data: number): boolean;
    _comparator(a: number, b: number): number;
}
