import { getPropsFactory } from "../src";

describe("Normal system", () => {
  it("return getter", () => {
    const getter = getPropsFactory({});
    expect(typeof getter).toEqual("function");
    expect(getter()).toEqual({});
  });
});
