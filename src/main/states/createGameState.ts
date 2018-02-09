import { Set } from '@main/core/collection/Set';
import { Task } from '@main/core/collection/Task';
import { Unit } from '@main/core/collection/Unit';
import { WriteCollection } from '@main/core/collection/WriteCollection';
import { Point } from '@main/core/Point';
import { PongMusicFactory } from '@main/entities/audio/PongMusicFactory';
import { PongSoundFxFactory } from '@main/entities/audio/PongSoundFxFactory';
import { Ball } from '@main/entities/ball/Ball';
import { PongBallFactory } from '@main/entities/ball/PongBallFactory';
import { PongPauseFactory } from '@main/entities/game/PongPauseFactory';
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
        new Task((): Phaser.Input => game.input),
        new PongPaddleFactory(
            game,
            new Task((): Point => {
                return {
                    x: 0,
                    y: game.world.centerY,
                };
            }),
        ),
        new PongScoreFactory(
            new Task((): Phaser.GameObjectFactory => game.add),
            new Task((): Point => {
                return {
                    x: 128,
                    y: 128,
                };
            }),
        ),
        players,
    );
}

function createComputerFactory(game: Phaser.Game, ball: Unit<Ball>, players: WriteCollection<Player>): ComputerFactory {
    return new ComputerFactory(
        ball,
        new PongPaddleFactory(
            game,
            new Task((): Point => {
                return {
                    x: game.world.width - 8,
                    y: game.world.centerY,
                };
            }),
        ),
        new PongScoreFactory(
            new Task((): Phaser.GameObjectFactory => game.add),
            new Task((): Point => {
                return {
                    x: game.world.width - 128,
                    y: 128,
                };
            }),
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
    const pause: PongPauseFactory = new PongPauseFactory(game);
    const referee: PongRefereeFactory = new PongRefereeFactory(ball, players, pause);
    const collision: BallPaddleCollisionFactory = new BallPaddleCollisionFactory(game, ball, players);

    return new GameState([
        new PongMusicFactory(new Task((): Phaser.GameObjectFactory => game.add)),
        pause,
        ball,
        createComputerFactory(game, ball, players),
        createHumanFactory(game, players),
        referee,
        collision,
        new PongSoundFxFactory(
            new Task((): Phaser.SoundManager => game.sound),
            ball,
            collision,
            referee,
        ),
    ]);
}
