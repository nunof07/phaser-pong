import { EntityPool } from '@core/index';
import { BitmapTextComponent } from '@core/index';
import { Start } from '@base/index';
import { EntitySearch } from '@base/index';
import { BaseBitmapText } from '@base/index';
import { PhaserBitmapText } from '@phaser/index';
import { PhaserBitmapTextFactory } from '@phaser/index';

export class PhaserBitmapTextStart extends Start {
    private entities: EntityPool;
    private factory: PhaserBitmapTextFactory;

    constructor(entities: EntityPool, factory: PhaserBitmapTextFactory) {
        super();
        this.entities = entities;
        this.factory = factory;
    }

    execute(): void {
        new EntitySearch(BaseBitmapText.ID)
            .find(this.entities)
            .forEach(entity => {
                const text = entity.components().get<BitmapTextComponent>(BaseBitmapText.ID);
                entity.components()
                    .attach(
                        new PhaserBitmapText(
                            this.factory.create(text),
                            text.font()
                        )
                    )
                    .detach(text.id());
            });
    }
}