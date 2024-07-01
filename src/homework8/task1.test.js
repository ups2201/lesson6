import { getDay } from "./task1";

describe("get Day", () => {
  it("return get Day", () => {
    jest.spyOn(window, "prompt").mockReturnValue("12.05.2024");
    expect(getDay()).toEqual("Sunday");
  });
});
