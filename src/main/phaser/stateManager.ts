import * as Phaser from 'phaser-ce';

/**
 * Resolve state manager.
 * @param maybeStateManager StateManager or Game.
 */
export function stateManager(maybeStateManager: Phaser.StateManager | Phaser.Game): Phaser.StateManager {
    if (maybeStateManager instanceof Phaser.StateManager) {
        return maybeStateManager;
    } else {
        return maybeStateManager.state;
    }
}
