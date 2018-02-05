import { Unit } from '@main/core/collection/Unit';

/**
 * Updatable unit.
 */
export interface WriteUnit<T> extends Unit<T> {
    update(value: T): this;
}
