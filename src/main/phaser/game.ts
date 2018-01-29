import * as Phaser from 'phaser-ce';

/**
 * Resolve game.
 * @param maybeGame Game or State.
 */
export function game(maybeGame: Phaser.Game | Phaser.State): Phaser.Game {
    if (maybeGame instanceof Phaser.Game) {
        return maybeGame;
    } else {
        return maybeGame.game;
    }
}
