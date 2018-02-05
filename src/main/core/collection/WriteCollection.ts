import { Collection } from '@main/core/collection/Collection';

/**
 * Collection that can be added to.
 */
export interface WriteCollection<T> extends Collection<T> {
    add(value: T): this;
}
