import { Crypto } from '@main/system/random/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link Crypto} test.
 * Note: Currently jsdom doesn't implement crypto so no good way to test.
 */
@suite
export class CryptoTest {
    @test
    public noThrows(): void {
        expect(
            () => new Crypto().value()
        ).to.not.throw();
    }
}
