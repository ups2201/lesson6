import { getLengthAndArea } from "./task2";

describe("get Length And Area", () => {
  it("return Length And Area", () => {
    const logSpy = jest.spyOn(console, "log");
    getLengthAndArea(2);
    expect(logSpy).toHaveBeenCalledWith(12.566370614359172, 12.566370614359172);
  });
});
