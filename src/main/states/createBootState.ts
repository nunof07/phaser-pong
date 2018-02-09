import { BootState } from '@main/states/BootState';

/**
 * Creates the boot state.
 * @param nextState Next state to load after boot.
 */
export function createBootState(nextState: string): BootState {
    return new BootState(
        nextState,
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
    );
}
