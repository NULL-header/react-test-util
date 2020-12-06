import { Tags } from "./types";
import { Elements } from "./Elements";
declare class ElementSearcher {
    private readonly container;
    constructor(container: Element);
    byTagName<T extends Tags>(tagName: T): Elements<T>;
}
export declare const getElementsFrom: (container?: Element) => ElementSearcher;
export {};
//# sourceMappingURL=getElementsFrom.d.ts.map