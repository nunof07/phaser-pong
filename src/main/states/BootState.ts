import { scaleToFitScreen } from '@main/phaser/scaleToFitScreen';
import { sharpPixels } from '@main/phaser/sharpPixels';
import * as Phaser from 'phaser-ce';

/**
 * Boot state. Setup graphics mode and start preloader.
 */
export class BootState extends Phaser.State {
    constructor() {
        super();
    }

    public init(): void {
        scaleToFitScreen(this);
        sharpPixels(this);
    }

    public update(): void {
        this.game.state.start('preloader');
    }
}
