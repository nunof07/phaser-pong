import { Entity } from '@main/core/Entity';

/**
 * Sound effects.
 */
export interface SoundFx extends Entity {
    playHit(): this;
    playScore(): this;
    playWall(): this;
}
