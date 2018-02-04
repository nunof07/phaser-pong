import { Factory } from '@main/core/Factory';
import { Paddle } from '@main/entities/paddle/Paddle';
import { Human } from '@main/entities/player/Human';
import { Player } from '@main/entities/player/Player';
import { Score } from '@main/entities/score/Score';
import * as Phaser from 'phaser-ce';

/**
 * Create a human player.
 */
export class HumanFactory implements Factory<Player>, Iterable<Player> {
    private readonly input: Phaser.Input;
    private readonly paddleFactory: Factory<Paddle>;
    private readonly scoreFactory: Factory<Score>;
    private readonly entities: Set<Player>;

    constructor(input: Phaser.Input, paddleFactory: Factory<Paddle>, scoreFactory: Factory<Score>) {
        this.input = input;
        this.paddleFactory = paddleFactory;
        this.scoreFactory = scoreFactory;
        this.entities = new Set();
    }

    public create(): Human {
        const human: Human = new Human(
            0,
            this.input,
            this.paddleFactory.create(),
            this.scoreFactory.create(),
        );
        this.entities.add(human);

        return human;
    }

    public [Symbol.iterator](): Iterator<Player> {
        return this.entities.values();
    }
}
