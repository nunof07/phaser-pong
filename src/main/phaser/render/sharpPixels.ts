import { game } from '@main/phaser/game/game';
import { MaybeGame } from '@main/phaser/game/MaybeGame';
import * as Phaser from 'phaser-ce';

/**
 * Keep pixels sharp. Remove smoothing and antialias.
 * @param maybeGame Game or has Game.
 */
export function sharpPixels(maybeGame: MaybeGame): Phaser.Game {
    const gameObj: Phaser.Game = game(maybeGame);

    gameObj.antialias = false;
    gameObj.stage.smoothed = false;
    Phaser.Canvas.setImageRenderingCrisp(gameObj.canvas);

    return gameObj;
}
