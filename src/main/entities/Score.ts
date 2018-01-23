export class Score {
    private state: Phaser.State;
    private bitmap: Phaser.BitmapText;
    private value: number;

    constructor(state: Phaser.State) {
        this.state = state;
        this.value = 0;
    }

    public create(x: number, y: number): void {
        this.bitmap = this.state.game.add.bitmapText(Math.floor(x), Math.floor(y), 'Press Start 2P', '0', 32);
    }

    public increase(): void {
        this.value += 1;
        this.bitmap.text = `${this.value}`;
    }
}
