import { BootState } from '@main/states/BootState';
import { GameState } from '@main/states/GameState';
import { PreloaderState } from '@main/states/PreloaderState';

/**
 * Pong game, main entry point.
 */
export class PongGame {
    private readonly game: Phaser.Game;

    constructor() {
        this.game = new Phaser.Game({
            width: 1024,
            height: 576,
            renderer: Phaser.AUTO,
            parent: 'game-container'
        });
    }

    public start(): void {
        this.game.state.add('boot', new BootState());
        this.game.state.add('preloader', new PreloaderState());
        this.game.state.add('game', new GameState());
        this.game.state.start('boot');
    }
}
