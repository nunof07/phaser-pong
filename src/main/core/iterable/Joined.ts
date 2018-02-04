/**
 * Multiple iterables joined together.
 */
export class Joined<T> implements Iterable<T> {
    private readonly iterables: Iterable<Iterable<T>>;

    constructor(iterables: Iterable<Iterable<T>>) {
        this.iterables = iterables;
    }

    public *[Symbol.iterator](): Iterator<T> {
        for (const iterable of this.iterables) {
            for (const item of iterable) {
                yield item;
            }
        }
    }
}
