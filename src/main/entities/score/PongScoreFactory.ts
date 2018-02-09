import { Unit } from '@main/core/collection/Unit';
import { Factory } from '@main/core/Factory';
import { Point } from '@main/core/Point';
import { PongScore } from '@main/entities/score/PongScore';
import { Score } from '@main/entities/score/Score';
import * as Phaser from 'phaser-ce';

/**
 * Create a score.
 */
export class PongScoreFactory implements Factory<Score> {
    private readonly factory: Unit<Phaser.GameObjectFactory>;
    private readonly location: Unit<Point>;

    constructor(factory: Unit<Phaser.GameObjectFactory>, location: Unit<Point>) {
        this.factory = factory;
        this.location = location;
    }

    public create(): Score {
        return new PongScore(
            this.factory.value().bitmapText(
                Math.floor(this.location.value().x),
                Math.floor(this.location.value().y),
                'Press Start 2P',
                '0',
                32,
            ),
        );
    }
}
