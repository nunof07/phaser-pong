import { Factory } from '@main/core/Factory';
import { first } from '@main/core/iterable/first';
import { Ball } from '@main/entities/ball/Ball';
import { Paddle } from '@main/entities/paddle/Paddle';
import { Computer } from '@main/entities/player/Computer';
import { Player } from '@main/entities/player/Player';
import { Score } from '@main/entities/score/Score';

/**
 * Create a computer player.
 */
export class ComputerFactory implements Factory<Player>, Iterable<Player> {
    private readonly balls: Iterable<Ball>;
    private readonly paddleFactory: Factory<Paddle>;
    private readonly scoreFactory: Factory<Score>;
    private readonly entities: Set<Player>;

    constructor(balls: Iterable<Ball>, paddleFactory: Factory<Paddle>, scoreFactory: Factory<Score>) {
        this.balls = balls;
        this.paddleFactory = paddleFactory;
        this.scoreFactory = scoreFactory;
        this.entities = new Set();
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

    public [Symbol.iterator](): Iterator<Player> {
        return this.entities.values();
    }
}
