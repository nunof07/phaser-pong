import { addStates } from '@main/core/state/addStates';
import { BootState } from '@main/states/BootState';
import { GameState } from '@main/states/GameState';

/**
 * Start pong.
 */
addStates(
    new Phaser.Game({
        width: 1024,
        height: 576,
        renderer: Phaser.AUTO,
        parent: 'game-container',
    }),
    {
        boot: new BootState(
            'game',
            {
                image: [
                    { key: 'paddle', url: 'images/paddle.png' },
                    { key: 'ball', url: 'images/ball.png' },
                ],
                bitmapFont: [
                    { key: 'Press Start 2P', textureUrl: 'fonts/Press_Start_2P_0.png', atlasUrl: 'fonts/Press_Start_2P.fnt' },
                ],
                audio: [
                    { key: 'hit', urls: ['audio/hit.wav'] },
                    { key: 'score', urls: ['audio/score.wav'] },
                    { key: 'wall', urls: ['audio/wall.wav'] },
                    { key: 'music', urls: ['audio/at-night-psg.mp3', 'audio/at-night-psg.ogg'] },
                ],
            },
        ),
        game: new GameState(),
    },
).start('boot');
