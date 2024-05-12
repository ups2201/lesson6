import { checkPhone } from "./task3";

describe("checkPhone", () => {
  it("success check Phone", () => {
    jest.spyOn(window, "prompt").mockReturnValue("+79212223344");
    expect(checkPhone()).toEqual(true);
  });
});

describe("checkPhone", () => {
  it("success check Phone", () => {
    jest.spyOn(window, "prompt").mockReturnValue("+7921 222 33 44");
    expect(checkPhone()).toEqual(true);
  });
});

describe("checkPhone", () => {
  it("success check Phone", () => {
    jest.spyOn(window, "prompt").mockReturnValue("8921-222-33-44");
    expect(checkPhone()).toEqual(true);
  });
});

describe("checkPhone", () => {
  it("fail check Phone", () => {
    jest.spyOn(window, "prompt").mockReturnValue("6921-222-33-44");
    expect(checkPhone()).toEqual(false);
  });
});
