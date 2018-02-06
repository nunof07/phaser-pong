import { Scalar } from '@main/core/collection/Scalar';
import { Unit } from '@main/core/collection/Unit';
import { WriteUnit } from '@main/core/collection/WriteUnit';
import { Factory } from '@main/core/Factory';
import { Pause } from '@main/entities/game/Pause';
import { PongPause } from '@main/entities/game/PongPause';
import * as Phaser from 'phaser-ce';

/**
 * Create a ball.
 */
export class PongPauseFactory implements Factory<Pause>, Unit<Pause> {
    private readonly game: Phaser.Game;
    private readonly last: WriteUnit<Pause>;

    constructor(game: Phaser.Game, writer: WriteUnit<Pause> = new Scalar<Pause>()) {
        this.game = game;
        this.last = writer;
    }

    public create(): Pause {
        const pause: Pause = new PongPause(this.game);

        pause.pause();
        this.game.input.onDown.add(() => {
            pause.toggle();
        });

        return pause;
    }

    public value(): Pause {
        return this.last.value();
    }
}
