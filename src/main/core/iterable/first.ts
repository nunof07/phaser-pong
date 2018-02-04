/**
 * Get first item in iterable.
 * @param iterable Iterable.
 */
export function first<T>(iterable: Iterable<T>): T {
    return Array.from(iterable)[0];
}
