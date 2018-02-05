import { arcadeBody } from '@main/core/physics/arcadeBody';
import { Paddle } from '@main/entities/paddle/Paddle';
import * as Phaser from 'phaser-ce';

/**
 * Pong paddle.
 */
export class PongPaddle implements Paddle {
    private readonly spriteObj: Phaser.Sprite;
    private readonly minY: number;
    private readonly maxY: number;

    constructor(sprite: Phaser.Sprite, minY: number, maxY: number) {
        this.spriteObj = sprite;
        this.minY = minY;
        this.maxY = maxY;
    }

    public setPositionY(y: number): this {
        this.spriteObj.y = y;

        if (this.spriteObj.y < this.minY) {
            this.spriteObj.y = this.minY;
        } else if (this.spriteObj.y > this.maxY) {
            this.spriteObj.y = this.maxY;
        }

        return this;
    }

    public setVelocityY(y: number): this {
        arcadeBody(this.spriteObj).velocity.y = y;

        return this;
    }

    public sprite(): Phaser.Sprite {
        return this.spriteObj;
    }

    public update(): this {
        return this;
    }
}
