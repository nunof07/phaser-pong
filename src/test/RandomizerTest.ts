import { Randomizer } from '@main/Randomizer';
import { expect } from 'chai';
import { suite, test } from 'mocha-typescript';

@suite
export class RandomizerTest {
    @test
    public returnsBool(): void {
        expect(
            new Randomizer().bool()
        ).to.satisfy((result: boolean): boolean => {
            return result === true || result === false;
        });
    }
}
