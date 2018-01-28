import { Randomizer } from '@main/Randomizer';
import { expect } from 'chai';

/**
 * {@link Randomizer} test cases.
 */
describe('Randomizer', () => {
    describe('#bool()', () => {
        it('should return a boolean', () => {
            expect(new Randomizer().bool())
                .to.satisfy((result: boolean): boolean =>
                    result === true || result === false
                );
        });
    });
});
