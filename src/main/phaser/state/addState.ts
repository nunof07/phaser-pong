import { MaybeStateManager } from '@main/phaser/state/MaybeStateManager';
import { stateManager } from '@main/phaser/state/stateManager';
import * as Phaser from 'phaser-ce';

/**
 * Add states.
 * @param maybeStateManager StateManager or has StateManager.
 */
export function addState(maybeStateManager: MaybeStateManager, states: Record<string, Phaser.State>): Phaser.StateManager {
    const manager: Phaser.StateManager = stateManager(maybeStateManager);

    Object.keys(states).forEach((id: string) => {
        manager.add(id, states[id]);
    });

    return manager;
}
