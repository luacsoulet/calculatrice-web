import { add } from "../script.js";

test("addition simple", () => {
  expect(add(2, 3)).toBe(5);
});