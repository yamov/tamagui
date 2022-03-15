import { GetProps, VariantSpreadExtras } from '@tamagui/core';
export declare const getSize: (sizeX?: number, sizeY?: number) => (val: any, { tokens }: VariantSpreadExtras<any>) => {
    paddingHorizontal: number;
    paddingVertical: number;
    borderRadius: import("@tamagui/core").VariableVal;
};
export declare const getButtonSize: (val: any, { tokens }: VariantSpreadExtras<any>) => {
    paddingHorizontal: number;
    paddingVertical: number;
    borderRadius: import("@tamagui/core").VariableVal;
};
export declare const SizableFrame: import("@tamagui/core").StaticComponent<Omit<Omit<import("@tamagui/core").StackProps, "elevation" | "fullscreen"> & {
    fullscreen?: boolean | undefined;
    elevation?: `$${string}` | `$${number}` | null | undefined;
} & import("@tamagui/core").MediaProps<{
    fullscreen?: boolean | undefined;
    elevation?: `$${string}` | `$${number}` | null | undefined;
}> & import("@tamagui/core").PseudoProps<{
    fullscreen?: boolean | undefined;
    elevation?: `$${string}` | `$${number}` | null | undefined;
}>, "focusable" | "size" | "disabled" | "transparent" | "hoverable" | "pressable" | "bordered" | "circular" | "chromeless"> & {
    hoverable?: boolean | undefined;
    pressable?: boolean | undefined;
    focusable?: boolean | undefined;
    bordered?: boolean | undefined;
    size?: `$${string}` | `$${number}` | null | undefined;
    circular?: boolean | undefined;
    disabled?: boolean | undefined;
    transparent?: boolean | undefined;
    chromeless?: boolean | undefined;
} & import("@tamagui/core").MediaProps<{
    hoverable?: boolean | undefined;
    pressable?: boolean | undefined;
    focusable?: boolean | undefined;
    bordered?: boolean | undefined;
    size?: `$${string}` | `$${number}` | null | undefined;
    circular?: boolean | undefined;
    disabled?: boolean | undefined;
    transparent?: boolean | undefined;
    chromeless?: boolean | undefined;
}> & import("@tamagui/core").PseudoProps<{
    hoverable?: boolean | undefined;
    pressable?: boolean | undefined;
    focusable?: boolean | undefined;
    bordered?: boolean | undefined;
    size?: `$${string}` | `$${number}` | null | undefined;
    circular?: boolean | undefined;
    disabled?: boolean | undefined;
    transparent?: boolean | undefined;
    chromeless?: boolean | undefined;
}>, void, import("@tamagui/core").StaticConfigParsed, any>;
export declare type SizableFrameProps = GetProps<typeof SizableFrame>;
//# sourceMappingURL=SizableFrame.d.ts.map