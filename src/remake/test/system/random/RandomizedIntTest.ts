import { ParkMillerRandom } from '@main/system/random/index';
import { RandomizedInt } from '@main/system/random/index';
import { ScalarOf } from '@main/system/scalar/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link RandomizedInt} test.
 */
@suite
export class RandomizedIntTest {
    @test
    public greaterThanOrEqualToMin(): void {
        expect(
            new RandomizedInt(
                { next: (): number => 0 },
                1,
                10
            ).value()
        ).to.equal(1);
    }

    @test
    public lessThanMax(): void {
        expect(
            new RandomizedInt(
                { next: (): number => 1 },
                1,
                10
            ).value()
        ).to.equal(10);
    }

    @test
    public randomInt(): void {
        expect(
            new RandomizedInt(
                new ParkMillerRandom(new ScalarOf(1337)),
                1,
                10
            ).value()
        ).to.equal(1);
    }
}
