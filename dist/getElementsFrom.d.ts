import { Tags } from "./types";
import { Elements } from "./Elements";
declare class ElementSearcher {
    private readonly container;
    constructor(container: HTMLElement);
    byTagName<T extends Tags>(tagName: T): Elements<T>;
}
export declare const getElementsFrom: (container?: HTMLElement) => ElementSearcher;
export {};
//# sourceMappingURL=getElementsFrom.d.ts.map