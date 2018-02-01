import { MaybeLoader } from '@main/phaser/load/MaybeLoader';
import * as Phaser from 'phaser-ce';

/**
 * Resolve loader.
 * @param maybeLoader Loader or has Loader.
 */
export function loader(maybeLoader: MaybeLoader): Phaser.Loader {
    if (maybeLoader instanceof Phaser.Loader) {
        return maybeLoader;
    } else if (maybeLoader instanceof Phaser.State) {
        return maybeLoader.game.load;
    } else {
        return maybeLoader.load;
    }
}
