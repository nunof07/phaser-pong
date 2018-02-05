/**
 * Hold a collection of values.
 */
export interface Collection<T> {
    values(): Iterable<T>;
}
