import { StatefulGame } from '@main/core/StatefulGame';
import { BootState } from '@main/states/BootState';
import { GameState } from '@main/states/GameState';
import { PreloaderState } from '@main/states/PreloaderState';

/**
 * Start pong.
 */
new StatefulGame(
    new Phaser.Game({
        width: 1024,
        height: 576,
        renderer: Phaser.AUTO,
        parent: 'game-container'
    }),
    {
        boot: new BootState(),
        preloader: new PreloaderState(),
        game: new GameState()
    },
    'boot'
).start();
