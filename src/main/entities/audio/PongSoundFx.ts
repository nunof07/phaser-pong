import { SoundFx } from '@main/entities/audio/SoundFx';
import * as Phaser from 'phaser-ce';

/**
 * Pong sound effects.
 */
export class PongSoundFx implements SoundFx {
    private readonly sound: Phaser.SoundManager;

    constructor(sound: Phaser.SoundManager) {
        this.sound = sound;
    }

    public playHit(): this {
        this.sound.play('hit');

        return this;
    }

    public playScore(): this {
        this.sound.play('score');

        return this;
    }

    public playWall(): this {
        this.sound.play('wall');

        return this;
    }

    public update(): this {
        return this;
    }
}
