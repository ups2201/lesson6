import { getMinute } from "./task2";

describe("get Minute", () => {
  it("return get Minute", () => {
    jest.useFakeTimers().setSystemTime(new Date("2024-05-12T10:10"));
    expect(getMinute()).toEqual(610);
  });
});
