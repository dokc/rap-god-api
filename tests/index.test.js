import subtraction from "./test_file";
import foo from "./endpoints/call";

test("subtracts 4 - 2 to equal 2", () => {
  expect(subtraction(4, 2)).toBe(2);
});

test("adds 100 to 300", () => {
  expect(foo(100, 300)).toBe(400);
});
