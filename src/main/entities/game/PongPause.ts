import { Pause } from '@main/entities/game/Pause';
import * as Phaser from 'phaser-ce';

/**
 * Handle Pong play/pause event.
 */
export class PongPause implements Pause {
    private readonly game: Phaser.Game;
    private readonly changedObj: Phaser.Signal;

    constructor(game: Phaser.Game, changed: Phaser.Signal = new Phaser.Signal()) {
        this.game = game;
        this.changedObj = changed;
    }

    public play(): this {
        this.game.paused = false;
        this.changedObj.dispatch(this.game.paused);

        return this;
    }

    public pause(): this {
        this.game.paused = true;
        this.changedObj.dispatch(this.game.paused);

        return this;
    }

    public toggle(): this {
        if (this.game.paused) {
            this.play();
        } else {
            this.pause();
        }

        return this;
    }

    public changed(): Phaser.Signal {
        return this.changedObj;
    }

    public update(): this {
        return this;
    }
}
