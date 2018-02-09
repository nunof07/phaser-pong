import { Unit } from '@main/core/collection/Unit';
import { Factory } from '@main/core/Factory';
import { Music } from '@main/entities/audio/Music';
import { PongMusic } from '@main/entities/audio/PongMusic';
import * as Phaser from 'phaser-ce';

/**
 * Create a music.
 */
export class PongMusicFactory implements Factory<Music> {
    private readonly factory: Unit<Phaser.GameObjectFactory>;

    constructor(factory: Unit<Phaser.GameObjectFactory>) {
        this.factory = factory;
    }

    public create(): Music {
        const music: Music = new PongMusic(this.factory.value().audio('music'));

        music.play();

        return music;
    }
}
