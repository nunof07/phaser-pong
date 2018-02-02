import { Entity } from '@main/core/Entity';

/**
 * Paddle.
 */
export interface Paddle extends Entity {
    setPositionY(y: number): this;
    setVelocityY(y: number): this;
}
