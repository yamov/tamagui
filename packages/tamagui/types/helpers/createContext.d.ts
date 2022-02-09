import * as React from 'react';
export declare function createContext<ContextValueType extends object>(rootComponentName: string): readonly [{
    (props: ContextValueType & {
        children: React.ReactNode;
    }): JSX.Element;
    displayName: string;
}, (consumerName: string) => ContextValueType];
//# sourceMappingURL=createContext.d.ts.map