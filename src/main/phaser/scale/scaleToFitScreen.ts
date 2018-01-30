import { MaybeScaleManager } from '@main/phaser/scale/MaybeScaleManager';
import { scaleManager } from '@main/phaser/scale/scaleManager';
import * as Phaser from 'phaser-ce';

/**
 * Modify scale manager to resize display to fit screen while keeping things proportional.
 * @param maybeScale ScaleManager or has ScaleManager.
 */
export function scaleToFitScreen(maybeScale: MaybeScaleManager): Phaser.ScaleManager {
    const manager: Phaser.ScaleManager = scaleManager(maybeScale);

    manager.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    manager.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    manager.pageAlignHorizontally = true;
    manager.pageAlignVertically = true;
    manager.forceLandscape = true;
    manager.windowConstraints.bottom = 'visual'; // make sure it doesn't go over screen height
    manager.refresh();

    return manager;
}
