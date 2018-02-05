import { WriteUnit } from '@main/core/collection/WriteUnit';

/**
 * Hold a value that can be updated.
 */
export class Scalar<T> implements WriteUnit<T> {
    private val: T;

    public value(): T {
        return this.val;
    }

    public update(value: T): this {
        this.val = value;

        return this;
    }
}
