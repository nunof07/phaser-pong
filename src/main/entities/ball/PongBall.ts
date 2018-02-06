import { arcadeBody } from '@main/core/physics/arcadeBody';
import { randomBool } from '@main/core/random/randomBool';
import { Ball } from '@main/entities/ball/Ball';
import * as Phaser from 'phaser-ce';

/**
 * Pong ball.
 */
export class PongBall implements Ball {
    private readonly world: Phaser.World;
    private readonly spriteObj: Phaser.Sprite;
    private readonly velocity: number;
    private readonly blockedObj: Phaser.Signal;
    private isLaunchedFlag: boolean;
    private goLeft: boolean;

    constructor(
        world: Phaser.World,
        sprite: Phaser.Sprite,
        blocked: Phaser.Signal = new Phaser.Signal(),
        velocity: number = 400,
        goLeft: boolean = true,
    ) {
        this.world = world;
        this.spriteObj = sprite;
        this.blockedObj = blocked;
        this.velocity = velocity;
        this.goLeft = goLeft;
        this.isLaunchedFlag = false;
    }

    public reset(goLeft?: boolean): this {
        this.spriteObj.x = this.world.centerX;
        this.spriteObj.y = this.world.centerY;
        this.body().velocity.setTo(0, 0);
        this.goLeft = goLeft === undefined ? this.goLeft : goLeft;
        this.isLaunchedFlag = false;

        return this;
    }

    public launch(): this {
        const xMultiplier: number = this.goLeft ? -1 : 1;
        const yMultiplier: number = randomBool() ? -1 : 1;
        this.body().velocity.x = xMultiplier * this.velocity;
        this.body().velocity.y = yMultiplier * this.velocity;
        this.isLaunchedFlag = true;

        return this;
    }

    public isLaunched(): boolean {
        return this.isLaunchedFlag;
    }

    public sprite(): Phaser.Sprite {
        return this.spriteObj;
    }

    public body(): Phaser.Physics.Arcade.Body {
        return arcadeBody(this.spriteObj);
    }

    public blocked(): Phaser.Signal {
        return this.blockedObj;
    }

    public update(): this {
        if (!this.body().blocked.none) {
            this.blockedObj.dispatch(this.body().blocked);
        }

        return this;
    }
}
