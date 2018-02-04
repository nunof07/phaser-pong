import { Factory } from '@main/core/Factory';
import { Ball } from '@main/entities/ball/Ball';
import { Player } from '@main/entities/player/Player';
import { PongReferee } from '@main/entities/referee/PongReferee';
import { Referee } from '@main/entities/referee/Referee';
import * as Phaser from 'phaser-ce';

/**
 * Creates a pong referee.
 */
export class PongRefereeFactory implements Factory<Referee> {
    private readonly ball: Ball;
    private readonly players: ReadonlyArray<Player>;

    constructor(ball: Ball, players: ReadonlyArray<Player>) {
        this.ball = ball;
        this.players = players;
    }

    public create(): Referee {
        const ref: Referee = new PongReferee(this.ball);

        this.ball.worldCollision().add((blocked: Phaser.Physics.Arcade.FaceChoices) => {
            if (blocked.left) {
                ref.score(this.players[1]);
            } else if (blocked.right) {
                ref.score(this.players[0]);
            }
        });

        return ref;
    }
}
