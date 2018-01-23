import { Randomizer } from '@main/Randomizer';

export class Ball {
    private state: Phaser.State;
    private phaserSprite: Phaser.Sprite;
    private isLaunched: boolean;
    private velocity: number;
    private randomizer: Randomizer;
    private goLeft: boolean;

    constructor(
        state: Phaser.State,
        velocity: number = 400,
        goLeft: boolean = true,
        randomizer: Randomizer = new Randomizer()
    ) {
        this.state = state;
        this.velocity = velocity;
        this.isLaunched = false;
        this.randomizer = randomizer;
        this.goLeft = goLeft;
    }

    public create(): void {
        this.phaserSprite = this.state.game.add.sprite(this.state.game.world.centerX, this.state.game.world.centerY, 'ball');
        this.sprite.anchor.setTo(0.5, 0.5);
        this.state.game.physics.arcade.enable(this.sprite);
        this.spriteBody.collideWorldBounds = true;
        this.spriteBody.bounce.setTo(1, 1);
    }

    public reset(goLeft: boolean): void {
        this.sprite.x = this.state.game.world.centerX;
        this.sprite.y = this.state.game.world.centerY;
        this.spriteBody.velocity.setTo(0, 0);
        this.isLaunched = false;
        this.goLeft = goLeft;
    }

    public launch(): void {
        const xMultiplier: number = this.goLeft ? -1 : 1;
        const yMultiplier: number = this.randomizer.bool() ? -1 : 1;
        this.spriteBody.velocity.x = xMultiplier * this.velocity;
        this.spriteBody.velocity.y = yMultiplier * this.velocity;
        this.isLaunched = true;
    }

    public toggle(): boolean {
        if (this.isLaunched) {
            this.reset(this.goLeft);

            return false;
        } else {
            this.launch();

            return true;
        }
    }

    private get spriteBody(): Phaser.Physics.Arcade.Body {
        return <Phaser.Physics.Arcade.Body>this.phaserSprite.body;
    }

    public get sprite(): Phaser.Sprite {
        return this.phaserSprite;
    }
}
