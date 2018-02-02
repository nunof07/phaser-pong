import { Paddle } from '@main/entities/paddle/Paddle';
import { Player } from '@main/entities/player/Player';
import { Score } from '@main/entities/score/Score';
import * as Phaser from 'phaser-ce';

/**
 * A computer player.
 */
export class Computer implements Player {
    private readonly anchor: Phaser.Point;
    private readonly paddle: Paddle;
    private readonly scoreObj: Score;

    constructor(anchor: Phaser.Point, paddle: Paddle, score: Score) {
        this.anchor = anchor;
        this.paddle = paddle;
        this.scoreObj = score;
    }

    public score(): Score {
        return this.scoreObj;
    }

    public update(): this {
        this.paddle.setVelocityY(this.anchor.y);

        return this;
    }
}
