import { Factory } from '@main/core/Factory';
import { PongMusic } from '@main/entities/music/PongMusic';
import * as Phaser from 'phaser-ce';

/**
 * Create a music.
 */
export class PongMusicFactory implements Factory {
    private readonly game: Phaser.Game;

    constructor(game: Phaser.Game) {
        this.game = game;
    }

    public create(): PongMusic {
        return new PongMusic(this.game.add.audio('music'));
    }
}
