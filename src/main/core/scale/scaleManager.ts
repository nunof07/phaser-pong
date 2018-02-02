import { MaybeScaleManager } from '@main/core/scale/MaybeScaleManager';
import * as Phaser from 'phaser-ce';

/**
 * Resolve scale manager.
 * @param maybeScale ScaleManager or has ScaleManager.
 */
export function scaleManager(maybeScale: MaybeScaleManager): Phaser.ScaleManager {
    if (maybeScale instanceof Phaser.ScaleManager) {
        return maybeScale;
    } else if (maybeScale instanceof Phaser.State) {
        return maybeScale.scale;
    } else {
        return maybeScale.scale;
    }
}
