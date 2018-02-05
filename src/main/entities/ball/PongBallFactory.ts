import { Collection } from '@main/core/collection/Collection';
import { Set } from '@main/core/collection/Set';
import { WriteCollection } from '@main/core/collection/WriteCollection';
import { Factory } from '@main/core/Factory';
import { arcadeBody } from '@main/core/physics/arcadeBody';
import { Ball } from '@main/entities/ball/Ball';
import { PongBall } from '@main/entities/ball/PongBall';
import * as Phaser from 'phaser-ce';

/**
 * Create a ball.
 */
export class PongBallFactory implements Factory<Ball>, Collection<Ball> {
    private readonly game: Phaser.Game;
    private readonly entities: WriteCollection<Ball>;

    constructor(game: Phaser.Game, writer: WriteCollection<Ball> = new Set<Ball>()) {
        this.game = game;
        this.entities = writer;
    }

    public create(): PongBall {
        const sprite: Phaser.Sprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'ball');
        sprite.anchor.setTo(0.5, 0.5);
        arcadeBody(sprite).collideWorldBounds = true;
        arcadeBody(sprite).bounce.setTo(1, 1);
        this.game.physics.arcade.enable(sprite);

        const ball: PongBall = new PongBall(this.game.world, sprite);
        this.entities.add(ball);

        return ball;
    }

    public values(): Iterable<Ball> {
        return this.entities.values();
    }
}
