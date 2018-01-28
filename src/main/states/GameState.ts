import { Ball } from '@main/entities/Ball';
import { Computer } from '@main/entities/Computer';
import { Human } from '@main/entities/Human';
import { Music } from '@main/entities/Music';
import { Paddle } from '@main/entities/Paddle';
import { Player } from '@main/entities/Player';

export class GameState extends Phaser.State {
    private players: Player[];
    private ball: Ball;
    private music: Music;

    constructor() {
        super();
        this.ball = new Ball(this);
        this.players = [
            new Human(this, new Paddle(this)),
            new Computer(this, new Paddle(this), this.ball)
        ];
        this.music = new Music(this);
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
                    this.ball.toggle()
                );
            },
            this
        );
    }

    public update(): void {
        this.players.forEach((player: Player) => {
            player.update();
            this.game.physics.arcade.collide(
                player.paddle.sprite,
                this.ball.sprite,
                () => this.game.sound.play('hit')
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
    }
}