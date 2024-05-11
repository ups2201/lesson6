import { sumNumber } from "./task1";

describe("sum 50 to 100", () => {
  it("return sum 50 to 100", () => {
    const logSpy = jest.spyOn(console, "log");
    sumNumber(50, 100);
    expect(logSpy).toHaveBeenCalledWith(3825);
  });
});
