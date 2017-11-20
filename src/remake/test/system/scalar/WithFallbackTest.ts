import { Null } from '@main/system/scalar/index';
import { WithFallback } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link WithFallback} test.
 */
@suite
export class WithFallbackTest {
    @test
    public whenBlank(): void {
        expect(
            new WithFallback(new Null(), new ScalarOf(2)).value()
        ).to.equal(2);
    }

    @test
    public whenNotBlank(): void {
        expect(
            new WithFallback(new ScalarOf(1), new ScalarOf(2)).value()
        ).to.equal(1);
    }

    @test
    public whenBlankValue(): void {
        expect(
            new WithFallback(null, new ScalarOf(2)).value()
        ).to.equal(2);
    }

    @test
    public whenNotBlankValue(): void {
        expect(
            new WithFallback(1, new ScalarOf(2)).value()
        ).to.equal(1);
    }

    @test
    public whenBlankValueWithValueFallback(): void {
        expect(
            new WithFallback(null, 2).value()
        ).to.equal(2);
    }

    @test
    public whenNotBlankValueWithValueFallback(): void {
        expect(
            new WithFallback(1, 2).value()
        ).to.equal(1);
    }
}
