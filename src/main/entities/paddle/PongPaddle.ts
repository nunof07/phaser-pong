import { Paddle } from '@main/entities/paddle/Paddle';
import * as Phaser from 'phaser-ce';

/**
 * Pong paddle.
 */
export class PongPaddle implements Paddle {
    private readonly sprite: Phaser.Sprite;
    private readonly minY: number;
    private readonly maxY: number;

    constructor(sprite: Phaser.Sprite, minY: number, maxY: number) {
        this.sprite = sprite;
        this.minY = minY;
        this.maxY = maxY;
    }

    public move(y: number): this {
        this.sprite.y = y;

        if (this.sprite.y < this.minY) {
            this.sprite.y = this.minY;
        } else if (this.sprite.y > this.maxY) {
            this.sprite.y = this.maxY;
        }

        return this;
    }

    public update(): this {
        return this;
    }
}
