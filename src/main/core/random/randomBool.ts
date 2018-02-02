/**
 * Generates a random boolean.
 */
export function randomBool(): boolean {
    // tslint:disable-next-line:insecure-random
    return Math.random() >= 0.5;
}
