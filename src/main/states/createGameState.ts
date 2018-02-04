import { PongBallFactory } from '@main/entities/ball/PongBallFactory';
import { PongMusicFactory } from '@main/entities/music/PongMusicFactory';
import { PongPaddleFactory } from '@main/entities/paddle/PongPaddleFactory';
import { ComputerFactory } from '@main/entities/player/ComputerFactory';
import { HumanFactory } from '@main/entities/player/HumanFactory';
import { PongScoreFactory } from '@main/entities/score/PongScoreFactory';
import { GameState } from '@main/states/GameState';
import * as Phaser from 'phaser-ce';

/**
 * Creates the game state.
 */
export function createGameState(game: Phaser.Game): GameState {
    return new GameState([
        new PongBallFactory(game),
        new PongMusicFactory(game.add),
        new ComputerFactory(
            null,
            new PongPaddleFactory(
                game,
                {
                    x: game.world.width - 8,
                    y: game.world.centerY,
                },
            ),
            new PongScoreFactory(
                game.add,
                {
                    x: game.world.width - 128,
                    y: 128,
                },
            ),
        ),
        new HumanFactory(
            game.input,
            new PongPaddleFactory(
                game,
                {
                    x: 0,
                    y: game.world.centerY,
                },
            ),
            new PongScoreFactory(
                game.add,
                {
                    x: 128,
                    y: 128,
                },
            ),
        ),
    ]);
}
