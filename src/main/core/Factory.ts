import { Entity } from '@main/core/Entity';

/**
 * Create an entity.
 */
export interface Factory<T extends Entity> {
    create(): T;
}
