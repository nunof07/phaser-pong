import { Collection } from '@main/core/collection/Collection';

/**
 * Create array from collection.
 * @param collection Collection.
 */
export function toArray<T>(collection: Collection<T>): ReadonlyArray<T> {
    return Array.from(collection.values());
}
