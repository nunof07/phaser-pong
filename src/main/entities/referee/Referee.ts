import { Entity } from '@main/core/Entity';
import { Player } from '@main/entities/player/Player';
import * as Phaser from 'phaser-ce';

/**
 * Referee. Determines scores.
 */
export interface Referee extends Entity {
    score(player: Player): this;
    scored(): Phaser.Signal;
}
