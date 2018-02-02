import { randomBool } from '@main/core/random/randomBool';
import { Ball } from '@main/entities/ball/Ball';
import * as Phaser from 'phaser-ce';

/**
 * Pong ball.
 */
export class PongBall implements Ball {
    private readonly world: Phaser.World;
    private readonly sprite: Phaser.Sprite;
    private readonly body: Phaser.Physics.Arcade.Body;
    private readonly collision: Phaser.Signal;
    private readonly velocity: number;
    private goLeft: boolean;

    constructor(
        world: Phaser.World,
        sprite: Phaser.Sprite,
        collision: Phaser.Signal = new Phaser.Signal(),
        velocity: number = 400,
        goLeft: boolean = true,
    ) {
        this.world = world;
        this.sprite = sprite;
        this.body = <Phaser.Physics.Arcade.Body>sprite.body;
        this.collision = collision;
        this.velocity = velocity;
        this.goLeft = goLeft;
    }

    public reset(goLeft?: boolean): this {
        this.sprite.x = this.world.centerX;
        this.sprite.y = this.world.centerY;
        this.body.velocity.setTo(0, 0);
        this.goLeft = goLeft === undefined ? this.goLeft : goLeft;

        return this;
    }

    public launch(): this {
        const xMultiplier: number = this.goLeft ? -1 : 1;
        const yMultiplier: number = randomBool() ? -1 : 1;
        this.body.velocity.x = xMultiplier * this.velocity;
        this.body.velocity.y = yMultiplier * this.velocity;

        return this;
    }

    public worldCollision(): Phaser.Signal {
        return this.collision;
    }

    public update(): this {
        if (!this.body.blocked.none) {
            this.collision.dispatch(this.body.blocked);
        }

        return this;
    }
}
