// eslint-disable-next-line no-unused-vars
import { Tags } from "./types";

const isLengthTruthy = (array: unknown[]) => array.length > 0;
const checkLengthTruthy = (array: unknown[]) => {
  if (!isLengthTruthy(array))
    throw new Error("The Length of the array is zero");
};

// The class is for ElementSearcher.
// Usually, it is returned as a search result.
export class Elements<T extends Tags> extends Array<HTMLElementTagNameMap[T]> {
  constructor(maybeArray: HTMLCollectionOf<HTMLElementTagNameMap[T]>) {
    super(...Array.from(maybeArray));
    Object.setPrototypeOf(this, Elements.prototype);
  }

  asSingle() {
    checkLengthTruthy(this);
    if (this.length > 1)
      throw new Error("Search result is more than number which you think");
    return this[0];
  }
}
