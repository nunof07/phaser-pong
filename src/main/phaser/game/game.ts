import { MaybeGame } from '@main/phaser/game/MaybeGame';
import * as Phaser from 'phaser-ce';

/**
 * Resolve game.
 * @param maybeGame Game or has Game.
 */
export function game(maybeGame: MaybeGame): Phaser.Game {
    return (maybeGame instanceof Phaser.Game)
        ? maybeGame
        : maybeGame.game;
}
