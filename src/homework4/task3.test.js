import { parseObject } from "./task3";

describe("parse object", () => {
  it("return parse object", () => {
    const logSpy = jest.spyOn(console, "log");
    parseObject();
    expect(logSpy).toHaveBeenCalledWith("admin", "admin");
  });
});
