import { Ball } from '@main/entities/ball/Ball';
import { Paddle } from '@main/entities/paddle/Paddle';
import { BallPaddleCollision } from '@main/entities/physics/BallPaddleCollision';
import * as Phaser from 'phaser-ce';

/**
 * Pong ball and paddle collisions.
 */
export class PongBallPaddleCollision implements BallPaddleCollision {
    private readonly game: Phaser.Game;
    private readonly ball: Ball;
    private readonly paddles: ReadonlyArray<Paddle>;
    private readonly collidedObj: Phaser.Signal;

    constructor(
        game: Phaser.Game,
        ball: Ball,
        paddles: ReadonlyArray<Paddle>,
        collided: Phaser.Signal = new Phaser.Signal(),
    ) {
        this.game = game;
        this.ball = ball;
        this.paddles = paddles;
        this.collidedObj = collided;
    }

    public collided(): Phaser.Signal {
        return this.collidedObj;
    }

    public update(): this {
        this.paddles.forEach((paddle: Paddle) => {
            this.game.physics.arcade.collide(
                paddle.sprite(),
                this.ball.sprite(),
                () => {
                    this.collidedObj.dispatch();
                },
                undefined,
                this,
            );
        });

        return this;
    }
}
