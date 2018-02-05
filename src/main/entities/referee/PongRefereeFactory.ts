import { Collection } from '@main/core/collection/Collection';
import { Unit } from '@main/core/collection/Unit';
import { Factory } from '@main/core/Factory';
import { Ball } from '@main/entities/ball/Ball';
import { Player } from '@main/entities/player/Player';
import { PongReferee } from '@main/entities/referee/PongReferee';
import { Referee } from '@main/entities/referee/Referee';

/**
 * Creates a pong referee.
 */
export class PongRefereeFactory implements Factory<Referee> {
    private readonly ball: Unit<Ball>;
    private readonly players: Collection<Player>;

    constructor(ball: Unit<Ball>, players: Collection<Player>) {
        this.ball = ball;
        this.players = players;
    }

    public create(): Referee {
        return new PongReferee(
            this.ball.value(),
            this.players.values(),
        );
    }
}
