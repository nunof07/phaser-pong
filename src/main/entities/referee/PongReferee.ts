import { Ball } from '@main/entities/ball/Ball';
import { Pause } from '@main/entities/game/Pause';
import { Player } from '@main/entities/player/Player';
import { Referee } from '@main/entities/referee/Referee';
import * as Phaser from 'phaser-ce';

/**
 * Pong referee.
 */
export class PongReferee implements Referee {
    private readonly ball: Ball;
    private readonly players: ReadonlyArray<Player>;
    private readonly pause: Pause;
    private readonly scoredSignal: Phaser.Signal;

    constructor(ball: Ball, players: ReadonlyArray<Player>, pause: Pause, scored: Phaser.Signal = new Phaser.Signal()) {
        this.ball = ball;
        this.players = players;
        this.pause = pause;
        this.scoredSignal = scored;
    }

    public score(player: Player): this {
        player.score().increase();
        const goLeft: boolean = (player.id() === 0);
        this.ball.reset(goLeft);
        this.pause.pause();
        this.scoredSignal.dispatch(player);

        return this;
    }

    public scored(): Phaser.Signal {
        return this.scoredSignal;
    }

    public start(): this {
        if (!this.ball.isLaunched()) {
            this.ball.launch();
        }

        return this;
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
