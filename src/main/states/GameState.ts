import { createEntities } from '@main/core/createEntities';
import { Entity } from '@main/core/Entity';
import { Factory } from '@main/core/Factory';
// import { Ball } from '@main/entities/Ball';
// import { Computer } from '@main/entities/Computer';
// import { Human } from '@main/entities/Human';
// import { Music } from '@main/entities/Music';
// import { Paddle } from '@main/entities/Paddle';
// import { Player } from '@main/entities/Player';
import * as Phaser from 'phaser-ce';

/**
 * Main game state.
 */
export class GameState extends Phaser.State {
    private readonly factories: ReadonlyArray<Factory<Entity>>;
    private entities: ReadonlyArray<Entity>;

    constructor(factories: ReadonlyArray<Factory<Entity>>) {
        super();
        this.factories = factories;
        this.entities = [];
    }

    public create(): void {
        this.entities = createEntities(this.factories);
        // this.game.input.onDown.add(
        //     () => {
        //         this.music.toggle(
        //             this.ball.toggle(),
        //         );
        //     },
        //     this,
        // );
    }

    public update(): void {
        this.entities.forEach((entity: Entity) => {
            entity.update();
        });
        // this.players.forEach((player: Player) => {
        //     this.game.physics.arcade.collide(
        //         player.paddle.sprite,
        //         this.ball.sprite,
        //         () => this.game.sound.play('hit'),
        //     );
        // });

        // if (this.ballBody.blocked.up || this.ballBody.blocked.down) {
        //     this.game.sound.play('wall');
        // }
    }

    // private get ballBody(): Phaser.Physics.Arcade.Body {
    //     return <Phaser.Physics.Arcade.Body>this.ball.sprite.body;
    // }

    // public score(player: Player, goLeft: boolean): void {
    //     this.game.sound.play('score');
    //     this.music.pause();
    // }

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
