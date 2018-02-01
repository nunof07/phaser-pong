import { Ball } from '@main/entities/Ball';
import { Paddle } from '@main/entities/Paddle';
import { Player } from '@main/entities/Player';
import { Score } from '@main/entities/Score';
import * as Phaser from 'phaser-ce';

/**
 * Computer player.
 */
export class Computer implements Player {
    private readonly state: Phaser.State;
    private readonly paddleObj: Paddle;
    private readonly ball: Ball;
    private readonly maxVelocity: number;
    private readonly scoreObj: Score;

    constructor(
        state: Phaser.State,
        paddle: Paddle,
        ball: Ball,
        maxVelocity: number = 250,
        score: Score = new Score(state),
    ) {
        this.state = state;
        this.paddleObj = paddle;
        this.ball = ball;
        this.maxVelocity = maxVelocity;
        this.scoreObj = score;
    }

    public create(): void {
        this.paddleObj.create(this.state.game.world.width - 8 , this.state.game.world.centerY);
        this.scoreObj.create(this.state.game.world.width - 128, 128);
    }

    public update(): void {
        this.paddleBody.velocity.setTo(this.ballBody.velocity.y);
        this.paddleBody.velocity.x = 0;
        this.paddleBody.maxVelocity.y = this.maxVelocity;
    }

    private get paddleBody(): Phaser.Physics.Arcade.Body {
        return <Phaser.Physics.Arcade.Body>this.paddleObj.sprite.body;
    }

    private get ballBody(): Phaser.Physics.Arcade.Body {
        return <Phaser.Physics.Arcade.Body>this.ball.sprite.body;
    }

    get paddle(): Paddle {
        return this.paddleObj;
    }

    get score(): Score {
        return this.scoreObj;
    }
}
