import { load } from '@main/core/load/load';
import { LoadDefinition } from '@main/core/load/LoadDefinition';
import { sharpPixels } from '@main/core/render/sharpPixels';
import { scaleToFitScreen } from '@main/core/scale/scaleToFitScreen';
import * as Phaser from 'phaser-ce';

/**
 * Boot state. Setup graphics mode and start preloader.
 */
export class BootState extends Phaser.State {
    private readonly nextState: string;
    private readonly assets: LoadDefinition;

    /**
     * Constructor.
     * @param nextState Next state to load after boot.
     * @param assets Assets to load.
     */
    constructor(nextState: string, assets: LoadDefinition) {
        super();
        this.nextState = nextState;
        this.assets = assets;
    }

    public init(): void {
        scaleToFitScreen(this);
        sharpPixels(this);
    }

    public preload(): void {
        load(this, this.assets);
    }

    public update(): void {
        this.game.state.start(this.nextState);
    }
}
