import { Collection } from '@main/core/collection/Collection';

/**
 * Get first item in collection.
 * @param collection Collection.
 */
export function first<T>(collection: Collection<T>): T {
    return Array.from(collection.values())[0];
}
