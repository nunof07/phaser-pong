import { Entity } from '@main/core/Entity';

/**
 * Music.
 */
export interface Music extends Entity {
    play(): this;
    pause(): this;
}
