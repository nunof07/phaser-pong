import * as Phaser from 'phaser-ce';

/**
 * Resolve scale manager.
 * @param maybeScale ScaleManager or Game.
 */
export function scale(maybeScale: Phaser.ScaleManager | Phaser.State | Phaser.Game): Phaser.ScaleManager {
    if (maybeScale instanceof Phaser.ScaleManager) {
        return maybeScale;
    } else if (maybeScale instanceof Phaser.State) {
        return maybeScale.scale;
    } else {
        return maybeScale.scale;
    }
}
