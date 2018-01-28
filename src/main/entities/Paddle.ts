/**
 * Paddle.
 */
export class Paddle {
    private readonly state: Phaser.State;
    private phaserSprite: Phaser.Sprite;
    private minY: number;
    private maxY: number;

    constructor(state: Phaser.State) {
        this.state = state;
    }

    public create(x: number, y: number): void {
        this.phaserSprite = this.state.game.add.sprite(x, y, 'paddle');
        this.phaserSprite.anchor.setTo(0.5, 0.5);
        this.state.game.physics.arcade.enable(this.phaserSprite);
        this.spriteBody.collideWorldBounds = true;
        this.spriteBody.immovable = true;
        this.phaserSprite.scale.setTo(0.5, 0.5);
        this.minY = this.phaserSprite.height * 0.5;
        this.maxY = this.state.game.world.height - this.phaserSprite.height * 0.5;
    }

    public move(y: number): void {
        this.phaserSprite.y = y;

        if (this.phaserSprite.y < this.minY) {
            this.phaserSprite.y = this.minY;
        } else if (this.phaserSprite.y > this.maxY) {
            this.phaserSprite.y = this.maxY;
        }
    }

    private get spriteBody(): Phaser.Physics.Arcade.Body {
        return <Phaser.Physics.Arcade.Body>this.phaserSprite.body;
    }

    public get sprite(): Phaser.Sprite {
        return this.phaserSprite;
    }
}
