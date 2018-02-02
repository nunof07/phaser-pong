import { Ball } from '@main/entities/Ball';
import { Computer } from '@main/entities/Computer';
import { Human } from '@main/entities/Human';
import { Music } from '@main/entities/Music';
import { Paddle } from '@main/entities/Paddle';
import { Player } from '@main/entities/Player';
import * as Phaser from 'phaser-ce';

/**
 * Main game state.
 */
export class GameState extends Phaser.State {
    private readonly players: ReadonlyArray<Player>;
    private readonly ball: Ball;
    private readonly music: Music;
    private readonly scored: Phaser.Signal;
    //private isPaused: boolean;

    constructor() {
        super();
        this.ball = new Ball(this);
        this.players = [
            new Human(this, new Paddle(this)),
            new Computer(this, new Paddle(this), this.ball),
        ];
        this.music = new Music(this);
        this.scored = new Phaser.Signal();
        //this.isPaused = true;
    }

    public create(): void {
        this.music.create();
        this.ball.create();
        this.players.forEach((player: Player) => {
            player.create();
        });
        this.game.input.onDown.add(
            () => {
                this.music.toggle(
                    this.ball.toggle(),
                );
            },
            this,
        );
    }

    public update(): void {
        this.players.forEach((player: Player) => {
            player.update();
            this.game.physics.arcade.collide(
                player.paddle.sprite,
                this.ball.sprite,
                () => this.game.sound.play('hit'),
            );
        });

        if (this.ballBody.blocked.up || this.ballBody.blocked.down) {
            this.game.sound.play('wall');
        }

        if (this.ballBody.blocked.left) {
            this.score(this.players[1], false);
        }

        if (this.ballBody.blocked.right) {
            this.score(this.players[0], true);
        }
    }

    private get ballBody(): Phaser.Physics.Arcade.Body {
        return <Phaser.Physics.Arcade.Body>this.ball.sprite.body;
    }

    public score(player: Player, goLeft: boolean): void {
        player.score.increase();
        this.game.sound.play('score');
        this.ball.reset(goLeft);
        this.music.pause();
        this.scored.dispatch(player, goLeft);
    }

    // private togglePause(): this {
    //     if (this.isPaused) {
    //         this.play();
    //     } else {
    //         this.pause();
    //     }

    //     return this;
    // }

    // public pause(): this {
    //     if (!this.isPaused) {
    //         this.music.pause();
    //         this.ball.reset();
    //         this.isPaused = true;
    //     }

    //     return this;
    // }

    // public play(): this {
    //     if (!this.isPaused) {
    //         this.music.play();
    //         this.ball.launch();
    //         this.isPaused = false;
    //     }

    //     return this;
    // }
}
