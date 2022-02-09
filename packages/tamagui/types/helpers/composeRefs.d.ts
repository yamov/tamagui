import { Ref } from 'react';
declare type PossibleRef<T> = Ref<T> | undefined;
export declare function composeRefs<T>(...refs: PossibleRef<T>[]): (node: T) => void;
export declare function useComposedRefs<T>(...refs: PossibleRef<T>[]): (node: T) => void;
export {};
//# sourceMappingURL=composeRefs.d.ts.map