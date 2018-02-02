import { Factory } from '@main/core/Factory';
import { Paddle } from '@main/entities/paddle/Paddle';
import { Human } from '@main/entities/player/Human';
import { Player } from '@main/entities/player/Player';
import { Score } from '@main/entities/score/Score';
import * as Phaser from 'phaser-ce';

/**
 * Create a human player.
 */
export class HumanFactory implements Factory<Player> {
    private readonly input: Phaser.Input;
    private readonly paddleFactory: Factory<Paddle>;
    private readonly scoreFactory: Factory<Score>;

    constructor(input: Phaser.Input, paddleFactory: Factory<Paddle>, scoreFactory: Factory<Score>) {
        this.input = input;
        this.paddleFactory = paddleFactory;
        this.scoreFactory = scoreFactory;
    }

    public create(): Human {
        return new Human(
            this.input,
            this.paddleFactory.create(),
            this.scoreFactory.create(),
        );
    }
}
