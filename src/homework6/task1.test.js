import { diff } from "./task1";

describe("diff 2 number", () => {
  it("return diff 2 number", () => {
    expect(diff(1, 99)).toEqual(98);
  });
});
