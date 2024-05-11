import { sumNumber } from "./task3";

describe("number string sum", () => {
  it("return number string sum", () => {
    const logSpy = jest.spyOn(console, "log");
    jest.spyOn(window, "prompt").mockReturnValue("123");
    sumNumber();
    expect(logSpy).toHaveBeenCalledWith(6);
  });
});
