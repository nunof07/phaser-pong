import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { IsBlank } from '@main/system/scalar/index';
import { Scalar } from '@main/system/scalar/index';
import { ScalarLike } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';
import { Ternary } from '@main/system/scalar/index';

/**
 * Cached scalar.
 */
@final
@frozen
export class WithFallback<T> implements Scalar<T> {
    /**
     * Type determinant.
     */
    public readonly '@@__IS_SYSTEM_SCALAR__@@': true = true;

    /**
     * Source.
     */
    private readonly scalar: Scalar<T>;

    /**
     * Ctor.
     * @param value Value.
     * @param fallback Fallback value.
     */
    constructor(value: ScalarLike<T>, fallback: ScalarLike<T>) {
        this.scalar = new Ternary(
            new IsBlank(value),
            new ScalarOf(fallback),
            new ScalarOf(value)
        );
    }

    /**
     * Get the value.
     */
    public value(): T {
        return this.scalar.value();
    }
}
