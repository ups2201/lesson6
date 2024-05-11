import { sumLength } from "./task2";

describe("sumLength", () => {
  it("return sum length of two vars", () => {
    const logSpy = jest.spyOn(console, "log");
    sumLength("aaaa", "bbb");
    expect(logSpy).toHaveBeenCalledWith(7);
  });
});
