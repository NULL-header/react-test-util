import React from "react";
export declare const renderDomFactory: <T, U extends Partial<T>>(elements: React.ReactElement, getProps?: () => T) => (options?: U) => {
    container: HTMLElement;
    props: T & U;
    rerender: (options?: U) => {
        props: T & U;
    };
};
//# sourceMappingURL=renderDomFactory.d.ts.map