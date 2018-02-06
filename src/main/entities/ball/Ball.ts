import { Entity } from '@main/core/Entity';
import * as Phaser from 'phaser-ce';

/**
 * Ball.
 */
export interface Ball extends Entity {
    reset(goLeft?: boolean): Ball;
    launch(): Ball;
    isLaunched(): boolean;
    sprite(): Phaser.Sprite;
    body(): Phaser.Physics.Arcade.Body;
    blocked(): Phaser.Signal;
}
