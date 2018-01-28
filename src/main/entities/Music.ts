/**
 * Music.
 */
export class Music {
    private readonly state: Phaser.State;
    private sound: Phaser.Sound;

    constructor(state: Phaser.State) {
        this.state = state;
    }

    public create(): void {
        this.sound = this.state.game.add.audio('music');
    }

    public toggle(play: boolean): boolean {
        if (play) {
            if (this.sound.paused) {
                this.sound.resume();
            } else {
                this.sound.play();
            }

            return true;
        } else {
            this.sound.pause();

            return false;
        }
    }

    public pause(): void {
        this.sound.pause();
    }
}
