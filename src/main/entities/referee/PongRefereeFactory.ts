import { Collection } from '@main/core/collection/Collection';
import { first } from '@main/core/collection/first';
import { toArray } from '@main/core/collection/toArray';
import { Factory } from '@main/core/Factory';
import { Ball } from '@main/entities/ball/Ball';
import { Player } from '@main/entities/player/Player';
import { PongReferee } from '@main/entities/referee/PongReferee';
import { Referee } from '@main/entities/referee/Referee';

/**
 * Creates a pong referee.
 */
export class PongRefereeFactory implements Factory<Referee> {
    private readonly balls: Collection<Ball>;
    private readonly players: Collection<Player>;

    constructor(balls: Collection<Ball>, players: Collection<Player>) {
        this.balls = balls;
        this.players = players;
    }

    public create(): Referee {
        return new PongReferee(
            first(this.balls),
            toArray(this.players),
        );
    }
}
