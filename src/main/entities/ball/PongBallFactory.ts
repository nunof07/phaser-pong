import { Factory } from '@main/core/Factory';
import { arcadeBody } from '@main/core/physics/arcadeBody';
import { Ball } from '@main/entities/ball/Ball';
import { PongBall } from '@main/entities/ball/PongBall';
import * as Phaser from 'phaser-ce';

/**
 * Create a ball.
 */
export class PongBallFactory implements Factory<Ball> {
    private readonly game: Phaser.Game;

    constructor(game: Phaser.Game) {
        this.game = game;
    }

    public create(): PongBall {
        const sprite: Phaser.Sprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'ball');
        sprite.anchor.setTo(0.5, 0.5);
        arcadeBody(sprite).collideWorldBounds = true;
        arcadeBody(sprite).bounce.setTo(1, 1);
        this.game.physics.arcade.enable(sprite);

        return new PongBall(this.game.world, sprite);
    }
}
