import React from "react";
import { renderDomFactory, getElementsFrom } from "../src";

const getProps = () => ({ className: "testcase" });
const renderDom = renderDomFactory(<div />, getProps);

describe("Normal system", () => {
  it("call function made without error", () => {
    expect(renderDom).not.toThrow();
  });

  it("render dom", () => {
    const {
      container,
      props: { className },
    } = renderDom();
    const div = getElementsFrom(container).byTagName("div").asSingle();
    expect(div).toHaveProperty("className", className);
  });

  it("rerender", () => {
    const {
      container,
      props: { className },
      rerender,
    } = renderDom();
    const div = getElementsFrom(container).byTagName("div").asSingle();
    expect(div).toHaveProperty("className", className);

    const className2 = rerender({ className: "testcase2" }).props.className;
    expect(div).toHaveProperty("className", className2);
  });
});
