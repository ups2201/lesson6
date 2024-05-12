import { checkEmail } from "./task2";

describe("checkEmail", () => {
  it("success check email", () => {
    jest.spyOn(window, "prompt").mockReturnValue("123@mail.ru");
    expect(checkEmail()).toEqual(true);
  });

  it("fail check email", () => {
    jest.spyOn(window, "prompt").mockReturnValue("@mail.ru");
    expect(checkEmail()).toEqual(false);
  });
});
