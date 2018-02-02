import { Entity } from '@main/core/Entity';

/**
 * Ball.
 */
export interface Ball extends Entity {
    reset(goLeft: boolean): Ball;
    launch(): Ball;
}
