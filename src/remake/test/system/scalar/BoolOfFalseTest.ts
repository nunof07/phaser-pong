import { BoolOfTest } from '@test/system/scalar/BoolOfTest';
import { suite } from 'mocha-typescript';
import { test } from 'mocha-typescript';

/**
 * {@link BoolOf} test.
 */
@suite
export class BoolOfFalseTest {
    private readonly test: BoolOfTest;

    constructor() {
        this.test = new BoolOfTest(false);
    }

    @test
    public fromPrimitive(): void {
        this.test.fromPrimitive();
    }

    @test
    public fromScalar(): void {
        this.test.fromScalar();
    }

    @test
    public fromJsFunction(): void {
        this.test.fromJsFunction();
    }

    @test
    public fromConditionConsequentPrimitivePair(): void {
        this.test.fromConditionConsequentPrimitivePair();
    }

    @test
    public fromConditionConsequentScalarPair(): void {
        this.test.fromConditionConsequentScalarPair();
    }

    @test
    public fromConditionConsequentJsFunctionPair(): void {
        this.test.fromConditionConsequentJsFunctionPair();
    }
}