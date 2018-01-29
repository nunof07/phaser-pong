import { Pong } from '@main/PongGame';

/**
 * Start pong.
 */
new Pong(
    new Phaser.Game({
        width: 1024,
        height: 576,
        renderer: Phaser.AUTO,
        parent: 'game-container'
    })
).start();
