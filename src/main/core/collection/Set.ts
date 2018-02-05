import { WriteCollection } from '@main/core/collection/WriteCollection';

/**
 * A set of values.
 */
export class Set<T> implements WriteCollection<T> {
    // tslint:disable-next-line:readonly-array
    private readonly collection: T[];

    constructor() {
        this.collection = [];
    }

    public add(value: T): this {
        this.collection.push(value);

        return this;
    }

    public values(): Iterable<T> {
        return this.collection;
    }
}
