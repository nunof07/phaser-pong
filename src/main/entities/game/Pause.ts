import { Entity } from '@main/core/Entity';
import * as Phaser from 'phaser-ce';

/**
 * Handle play/pause state.
 */
export interface Pause extends Entity {
    play(): this;
    pause(): this;
    toggle(): this;
    changed(): Phaser.Signal;
}
