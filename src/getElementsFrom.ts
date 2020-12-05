// eslint-disable-next-line no-unused-vars
import { Tags } from "./types";
import { Elements } from "./Elements";

class ElementSearcher {
  constructor(private readonly container: Element) {}

  byTagName<T extends Tags>(tagName: T) {
    const els = this.container.getElementsByTagName(tagName);
    return new Elements(els);
  }
}

export const getElementsFrom = (
  container: Element = (document as unknown) as Element
) => new ElementSearcher(container);
