import { Entity } from '@main/core/Entity';

/**
 * Paddle.
 */
export interface Paddle extends Entity {
    move(y: number): this;
}
