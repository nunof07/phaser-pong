import { Entity } from '@main/core/Entity';
import { Ball } from '@main/entities/ball/Ball';
import { Paddle } from '@main/entities/paddle/Paddle';
import * as Phaser from 'phaser-ce';

/**
 * Handles ball and paddle collisions.
 */
export class BallPaddleCollision implements Entity {
    private readonly game: Phaser.Game;
    private readonly ball: Ball;
    private readonly paddles: ReadonlyArray<Paddle>;
    private readonly collided: Phaser.Signal;

    constructor(
        game: Phaser.Game,
        ball: Ball,
        paddles: ReadonlyArray<Paddle>,
        collided: Phaser.Signal = new Phaser.Signal(),
    ) {
        this.game = game;
        this.ball = ball;
        this.paddles = paddles;
        this.collided = collided;
    }

    public update(): this {
        this.paddles.forEach((paddle: Paddle) => {
            this.game.physics.arcade.collide(
                paddle.sprite(),
                this.ball.sprite(),
                () => this.collided.dispatch(),
                undefined,
                this,
            );
        });

        return this;
    }
}
