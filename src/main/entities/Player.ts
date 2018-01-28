import { Paddle } from '@main/entities/Paddle';
import { Score } from '@main/entities/Score';

/**
 * Player.
 */
export interface Player {
    paddle: Paddle;
    score: Score;
    create(): void;
    update(): void;
}
