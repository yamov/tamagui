export declare function composeEventHandlers<E>(ogEventHandler?: (event: E) => void, nextEventHandler?: (event: E) => void, { checkForDefaultPrevented }?: {
    checkForDefaultPrevented?: boolean | undefined;
}): (event: E) => void;
//# sourceMappingURL=composeEventHandlers.d.ts.map