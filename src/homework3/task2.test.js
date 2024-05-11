import { getTable7 } from "./task2";

describe("get table 7", () => {
  let check = [
    "7 * 1 = 7",
    "7 * 2 = 14",
    "7 * 3 = 21",
    "7 * 4 = 28",
    "7 * 5 = 35",
    "7 * 6 = 42",
    "7 * 7 = 49",
    "7 * 8 = 56",
    "7 * 9 = 63",
  ];
  check.forEach((value) => {
    it("get table 7", () => {
      const logSpy = jest.spyOn(console, "log");
      getTable7();
      expect(logSpy).toHaveBeenCalledWith(value);
    });
  });
});
