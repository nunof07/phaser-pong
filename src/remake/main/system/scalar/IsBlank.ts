import { final } from '@main/system/index';
import { frozen } from '@main/system/index';
import { IsNull } from '@main/system/scalar/index';
import { IsUndefined } from '@main/system/scalar/index';
import { Or } from '@main/system/scalar/index';
import { Scalar } from '@main/system/scalar/index';
import { ScalarLike } from '@main/system/scalar/index';

/**
 * Determines if scalar or value is null or undefined.
 */
@final
@frozen
export class IsBlank<T> implements Scalar<boolean> {
    /**
     * Scalar.
     */
    private readonly isBlank: Scalar<boolean>;

    /**
     * Ctor.
     * @param value Value.
     */
    constructor(value: ScalarLike<T>) {
        this.isBlank = new Or(
            new IsNull(value),
            new IsUndefined(value)
        );
    }

    /**
     * Type determinant.
     */
    public isScalar(): true {
        return true;
    }

    /**
     * Get the value.
     */
    public value(): boolean {
        return this.isBlank.value();
    }
}
