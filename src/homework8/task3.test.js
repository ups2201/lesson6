import { minDate } from "./task3";

describe("get min Date", () => {
  it("return get min Date", () => {
    expect(minDate("22.01.1989", "20.02.1988")).toEqual("22.01.1989");
    expect(minDate("20.02.1988", "21.02.1988")).toEqual("21.02.1988");
  });
});
