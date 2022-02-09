import * as React from 'react';
declare type DialogOwnProps = {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?(open: boolean): void;
};
declare const Dialog: React.FC<DialogOwnProps>;
declare const DialogTrigger: DialogTriggerPrimitive;
declare const DialogOverlay: DialogOverlayPrimitive;
declare const DialogContent: DialogContentPrimitive;
declare const DialogClose: Polymorphic.ForwardRefComponent<"button", Polymorphic.OwnProps<any>>;
declare const Root: React.FC<DialogOwnProps>;
declare const Trigger: DialogTriggerPrimitive;
declare const Overlay: DialogOverlayPrimitive;
declare const Content: DialogContentPrimitive;
declare const Close: Polymorphic.ForwardRefComponent<"button", Polymorphic.OwnProps<any>>;
export { Dialog, DialogTrigger, DialogOverlay, DialogContent, DialogClose, Root, Trigger, Overlay, Content, Close, };
//# sourceMappingURL=Dialog.d.ts.map