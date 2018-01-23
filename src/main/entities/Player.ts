import { Paddle } from '@main/entities/Paddle';
import { Score } from '@main/entities/Score';

export interface Player {
    paddle: Paddle;
    score: Score;
    create(): void;
    update(): void;
}
