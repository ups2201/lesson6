import { addPropertyAge } from "./task1";

describe("add property age", () => {
  it("return user", () => {
    jest.spyOn(window, "prompt").mockReturnValue("25");
    expect(addPropertyAge()).toEqual({ name: "John", age: "25" });
  });
});
