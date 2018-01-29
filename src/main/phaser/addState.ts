import { stateManager } from '@main/phaser/stateManager';
import { StatesDefinition } from '@main/phaser/StatesDefinition';
import * as Phaser from 'phaser-ce';

/**
 * Add states.
 * @param maybeStateManager StateManager or Game.
 */
export function addState(maybeStateManager: Phaser.StateManager | Phaser.Game, states: StatesDefinition): Phaser.StateManager {
    const manager: Phaser.StateManager = stateManager(maybeStateManager);

    Object.keys(states).forEach((id: string) => {
        manager.add(id, states[id]);
    });

    return manager;
}
