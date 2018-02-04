import { Factory } from '@main/core/Factory';
import { Paddle } from '@main/entities/paddle/Paddle';
import { Computer } from '@main/entities/player/Computer';
import { Player } from '@main/entities/player/Player';
import { Score } from '@main/entities/score/Score';
import * as Phaser from 'phaser-ce';

/**
 * Create a computer player.
 */
export class ComputerFactory implements Factory<Player> {
    private readonly anchor: Phaser.Point;
    private readonly paddleFactory: Factory<Paddle>;
    private readonly scoreFactory: Factory<Score>;

    constructor(anchor: Phaser.Point, paddleFactory: Factory<Paddle>, scoreFactory: Factory<Score>) {
        this.anchor = anchor;
        this.paddleFactory = paddleFactory;
        this.scoreFactory = scoreFactory;
    }

    public create(): Computer {
        return new Computer(
            1,
            this.anchor,
            this.paddleFactory.create(),
            this.scoreFactory.create(),
        );
    }
}
