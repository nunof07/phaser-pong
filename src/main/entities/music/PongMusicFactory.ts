import { Factory } from '@main/core/Factory';
import { Music } from '@main/entities/music/Music';
import { PongMusic } from '@main/entities/music/PongMusic';
import * as Phaser from 'phaser-ce';

/**
 * Create a music.
 */
export class PongMusicFactory implements Factory<Music> {
    private readonly factory: Phaser.GameObjectFactory;

    constructor(factory: Phaser.GameObjectFactory) {
        this.factory = factory;
    }

    public create(): PongMusic {
        return new PongMusic(this.factory.audio('music'));
    }
}
