import { getX } from "./task3";

describe("get X", () => {
  it("return X", () => {
    const logSpy = jest.spyOn(console, "log");
    getX(2, 1, -1);
    expect(logSpy).toHaveBeenCalledWith(-1, 0.5);
  });
});
