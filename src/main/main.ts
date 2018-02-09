import { addStates } from '@main/core/state/addStates';
import { createBootState } from '@main/states/createBootState';
import { createGameState } from '@main/states/createGameState';
import * as Phaser from 'phaser-ce';

/**
 * Create and start Pong.
 */
const game: Phaser.Game = new Phaser.Game({
    width: 1024,
    height: 576,
    renderer: Phaser.AUTO,
    parent: 'game-container',
});
addStates(
    game,
    {
        boot: createBootState('game'),
        game: createGameState(game),
    },
).start('boot');
