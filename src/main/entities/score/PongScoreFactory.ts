import { Factory } from '@main/core/Factory';
import { Point } from '@main/core/Point';
import { PongScore } from '@main/entities/score/PongScore';
import * as Phaser from 'phaser-ce';

/**
 * Create a score.
 */
export class PongScoreFactory implements Factory {
    private readonly factory: Phaser.GameObjectFactory;
    private readonly location: Point;

    constructor(factory: Phaser.GameObjectFactory, location: Point) {
        this.factory = factory;
        this.location = location;
    }

    public create(): PongScore {
        return new PongScore(
            this.factory.bitmapText(
                Math.floor(this.location.x),
                Math.floor(this.location.y),
                'Press Start 2P',
                '0',
                32,
            ),
        );
    }
}
