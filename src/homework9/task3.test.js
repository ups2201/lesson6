import { getX } from "./task3";

describe("test0", () => {
  it("0 корней", () => {
    const logSpy = jest.spyOn(console, "log");
    getX(3, -4, 2);
    expect(logSpy).toHaveBeenCalledWith("Корней нет");
  });
});

describe("test1", () => {
  it("1 корень", () => {
    const logSpy = jest.spyOn(console, "log");
    getX(1, -6, 9);
    expect(logSpy).toHaveBeenCalledWith(3);
  });
});

describe("test2", () => {
  it("2 корня", () => {
    const logSpy = jest.spyOn(console, "log");
    getX(2, 1, -1);
    expect(logSpy).toHaveBeenCalledWith(-1, 0.5);
  });
});
