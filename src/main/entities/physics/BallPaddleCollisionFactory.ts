import { Collection } from '@main/core/collection/Collection';
import { Scalar } from '@main/core/collection/Scalar';
import { Unit } from '@main/core/collection/Unit';
import { WriteUnit } from '@main/core/collection/WriteUnit';
import { Factory } from '@main/core/Factory';
import { Ball } from '@main/entities/ball/Ball';
import { BallPaddleCollision } from '@main/entities/physics/BallPaddleCollision';
import { PongBallPaddleCollision } from '@main/entities/physics/PongBallPaddleCollision';
import { Player } from '@main/entities/player/Player';

/**
 * Creates ball paddle collisions.
 */
export class BallPaddleCollisionFactory implements Factory<BallPaddleCollision>, Unit<BallPaddleCollision> {
    private readonly game: Phaser.Game;
    private readonly ball: Unit<Ball>;
    private readonly players: Collection<Player>;
    private readonly last: WriteUnit<BallPaddleCollision>;

    constructor(
        game: Phaser.Game,
        ball: Unit<Ball>,
        players: Collection<Player>,
        writer: WriteUnit<BallPaddleCollision> = new Scalar<BallPaddleCollision>(),
    ) {
        this.game = game;
        this.ball = ball;
        this.players = players;
        this.last = writer;
    }

    public create(): BallPaddleCollision {
        const collision: BallPaddleCollision = new PongBallPaddleCollision(
            this.game,
            this.ball.value(),
            this.players.values().map((player: Player) => player.paddle()),
        );
        this.last.update(collision);

        return collision;
    }

    public value(): BallPaddleCollision {
        return this.last.value();
    }
}
