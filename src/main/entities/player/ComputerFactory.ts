import { Collection } from '@main/core/collection/Collection';
import { Set } from '@main/core/collection/Set';
import { Unit } from '@main/core/collection/Unit';
import { WriteCollection } from '@main/core/collection/WriteCollection';
import { Factory } from '@main/core/Factory';
import { Ball } from '@main/entities/ball/Ball';
import { Paddle } from '@main/entities/paddle/Paddle';
import { Computer } from '@main/entities/player/Computer';
import { Player } from '@main/entities/player/Player';
import { Score } from '@main/entities/score/Score';

/**
 * Create a computer player.
 */
export class ComputerFactory implements Factory<Player>, Collection<Player> {
    private readonly ball: Unit<Ball>;
    private readonly paddleFactory: Factory<Paddle>;
    private readonly scoreFactory: Factory<Score>;
    private readonly entities: WriteCollection<Player>;

    constructor(
        ball: Unit<Ball>,
        paddleFactory: Factory<Paddle>,
        scoreFactory: Factory<Score>,
        writer: WriteCollection<Player> = new Set<Player>(),
    ) {
        this.ball = ball;
        this.paddleFactory = paddleFactory;
        this.scoreFactory = scoreFactory;
        this.entities = writer;
    }

    public create(): Computer {
        const computer: Computer = new Computer(
            1,
            this.ball.value().body().velocity,
            this.paddleFactory.create(),
            this.scoreFactory.create(),
        );
        this.entities.add(computer);

        return computer;
    }

    public values(): ReadonlyArray<Player> {
        return this.entities.values();
    }
}
