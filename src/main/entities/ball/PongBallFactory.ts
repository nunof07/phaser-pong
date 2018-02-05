import { Scalar } from '@main/core/collection/Scalar';
import { Unit } from '@main/core/collection/Unit';
import { WriteUnit } from '@main/core/collection/WriteUnit';
import { Factory } from '@main/core/Factory';
import { arcadeBody } from '@main/core/physics/arcadeBody';
import { Ball } from '@main/entities/ball/Ball';
import { PongBall } from '@main/entities/ball/PongBall';
import * as Phaser from 'phaser-ce';

/**
 * Create a ball.
 */
export class PongBallFactory implements Factory<Ball>, Unit<Ball> {
    private readonly game: Phaser.Game;
    private readonly last: WriteUnit<Ball>;

    constructor(game: Phaser.Game, writer: WriteUnit<Ball> = new Scalar<Ball>()) {
        this.game = game;
        this.last = writer;
    }

    public create(): PongBall {
        const sprite: Phaser.Sprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'ball');
        sprite.anchor.setTo(0.5, 0.5);
        arcadeBody(sprite).collideWorldBounds = true;
        arcadeBody(sprite).bounce.setTo(1, 1);
        this.game.physics.arcade.enable(sprite);

        const ball: PongBall = new PongBall(this.game.world, sprite);
        this.last.update(ball);

        return ball;
    }

    public value(): Ball {
        return this.last.value();
    }
}
