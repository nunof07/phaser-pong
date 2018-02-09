import { Unit } from '@main/core/collection/Unit';

/**
 * Async unit.
 */
export class Task<T> implements Unit<T> {
    private val: () => T;

    constructor(val: () => T) {
        this.val = val;
    }

    public value(): T {
        return this.val();
    }
}
