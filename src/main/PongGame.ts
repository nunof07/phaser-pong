import { Game } from '@main/Game';
import { addState } from '@main/phaser/addState';
import { BootState } from '@main/states/BootState';
import { GameState } from '@main/states/GameState';
import { PreloaderState } from '@main/states/PreloaderState';
import * as Phaser from 'phaser-ce';

/**
 * Pong game, main entry point.
 */
export class Pong implements Game {
    private readonly game: Phaser.Game;

    constructor(game: Phaser.Game) {
        this.game = game;
    }

    public start(): void {
        addState(this.game, {
            boot: new BootState(),
            preloader: new PreloaderState(),
            game: new GameState()
        });
        this.game.state.start('boot');
    }
}
