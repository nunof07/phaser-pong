import { MaybeStateManager } from '@main/core/state/MaybeStateManager';
import * as Phaser from 'phaser-ce';

/**
 * Resolve state manager.
 * @param maybeStateManager StateManager or has StateManager.
 */
export function stateManager(maybeStateManager: MaybeStateManager): Phaser.StateManager {
    return (maybeStateManager instanceof Phaser.StateManager)
        ? maybeStateManager
        : maybeStateManager.state;
}
