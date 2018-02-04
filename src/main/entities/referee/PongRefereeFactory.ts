import { Factory } from '@main/core/Factory';
import { first } from '@main/core/iterable/first';
import { Ball } from '@main/entities/ball/Ball';
import { Player } from '@main/entities/player/Player';
import { PongReferee } from '@main/entities/referee/PongReferee';
import { Referee } from '@main/entities/referee/Referee';

/**
 * Creates a pong referee.
 */
export class PongRefereeFactory implements Factory<Referee> {
    private readonly balls: Iterable<Ball>;
    private readonly players: Iterable<Player>;

    constructor(balls: Iterable<Ball>, players: Iterable<Player>) {
        this.balls = balls;
        this.players = players;
    }

    public create(): Referee {
        return new PongReferee(
            first(this.balls),
            Array.from(this.players),
        );
    }
}
