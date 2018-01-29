import { game } from '@main/phaser/game';
import * as Phaser from 'phaser-ce';

/**
 * Keep pixels sharp. Remove smoothing and antialias.
 * @param maybeGame Game or State.
 */
export function sharpPixels(maybeGame: Phaser.Game | Phaser.State): Phaser.Game {
    const gameObj: Phaser.Game = game(maybeGame);

    gameObj.antialias = false;
    gameObj.stage.smoothed = false;
    Phaser.Canvas.setImageRenderingCrisp(gameObj.canvas);

    return gameObj;
}
