import { Ball } from '@main/entities/ball/Ball';
import { Player } from '@main/entities/player/Player';
import { Referee } from '@main/entities/referee/Referee';
import * as Phaser from 'phaser-ce';

/**
 * Pong referee.
 */
export class PongReferee implements Referee {
    private readonly ball: Ball;
    private readonly scoredSignal: Phaser.Signal;

    constructor(ball: Ball, scored: Phaser.Signal = new Phaser.Signal()) {
        this.ball = ball;
        this.scoredSignal = scored;
    }

    public score(player: Player): this {
        player.score().increase();
        const goLeft: boolean = (player.id() === 0);
        this.ball.reset(goLeft);

        return this;
    }

    public scored(): Phaser.Signal {
        return this.scoredSignal;
    }

    public update(): this {
        return this;
    }
}
