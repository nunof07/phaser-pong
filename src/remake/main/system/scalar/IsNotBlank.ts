import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { Scalar } from '@main/system/scalar/index';
import { IsBlank } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';

/**
 * Determines if scalar or value is not null and not undefined.
 */
@final
@frozen
export class IsNotBlank<T> implements Scalar<boolean> {
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
     * @param value Value.
     */
    constructor(value: T)
    /**
     * Ctor.
     * @param scalarOrValue Scalar or value.
     */
    constructor(scalarOrValue: Scalar<T> | T) {
        this.scalar = new ScalarOf(scalarOrValue);
    }

    /**
     * Get the value.
     */
    public value(): boolean {
        return !(new IsBlank(this.scalar).value());
    }
}
