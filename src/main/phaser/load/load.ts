import { LoadDefinition } from '@main/phaser/load/LoadDefinition';
import { loader } from '@main/phaser/load/loader';
import { MaybeLoader } from '@main/phaser/load/MaybeLoader';
import * as Phaser from 'phaser-ce';

/**
 * Load assets.
 * @param maybeLoader Loader or has Loader.
 * @param assets Assets to be loaded.
 */
export function load(maybeLoader: MaybeLoader, assets: LoadDefinition): Phaser.Loader {
    const phaserLoader: Phaser.Loader = loader(maybeLoader);

    if (assets.image) {
        assets.image.forEach((image: { key: string; url: string }) => {
            phaserLoader.image(image.key, image.url);
        });
    }

    if (assets.audio) {
        assets.audio.forEach((audio: { key: string; urls: ReadonlyArray<string> }) => {
            phaserLoader.audio(audio.key, audio.urls);
        });
    }

    if (assets.bitmapFont) {
        assets.bitmapFont.forEach((bitmapFont: { key: string; textureUrl: string; atlasUrl: string }) => {
            phaserLoader.bitmapFont(bitmapFont.key, bitmapFont.textureUrl, bitmapFont.atlasUrl);
        });
    }

    return phaserLoader;
}
