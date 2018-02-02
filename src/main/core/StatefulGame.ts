import { Game } from '@main/core/Game';
import { addState } from '@main/core/state/addState';
import * as Phaser from 'phaser-ce';

/**
 * Game composed of multiple states.
 */
export class StatefulGame implements Game {
    private readonly game: Phaser.Game;
    private readonly states: Record<string, Phaser.State>;
    private readonly startState: string;

    constructor(game: Phaser.Game, states: Record<string, Phaser.State>, startState: string) {
        this.game = game;
        this.states = states;
        this.startState = startState;
    }

    public start(): void {
        addState(this.game, this.states);
        this.game.state.start(this.startState);
    }
}
