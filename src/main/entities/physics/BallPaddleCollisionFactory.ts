import { Collection } from '@main/core/collection/Collection';
import { Unit } from '@main/core/collection/Unit';
import { Factory } from '@main/core/Factory';
import { Ball } from '@main/entities/ball/Ball';
import { BallPaddleCollision } from '@main/entities/physics/BallPaddleCollision';
import { Player } from '@main/entities/player/Player';

/**
 * Creates ball paddle collisions.
 */
export class BallPaddleCollisionFactory implements Factory<BallPaddleCollision> {
    private readonly game: Phaser.Game;
    private readonly ball: Unit<Ball>;
    private readonly players: Collection<Player>;

    constructor(game: Phaser.Game, ball: Unit<Ball>, players: Collection<Player>) {
        this.game = game;
        this.ball = ball;
        this.players = players;
    }

    public create(): BallPaddleCollision {
        return new BallPaddleCollision(
            this.game,
            this.ball.value(),
            this.players.values().map((player: Player) => player.paddle()),
        );
    }
}
