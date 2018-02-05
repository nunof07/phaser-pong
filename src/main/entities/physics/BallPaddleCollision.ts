import { Entity } from '@main/core/Entity';
import * as Phaser from 'phaser-ce';

/**
 * Handles ball and paddle collisions.
 */
export interface BallPaddleCollision extends Entity {
    collided(): Phaser.Signal;
}
