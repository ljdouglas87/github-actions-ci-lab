const test = require("node:test");
const assert = require("node:assert/strict");
const { add, multiply, subtract } = require("../src/calculator");

test("add returns the sum", () => {
  assert.equal(add(2, 3), 5);
});

test("multiply returns the product", () => {
  assert.equal(multiply(4, 5), 20);
});

test("subtract returns the difference", () => {
  assert.equal(subtract(10, 4), 7);
});
