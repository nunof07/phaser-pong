import { Factory } from '@main/core/Factory';
import { PongBall } from '@main/entities/ball/PongBall';
import * as Phaser from 'phaser-ce';

/**
 * Create a ball.
 */
export class PongBallFactory implements Factory {
    private readonly game: Phaser.Game;

    constructor(game: Phaser.Game) {
        this.game = game;
    }

    public create(): PongBall {
        const sprite: Phaser.Sprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'ball');
        sprite.anchor.setTo(0.5, 0.5);
        (<Phaser.Physics.Arcade.Body>sprite.body).collideWorldBounds = true;
        (<Phaser.Physics.Arcade.Body>sprite.body).bounce.setTo(1, 1);
        this.game.physics.arcade.enable(sprite);

        return new PongBall(this.game.world, sprite);
    }
}
