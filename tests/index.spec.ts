import 'mocha'
import { assert } from 'chai'

import { SomeThing } from '../src/index'

describe("class Something", () => {
    describe("function doSomething", () => {
        it("should work", () => {
            const s = new SomeThing();
            const result = s.doSomething();
            assert.isString(result);
        })
    })
})