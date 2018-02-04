import { Entity } from '@main/core/Entity';
import { Score } from '@main/entities/score/Score';

/**
 * A player.
 */
export interface Player extends Entity {
    id(): number;
    score(): Score;
}
