import { Paddle } from '@main/entities/Paddle';
import { Player } from '@main/entities/Player';
import { Score } from '@main/entities/Score';

export class Human implements Player {
    private state: Phaser.State;
    private paddleObj: Paddle;
    private scoreObj: Score;

    constructor(state: Phaser.State, paddle: Paddle, score: Score = new Score(state)) {
        this.state = state;
        this.paddleObj = paddle;
        this.scoreObj = score;
    }

    public create(): void {
        this.paddleObj.create(0, this.state.game.world.centerY);
        this.scoreObj.create(128, 128);
    }

    public update(): void {
        this.paddleObj.move(this.state.game.input.y);
    }

    get paddle(): Paddle {
        return this.paddleObj;
    }

    get score(): Score {
        return this.scoreObj;
    }
}