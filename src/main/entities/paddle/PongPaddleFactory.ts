import { Factory } from '@main/core/Factory';
import { arcadeBody } from '@main/core/physics/arcadeBody';
import { Point } from '@main/core/Point';
import { PongPaddle } from '@main/entities/paddle/PongPaddle';
import * as Phaser from 'phaser-ce';

/**
 * Create a paddle.
 */
export class PongPaddleFactory implements Factory {
    private readonly game: Phaser.Game;
    private readonly location: Point;

    constructor(game: Phaser.Game, location: Point) {
        this.game = game;
        this.location = location;
    }

    public create(): PongPaddle {
        const sprite: Phaser.Sprite = this.game.add.sprite(this.location.x, this.location.y, 'paddle');
        sprite.anchor.setTo(0.5, 0.5);
        this.game.physics.arcade.enable(sprite);
        arcadeBody(sprite).collideWorldBounds = true;
        arcadeBody(sprite).immovable = true;
        sprite.scale.setTo(0.5, 0.5);

        const minY: number = sprite.height * 0.5;
        const maxY: number = this.game.world.height - sprite.height * 0.5;

        return new PongPaddle(sprite, minY, maxY);
    }
}
