import { scale } from '@main/phaser/scale';
import * as Phaser from 'phaser-ce';

/**
 * Modify scale manager to resize display to fit screen while keeping things proportional.
 * @param maybeScale ScaleManager or Game.
 */
export function scaleToFitScreen(maybeScale: Phaser.ScaleManager | Phaser.State | Phaser.Game): Phaser.ScaleManager {
    const manager: Phaser.ScaleManager = scale(maybeScale);

    manager.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    manager.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    manager.pageAlignHorizontally = true;
    manager.pageAlignVertically = true;
    manager.forceLandscape = true;
    manager.windowConstraints.bottom = 'visual'; // make sure it doesn't go over screen height
    manager.refresh();

    return manager;
}
