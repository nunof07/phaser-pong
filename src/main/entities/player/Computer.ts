import { Paddle } from '@main/entities/paddle/Paddle';
import { Player } from '@main/entities/player/Player';
import { Score } from '@main/entities/score/Score';
import * as Phaser from 'phaser-ce';

/**
 * A computer player.
 */
export class Computer implements Player {
    private readonly idNumber: number;
    private readonly anchor: Phaser.Point;
    private readonly paddleObj: Paddle;
    private readonly scoreObj: Score;

    constructor(id: number, anchor: Phaser.Point, paddle: Paddle, score: Score) {
        this.idNumber = id;
        this.anchor = anchor;
        this.paddleObj = paddle;
        this.scoreObj = score;
    }

    public id(): number {
        return this.idNumber;
    }

    public score(): Score {
        return this.scoreObj;
    }

    public paddle(): Paddle {
        return this.paddleObj;
    }

    public update(): this {
        this.paddleObj.setVelocityY(this.anchor.y);

        return this;
    }
}
