import { Set } from '@main/core/collection/Set';
import { Unit } from '@main/core/collection/Unit';
import { WriteCollection } from '@main/core/collection/WriteCollection';
import { PongMusicFactory } from '@main/entities/audio/PongMusicFactory';
import { PongSoundFxFactory } from '@main/entities/audio/PongSoundFxFactory';
import { Ball } from '@main/entities/ball/Ball';
import { PongBallFactory } from '@main/entities/ball/PongBallFactory';
import { PongPaddleFactory } from '@main/entities/paddle/PongPaddleFactory';
import { BallPaddleCollisionFactory } from '@main/entities/physics/BallPaddleCollisionFactory';
import { ComputerFactory } from '@main/entities/player/ComputerFactory';
import { HumanFactory } from '@main/entities/player/HumanFactory';
import { Player } from '@main/entities/player/Player';
import { PongRefereeFactory } from '@main/entities/referee/PongRefereeFactory';
import { PongScoreFactory } from '@main/entities/score/PongScoreFactory';
import { GameState } from '@main/states/GameState';
import * as Phaser from 'phaser-ce';

function createHumanFactory(game: Phaser.Game, players: WriteCollection<Player>): HumanFactory {
    return new HumanFactory(
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
}

function createComputerFactory(game: Phaser.Game, ball: Unit<Ball>, players: WriteCollection<Player>): ComputerFactory {
    return new ComputerFactory(
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
}

/**
 * Creates the game state.
 */
export function createGameState(game: Phaser.Game): GameState {
    const players: WriteCollection<Player> = new Set<Player>();
    const ball: PongBallFactory = new PongBallFactory(game);
    const referee: PongRefereeFactory = new PongRefereeFactory(ball, players);
    const collision: BallPaddleCollisionFactory = new BallPaddleCollisionFactory(game, ball, players);

    return new GameState([
        ball,
        new PongMusicFactory(game.add),
        createComputerFactory(game, ball, players),
        createHumanFactory(game, players),
        referee,
        collision,
        new PongSoundFxFactory(game.sound, ball, collision, referee),
    ]);
}
