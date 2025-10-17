import { soustract } from "../utils.js";

describe("Tests de la fonction soustract", () => {
  test("5 - 3 = 2", () => {
    expect(soustract(5, 3)).toBe(2);
  });

  test("10 - 7 = 3", () => {
    expect(soustract(10, 7)).toBe(3);
  });

  test("0 - 0 = 0", () => {
    expect(soustract(0, 0)).toBe(0);
  });

  test("5 - 7 = -2", () => {
    expect(soustract(5, 7)).toBe(-2);
  });
});
