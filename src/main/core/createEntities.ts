import { Entity } from '@main/core/Entity';
import { Factory } from '@main/core/Factory';

/**
 * Create a collection of entites.
 * @param factories Factories.
 */
export function createEntities<T extends Entity>(factories: ReadonlyArray<Factory<T>>): ReadonlyArray<Entity> {
    return factories.map((factory: Factory<T>) =>
        factory.create(),
    );
}
