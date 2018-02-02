import { Score } from '@main/entities/score/Score';
import * as Phaser from 'phaser-ce';

/**
 * Pong score.
 */
export class PongScore implements Score {
    private readonly bitmapText: Phaser.BitmapText;
    private value: number;

    constructor(bitmapText: Phaser.BitmapText, value: number = 0) {
        this.bitmapText = bitmapText;
        this.value = value;
    }

    public increase(): this {
        this.value += 1;
        this.bitmapText.text = `${this.value}`;

        return this;
    }

    public update(): this {
        return this;
    }
}
