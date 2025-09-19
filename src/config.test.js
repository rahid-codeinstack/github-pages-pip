import { expect , test , expectTypeOf } from "vitest"
import { sum } from "./confige"

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
  expectTypeOf({a:1}).toEqualTypeOf({a:1})
  expectTypeOf({a:1,b:2}).toMatchObjectType({a:1});

})
test('to mathcing ' ,()=>{
     expectTypeOf({a:2}).toEqualTypeOf({a:2})
})
test('to not equal ',()=>{
     expectTypeOf({myname:"rahidkhan"}).toBeObject()
     expectTypeOf({ a: 1, b: 1 }).toMatchTypeOf({ a:1 })
     expectTypeOf({a:1}).not.toEqualTypeOf({a:"1"})
})