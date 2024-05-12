import { cloneObject } from "./task2";

describe("clone object", () => {
  it("return clone object", () => {
    expect(cloneObject()).toEqual({ name: "admin", role: "admin" });
  });
});
