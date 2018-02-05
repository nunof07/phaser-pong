import { Set } from '@main/core/collection/Set';
import { WriteCollection } from '@main/core/collection/WriteCollection';
import { PongBallFactory } from '@main/entities/ball/PongBallFactory';
import { PongMusicFactory } from '@main/entities/music/PongMusicFactory';
import { PongPaddleFactory } from '@main/entities/paddle/PongPaddleFactory';
import { ComputerFactory } from '@main/entities/player/ComputerFactory';
import { HumanFactory } from '@main/entities/player/HumanFactory';
import { Player } from '@main/entities/player/Player';
import { PongRefereeFactory } from '@main/entities/referee/PongRefereeFactory';
import { PongScoreFactory } from '@main/entities/score/PongScoreFactory';
import { GameState } from '@main/states/GameState';
import * as Phaser from 'phaser-ce';

/**
 * Creates the game state.
 */
export function createGameState(game: Phaser.Game): GameState {
    const players: WriteCollection<Player> = new Set<Player>();
    const ball: PongBallFactory = new PongBallFactory(game);
    const computer: ComputerFactory =
        new ComputerFactory(
            ball,
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
            players,
        );
    const human: HumanFactory =
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
            players,
        );

    return new GameState([
        ball,
        new PongMusicFactory(game.add),
        computer,
        human,
        new PongRefereeFactory(ball, players),
    ]);
}
