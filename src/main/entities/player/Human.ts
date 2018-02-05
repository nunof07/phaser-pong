import { Paddle } from '@main/entities/paddle/Paddle';
import { Player } from '@main/entities/player/Player';
import { Score } from '@main/entities/score/Score';
import * as Phaser from 'phaser-ce';

/**
 * A human player.
 */
export class Human implements Player {
    private readonly idNumber: number;
    private readonly input: Phaser.Input;
    private readonly paddleObj: Paddle;
    private readonly scoreObj: Score;

    constructor(id: number, input: Phaser.Input, paddle: Paddle, score: Score) {
        this.idNumber = id;
        this.input = input;
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
        this.paddleObj.setPositionY(this.input.y);

        return this;
    }
}
