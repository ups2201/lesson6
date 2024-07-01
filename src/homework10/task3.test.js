import { checkPhone } from "./task3";

describe("checkPhone1", () => {
  it("success check Phone", () => {
    jest.spyOn(window, "prompt").mockReturnValue("+79212223344");
    expect(checkPhone()).toEqual(true);
  });
});

describe("checkPhone2", () => {
  it("success check Phone", () => {
    jest.spyOn(window, "prompt").mockReturnValue("+7921 222 33 44");
    expect(checkPhone()).toEqual(true);
  });
});

describe("checkPhone3", () => {
  it("success check Phone", () => {
    jest.spyOn(window, "prompt").mockReturnValue("8 921 222 33 44");
    expect(checkPhone()).toEqual(true);
  });
});

describe("checkPhone4", () => {
  it("fail check Phone", () => {
    jest.spyOn(window, "prompt").mockReturnValue("6921-222-33-44");
    expect(checkPhone()).toEqual(false);
  });
});
