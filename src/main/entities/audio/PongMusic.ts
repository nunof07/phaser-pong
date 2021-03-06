import { Music } from '@main/entities/audio/Music';
import * as Phaser from 'phaser-ce';

/**
 * Pong music.
 */
export class PongMusic implements Music {
    private readonly sound: Phaser.Sound;

    constructor(sound: Phaser.Sound) {
        this.sound = sound;
    }

    public play(): this {
        if (this.sound.paused) {
            this.sound.resume();
        } else {
            this.sound.play();
        }

        return this;
    }

    public pause(): this {
        this.sound.pause();

        return this;
    }

    public update(): this {
        return this;
    }
}
