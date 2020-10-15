import { Tags } from "./types";
export declare class Elements<T extends Tags> extends Array<HTMLElementTagNameMap[T]> {
    constructor(maybeArray: HTMLCollectionOf<HTMLElementTagNameMap[T]>);
    asSingle(): HTMLElementTagNameMap[T];
}
//# sourceMappingURL=Elements.d.ts.map