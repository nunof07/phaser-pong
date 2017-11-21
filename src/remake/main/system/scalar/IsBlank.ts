import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { IsNull } from '@main/system/scalar/index';
import { IsUndefined } from '@main/system/scalar/index';
import { Scalar } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';

/**
 * Determines if scalar or value is null or undefined.
 */
@final
@frozen
export class IsBlank<T> implements Scalar<boolean> {
    /**
     * Type determinant.
     */
    public readonly '@@__IS_SYSTEM_SCALAR__@@': true = true;

    /**
     * Scalar.
     */
    private readonly scalar: Scalar<T>;

    /**
     * Ctor.
     * @param scalar Scalar.
     */
    constructor(scalar: Scalar<T>)
    /**
     * Ctor.
     * @param func Function.
     */
    constructor(func: () => T)
    /**
     * Ctor.
     * @param value Value.
     */
    constructor(value: T)
    /**
     * Ctor.
     * @param something Scalar, function that returns value, or value.
     */
    constructor(something: Scalar<T> | (() => T) | T) {
        this.scalar = new ScalarOf(something);
    }

    /**
     * Get the value.
     */
    public value(): boolean {
        return new IsNull(this.scalar).value() || new IsUndefined(this.scalar).value();
    }
}
