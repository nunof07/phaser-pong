import { Collection } from '@main/core/collection/Collection';
import { Set } from '@main/core/collection/Set';
import { Unit } from '@main/core/collection/Unit';
import { WriteCollection } from '@main/core/collection/WriteCollection';
import { Factory } from '@main/core/Factory';
import { Paddle } from '@main/entities/paddle/Paddle';
import { Human } from '@main/entities/player/Human';
import { Player } from '@main/entities/player/Player';
import { Score } from '@main/entities/score/Score';
import * as Phaser from 'phaser-ce';

/**
 * Create a human player.
 */
export class HumanFactory implements Factory<Player>, Collection<Player> {
    private readonly input: Unit<Phaser.Input>;
    private readonly paddleFactory: Factory<Paddle>;
    private readonly scoreFactory: Factory<Score>;
    private readonly entities: WriteCollection<Player>;

    constructor(
        input: Unit<Phaser.Input>,
        paddleFactory: Factory<Paddle>,
        scoreFactory: Factory<Score>,
        writer: WriteCollection<Player> = new Set<Player>(),
    ) {
        this.input = input;
        this.paddleFactory = paddleFactory;
        this.scoreFactory = scoreFactory;
        this.entities = writer;
    }

    public create(): Player {
        const human: Human = new Human(
            0,
            this.input.value(),
            this.paddleFactory.create(),
            this.scoreFactory.create(),
        );
        this.entities.add(human);

        return human;
    }

    public values(): ReadonlyArray<Player> {
        return this.entities.values();
    }
}
