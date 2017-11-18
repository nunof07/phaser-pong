import { Rounded } from '@main/system/scalar/index';
import { ScalarOf } from '@main/system/scalar/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link Rounded} test.
 */
@suite
export class RoundedTest {
    @test
    public roundsUp(): void {
        expect(
            new Rounded(new ScalarOf(4.45), 1).value()
        ).to.equal(4.5);
    }

    @test
    public roundsDown(): void {
        expect(
            new Rounded(new ScalarOf(4.44), 1).value()
        ).to.equal(4.4);
    }

    @test
    public roundsToTheTens(): void {
        expect(
            new Rounded(new ScalarOf(4.5), 0).value()
        ).to.equal(5);
    }

    @test
    public roundsSeveralDecimals(): void {
        expect(
            new Rounded(new ScalarOf(4.4445), 3).value()
        ).to.equal(4.445);
    }
}
