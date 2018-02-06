import { createEntities } from '@main/core/createEntities';
import { Entity } from '@main/core/Entity';
import { Factory } from '@main/core/Factory';
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
    }

    public update(): void {
        this.entities.forEach((entity: Entity) => {
            entity.update();
        });
    }
}
