import { Entity } from '@main/core/Entity';

/**
 * Score board.
 */
export interface Score extends Entity {
    increase(): this;
}
