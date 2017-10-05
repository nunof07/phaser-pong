import Component from '../core/Component';
import ComponentId from '../core/ComponentId';
import CoreComponentId from '../core/CoreComponentId';
import BitmapFont from '../assets/BitmapFont';
import Position from '../assets/Position';

export default class BitmapText implements Component {
    public static readonly ID = new CoreComponentId('bitmapText');

    private textPosition: Position;
    private textFont: BitmapFont;
    private textSize: number;
    private text: string;

    constructor(position: Position, font: BitmapFont, size: number, text: string = '') {
        this.textPosition = position;
        this.textFont = font;
        this.textSize = size;
        this.text = text;
    }

    id(): ComponentId {
        return BitmapText.ID;
    }

    position(): Position {
        return this.textPosition;
    }

    font(): BitmapFont {
        return this.textFont;
    }

    size(): number {
        return this.textSize;
    }

    value(): string {
        return this.text;
    }

    update(value: string): BitmapText {
        this.text = value;

        return this;
    }

}