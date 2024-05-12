import { checkDate } from "./task1";

describe("check Date", () => {
  it("success check Date", () => {
    jest.spyOn(window, "prompt").mockReturnValue("12.02.2024");
    expect(checkDate()).toEqual(true);
  });

  it("fail check Date", () => {
    jest.spyOn(window, "prompt").mockReturnValue("12.19.2024");
    expect(checkDate()).toEqual(false);
  });
});
