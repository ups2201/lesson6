import { isWord } from "./task2";

describe("sumLength", () => {
  it("return sum length of two vars", () => {
    expect(isWord("aaaa")).toEqual(true);
    expect(isWord("aaaa bbb")).toEqual(false);
  });
});
