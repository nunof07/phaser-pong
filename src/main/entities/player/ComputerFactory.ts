import { Collection } from '@main/core/collection/Collection';
import { first } from '@main/core/collection/first';
import { Set } from '@main/core/collection/Set';
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
    private readonly balls: Collection<Ball>;
    private readonly paddleFactory: Factory<Paddle>;
    private readonly scoreFactory: Factory<Score>;
    private readonly entities: WriteCollection<Player>;

    constructor(
        balls: Collection<Ball>,
        paddleFactory: Factory<Paddle>,
        scoreFactory: Factory<Score>,
        writer: WriteCollection<Player> = new Set<Player>(),
    ) {
        this.balls = balls;
        this.paddleFactory = paddleFactory;
        this.scoreFactory = scoreFactory;
        this.entities = writer;
    }

    public create(): Computer {
        const computer: Computer = new Computer(
            1,
            first(this.balls).body().velocity,
            this.paddleFactory.create(),
            this.scoreFactory.create(),
        );
        this.entities.add(computer);

        return computer;
    }

    public values(): Iterable<Player> {
        return this.entities.values();
    }
}
