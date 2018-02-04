import { Ball } from '@main/entities/ball/Ball';
import { Player } from '@main/entities/player/Player';
import { Referee } from '@main/entities/referee/Referee';
import * as Phaser from 'phaser-ce';

/**
 * Pong referee.
 */
export class PongReferee implements Referee {
    private readonly ball: Ball;
    private readonly players: ReadonlyArray<Player>;
    private readonly scoredSignal: Phaser.Signal;

    constructor(ball: Ball, players: ReadonlyArray<Player>, scored: Phaser.Signal = new Phaser.Signal()) {
        this.ball = ball;
        this.players = players;
        this.scoredSignal = scored;
    }

    public score(player: Player): this {
        player.score().increase();
        const goLeft: boolean = (player.id() === 0);
        this.ball.reset(goLeft);
        this.scoredSignal.dispatch(player);

        return this;
    }

    public scored(): Phaser.Signal {
        return this.scoredSignal;
    }

    public update(): this {
        const ballBlocked: Phaser.Physics.Arcade.FaceChoices = this.ball.body().blocked;

        if (ballBlocked.left) {
            this.score(this.players[1]);
        } else if (ballBlocked.right) {
            this.score(this.players[0]);
        }

        return this;
    }
}
