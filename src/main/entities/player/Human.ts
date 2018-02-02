import { Paddle } from '@main/entities/paddle/Paddle';
import { Player } from '@main/entities/player/Player';
import { Score } from '@main/entities/score/Score';
import * as Phaser from 'phaser-ce';

/**
 * A human player.
 */
export class Human implements Player {
    private readonly input: Phaser.Input;
    private readonly paddle: Paddle;
    private readonly scoreObj: Score;

    constructor(input: Phaser.Input, paddle: Paddle, score: Score) {
        this.input = input;
        this.paddle = paddle;
        this.scoreObj = score;
    }

    public score(): Score {
        return this.scoreObj;
    }

    public update(): this {
        this.paddle.setPositionY(this.input.y);

        return this;
    }
}
