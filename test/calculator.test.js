const test = require("node:test");
const assert = require("node:assert/strict");
const { add, multiply } = require("../src/calculator");

test("add returns the sum", () => {
  assert.equal(add(2, 3), 5);
});

test("multiply returns the product", () => {
  assert.equal(multiply(4, 5), 20);
});
