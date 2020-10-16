import React from "react";
import { render } from "@testing-library/react";

export const renderDomFactory = function <T, U extends Partial<T>>(
  elements: React.ReactElement,
  getProps: () => T = () => ({} as T)
) {
  return (options = {} as U) => {
    const props = { ...getProps(), ...options };
    const passedElements = React.cloneElement(elements, props);
    const domTree = render(passedElements);
    const rerender = (options = {} as U) => {
      const props = { ...getProps(), ...options };
      domTree.rerender(React.cloneElement(elements, options));
      return { props };
    };
    return { container: domTree.container, props, rerender };
  };
};
