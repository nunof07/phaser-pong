import { Collection } from '@main/core/collection/Collection';
import { Scalar } from '@main/core/collection/Scalar';
import { Unit } from '@main/core/collection/Unit';
import { WriteUnit } from '@main/core/collection/WriteUnit';
import { Factory } from '@main/core/Factory';
import { Ball } from '@main/entities/ball/Ball';
import { Player } from '@main/entities/player/Player';
import { PongReferee } from '@main/entities/referee/PongReferee';
import { Referee } from '@main/entities/referee/Referee';

/**
 * Creates a pong referee.
 */
export class PongRefereeFactory implements Factory<Referee>, Unit<Referee> {
    private readonly ball: Unit<Ball>;
    private readonly players: Collection<Player>;
    private readonly last: WriteUnit<Referee>;

    constructor(ball: Unit<Ball>, players: Collection<Player>, writer: WriteUnit<Referee> = new Scalar<Referee>()) {
        this.ball = ball;
        this.players = players;
        this.last = writer;
    }

    public create(): Referee {
        const ref: Referee = new PongReferee(
            this.ball.value(),
            this.players.values(),
        );
        this.last.update(ref);

        return ref;
    }

    public value(): Referee {
        return this.last.value();
    }
}
