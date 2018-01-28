/**
 * Random utilities.
 */
export class Randomizer {
    public bool(): boolean {
        // tslint:disable-next-line:insecure-random
        return Math.random() >= 0.5;
    }
}
