import * as Phaser from 'phaser-ce';

/**
 * Holds several states.
 */
export interface StatesDefinition {
    [key: string]: Phaser.State;
}
