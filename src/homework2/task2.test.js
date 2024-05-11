import { getMonth } from "./task2";

describe("get Month", () => {
  const map = new Map();
  map.set(1, "январь");
  map.set(2, "февраль");
  map.set(3, "март");
  map.set(4, "апрель");
  map.set(5, "май");
  map.set(6, "июнь");
  map.set(7, "июль");
  map.set(8, "август");
  map.set(9, "сентябрь");
  map.set(10, "октябрь");
  map.set(11, "ноябрь");
  map.set(12, "декабрь");
  map.forEach((value, key) => {
    it("return month", () => {
      const logSpy = jest.spyOn(console, "log");
      jest.spyOn(window, "prompt").mockReturnValue(key);
      getMonth();
      expect(logSpy).toHaveBeenCalledWith(value);
    });
  });
});
