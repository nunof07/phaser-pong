import { FunctionOf } from '@main/system/function/index';
import { MapOf } from '@main/system/scalar/index';
import { expect } from 'chai';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link MapOf} test.
 */
@suite
export class MapOfTest {
    @test
    public isMap(): void {
        expect(
            new MapOf(
                [],
                new FunctionOf(
                    (input: string): [string, string] => {
                        return [input, input];
                    }
                )
            )
            .value()
        ).to.be.an.instanceOf(
            Map
        );
    }

    @test
    public sizeTest(): void {
        expect(
            new MapOf(
                ['a', 'b', 'c'],
                new FunctionOf(
                    (input: string): [string, string] => {
                        return [input, input];
                    }
                )
            )
            .value()
            .size
        ).to.equal(
            3
        );
    }

    @test
    public getTest(): void {
        expect(
            new MapOf(
                ['hello'],
                new FunctionOf(
                    (input: string): [string, string] => {
                        return [input, input];
                    }
                )
            )
            .value()
            .get('hello')
        ).to.equal(
            'hello'
        );
    }
}