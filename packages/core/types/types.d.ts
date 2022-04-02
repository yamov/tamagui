import CSS from 'csstype';
import React from 'react';
import { GestureResponderEvent, TextProps as ReactTextProps, TextStyle, ViewProps, ViewStyle } from 'react-native';
import { Variable } from './createVariable';
import { RNWTextProps, RNWViewProps } from './types-rnw';
import { ThemeProviderProps } from './views/ThemeProvider';
export declare type ConfigListener = (conf: TamaguiInternalConfig) => void;
export declare type VariableVal = number | string | Variable;
export declare type VariableColorVal = string | Variable;
declare type GenericKey = string | number | symbol;
export interface CreateTokens<Val extends VariableVal = VariableVal> {
    font: {
        [key: GenericKey]: GenericFont;
    };
    color: {
        [key: GenericKey]: Val;
    };
    space: {
        [key: GenericKey]: Val;
    };
    size: {
        [key: GenericKey]: Val;
    };
    radius: {
        [key: GenericKey]: Val;
    };
    zIndex: {
        [key: GenericKey]: Val;
    };
}
export declare type TamaguiBaseTheme = {
    background: VariableColorVal;
    backgroundHover: VariableColorVal;
    backgroundPress: VariableColorVal;
    backgroundFocus: VariableColorVal;
    color: VariableColorVal;
    colorHover: VariableColorVal;
    colorPress: VariableColorVal;
    colorFocus: VariableColorVal;
    borderColor: VariableColorVal;
    borderColorHover: VariableColorVal;
    borderColorPress: VariableColorVal;
    borderColorFocus: VariableColorVal;
    shadowColor: VariableColorVal;
    shadowColorHover: VariableColorVal;
    shadowColorPress: VariableColorVal;
    shadowColorFocus: VariableColorVal;
};
declare type GenericTokens = CreateTokens;
declare type GenericThemes = {
    [key: string]: (Partial<TamaguiBaseTheme> & {
        [key: string]: VariableVal;
    });
};
declare type GenericShorthands = {};
declare type GenericMedia<K extends string = string> = {
    [key in K]: {
        [key: string]: number | string;
    };
};
declare type GenericAnimations = {
    [key: string]: string | {
        [key: string]: any;
    };
};
export interface TamaguiCustomConfig {
}
export interface TamaguiConfig extends Omit<GenericTamaguiConfig, keyof TamaguiCustomConfig>, TamaguiCustomConfig {
}
export declare type CreateTamaguiConfig<A extends GenericTokens, B extends GenericThemes, C extends GenericShorthands = GenericShorthands, D extends GenericMedia = GenericMedia, E extends GenericAnimations = GenericAnimations> = Partial<Pick<ThemeProviderProps, 'defaultTheme' | 'disableRootThemeClass'>> & {
    tokens: A;
    themes: B;
    shorthands: C;
    media: D;
    animations: E;
};
export declare type GenericTamaguiConfig = CreateTamaguiConfig<GenericTokens, GenericThemes, GenericShorthands, GenericMedia, GenericAnimations>;
export declare type ThemeObject = TamaguiConfig['themes'][keyof TamaguiConfig['themes']];
export declare type Tokens = TamaguiConfig['tokens'];
export declare type Shorthands = TamaguiConfig['shorthands'];
export declare type Media = TamaguiConfig['media'];
export declare type Themes = TamaguiConfig['themes'];
export declare type ThemeName = GetAltThemeNames<keyof Themes>;
export declare type ThemeKeys = keyof ThemeObject;
export declare type ThemeKeyVariables = `$${ThemeKeys}`;
export declare type AnimationKeys = GetAnimationKeys<TamaguiConfig> & {};
declare type GetAltThemeNames<S> = (S extends `${string}_${infer Alt}` ? GetAltThemeNames<Alt> : S) | S;
export declare type AnimationHook = (props: any, extra: {
    style: any;
    hoverStyle?: any;
    pressStyle?: any;
    focusStyle?: any;
    exitStyle?: any;
    onDidAnimate?: any;
    delay?: number;
}) => any;
export declare type TamaguiInternalConfig<A extends GenericTokens = GenericTokens, B extends GenericThemes = GenericThemes, C extends GenericShorthands = GenericShorthands, D extends GenericMedia = GenericMedia, E extends GenericAnimations = GenericAnimations> = Omit<CreateTamaguiConfig<A, B, C, D, E>, 'animations'> & {
    animations: E;
    Provider: (props: TamaguiProviderProps) => any;
    tokensParsed: CreateTokens<Variable>;
    themeConfig: any;
    getCSS: () => string;
    parsed: boolean;
};
export declare type GetAnimationKeys<A extends GenericTamaguiConfig> = keyof A['animations']['animations'];
export declare type UnionableString = string & {};
export declare type UnionableNumber = number & {};
export declare type PropTypes<A extends StaticComponent> = A extends React.FunctionComponent<infer Props> ? Props : unknown;
export declare type GenericFont = {
    size: {
        [key: string | number]: number | Variable;
    };
    lineHeight: {
        [key: string | number]: number | Variable;
    };
    letterSpacing: {
        [key: string | number]: number | Variable;
    };
    weight: {
        [key: string | number]: number | string | Variable;
    };
    family: string | Variable;
};
export declare type MediaKeys = keyof Media;
export declare type MediaQueryObject = {
    [key: string]: string | number | string;
};
export declare type MediaQueryState = {
    [key in string]: boolean;
};
export declare type MediaQueryKey = keyof Media;
export declare type MediaPropKeys = `$${MediaQueryKey}`;
export declare type MediaProps<A> = {
    [key in MediaPropKeys]?: A;
};
export declare type MediaQueries = {
    [key in MediaQueryKey]: MediaQueryObject;
};
export declare type ConfigureMediaQueryOptions = {
    queries?: MediaQueries;
    defaultActive?: MediaQueryKey[];
};
export declare type TransformStyleProps = {
    x?: number;
    y?: number;
    perspective?: number;
    scale?: number;
    scaleX?: number;
    scaleY?: number;
    skewX?: string;
    skewY?: string;
    matrix?: number[];
    rotate?: string;
    rotateY?: string;
    rotateX?: string;
    rotateZ?: string;
};
declare type Something<A> = A extends symbol ? Something<{}> : A;
declare type ComponentPropsBase = Something<{
    disabled?: boolean;
    className?: string;
    id?: string;
    tag?: string;
    animated?: boolean;
    theme?: ThemeName | null;
    onHoverIn?: (e: MouseEvent) => any;
    onHoverOut?: (e: MouseEvent) => any;
    onPress?: (e: GestureResponderEvent) => any;
    onPressIn?: (e: GestureResponderEvent) => any;
    onPressOut?: (e: GestureResponderEvent) => any;
    onMouseEnter?: (e: GestureResponderEvent) => any;
    onMouseLeave?: (e: GestureResponderEvent) => any;
    space?: Tokens['space'][keyof Tokens['space']] | boolean | string | number;
}>;
declare type GetTokenFontKeysFor<A extends 'size' | 'weight' | 'letterSpacing' | 'family' | 'lineHeight'> = keyof Tokens['font'][keyof Tokens['font']][A];
declare type GetTokenString<A> = A extends string | number ? `$${A}` : `$${string}`;
export declare type SizeTokens = GetTokenString<keyof Tokens['size']> | number;
export declare type FontTokens = GetTokenString<keyof Tokens['font']>;
export declare type FontSizeTokens = `$${GetTokenFontKeysFor<'size'>}` | number;
export declare type FontLineHeightTokens = `$${GetTokenFontKeysFor<'lineHeight'>}` | number;
export declare type FontWeightTokens = `$${GetTokenFontKeysFor<'weight'>}` | `${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}00`;
export declare type FontLetterSpacingTokens = `$${GetTokenFontKeysFor<'letterSpacing'>}` | number;
export declare type SpaceTokens = GetTokenString<keyof Tokens['space']> | number;
export declare type ColorTokens = GetTokenString<keyof Tokens['color']> | GetTokenString<keyof ThemeObject> | CSSColorNames;
export declare type ZIndexTokens = GetTokenString<keyof Tokens['zIndex']>;
export declare type ThemeValueByCategory<K extends string | number | symbol> = K extends 'theme' ? ThemeKeyVariables : K extends 'size' ? SizeTokens : K extends 'font' ? FontTokens : K extends 'fontSize' ? FontSizeTokens : K extends 'space' ? SpaceTokens : K extends 'color' ? ColorTokens : K extends 'zIndex' ? ZIndexTokens : K extends 'lineHeight' ? FontLineHeightTokens : K extends 'fontWeight' ? FontWeightTokens : K extends 'letterSpacing' ? FontLetterSpacingTokens : {};
export declare type ThemeValueGet<K extends string | number | symbol> = K extends 'theme' ? ThemeKeyVariables : K extends SizeKeys ? SizeTokens : K extends FontKeys ? FontTokens : K extends FontSizeKeys ? FontSizeTokens : K extends SpaceKeys ? SpaceTokens : K extends ColorKeys ? ColorTokens : K extends ZIndexKeys ? ZIndexTokens : K extends LineHeightKeys ? FontLineHeightTokens : K extends FontWeightKeys ? FontWeightTokens : K extends FontLetterSpacingKeys ? FontLetterSpacingTokens : {};
export declare type ThemeValueFallback = UnionableString | Variable;
declare type ThemeValue<A> = A | ThemeValueFallback;
export declare type WithThemeValues<T extends object> = {
    [K in keyof T]: ThemeValue<T[K]> | ThemeValueGet<K>;
};
export declare type WithShorthands<StyleProps> = {
    [Key in keyof Shorthands]?: Shorthands[Key] extends keyof StyleProps ? StyleProps[Shorthands[Key]] | null : undefined;
};
export declare type PseudoProps<A> = {
    hoverStyle?: A | null;
    pressStyle?: A | null;
    focusStyle?: A | null;
};
export declare type PsuedoPropKeys = keyof PseudoProps<any>;
declare type WithThemeAndShorthands<A extends object> = WithThemeValues<A> & WithShorthands<WithThemeValues<A>>;
declare type WithThemeShorthandsAndPseudos<A extends object> = WithThemeAndShorthands<A> & PseudoProps<WithThemeAndShorthands<A>>;
declare type WithThemeShorthandsPseudosMediaAnimation<A extends object> = WithThemeShorthandsAndPseudos<A> & MediaProps<WithThemeShorthandsAndPseudos<A>> & {
    animation?: AnimationKeys;
};
declare type WebOnlyStyleProps = {
    cursor?: string;
    contain?: 'none' | 'strict' | 'content' | 'size' | 'layout' | 'paint' | string;
    display?: 'inherit' | 'none' | 'inline' | 'block' | 'contents' | 'flex' | 'inline-flex';
    pointerEvents?: ViewProps['pointerEvents'];
};
export declare type StackStylePropsBase = Omit<ViewStyle, 'display' | 'backfaceVisibility' | 'elevation'> & TransformStyleProps & WebOnlyStyleProps;
export declare type StackStyleProps = WithThemeShorthandsPseudosMediaAnimation<StackStylePropsBase>;
export declare type StackProps = Omit<ViewProps, 'display' | 'children'> & RNWViewProps & StackStyleProps & ComponentPropsBase & {
    children?: any | any[];
};
declare type TextStyleProps = WithThemeShorthandsPseudosMediaAnimation<Omit<TextStyle, 'display' | 'backfaceVisibility'> & TransformStyleProps & WebOnlyStyleProps>;
export declare type TextProps = ReactTextProps & RNWTextProps & TextStyleProps & ComponentPropsBase & {
    ellipse?: boolean;
    selectable?: boolean;
    textDecorationDistance?: number;
    userSelect?: CSS.Properties['userSelect'];
    textOverflow?: CSS.Properties['textOverflow'];
    whiteSpace?: CSS.Properties['whiteSpace'];
    wordWrap?: CSS.Properties['wordWrap'];
    cursor?: CSS.Properties['cursor'];
};
export declare type StaticComponent<Props = any, VariantProps = any, Ref = any, StaticConfParsed extends StaticConfigParsed = StaticConfigParsed> = React.ForwardRefExoticComponent<React.PropsWithoutRef<Props> & React.RefAttributes<Ref>> & StaticComponentObject<StaticConfParsed, VariantProps>;
declare type StaticComponentObject<StaticConfig extends StaticConfigParsed, VariantProps extends any> = {
    staticConfig: StaticConfig;
    variantProps?: VariantProps;
    extractable: <X>(a: X, opts?: StaticConfig) => X;
};
export declare type TamaguiProviderProps = Partial<Omit<ThemeProviderProps, 'children'>> & {
    injectCSS?: boolean;
    initialWindowMetrics?: any;
    fallback?: any;
    children?: any;
};
export declare type StaticConfigParsed = StaticConfig & {
    parsed: true;
    propMapper: (key: string, value: any, theme: ThemeObject, props: any) => undefined | boolean | {
        [key: string]: any;
    };
    variantsParsed?: {
        [key: string]: {
            [key: string]: any;
        };
    };
};
export declare type StaticConfig = {
    Component?: React.FunctionComponent<any> & StaticComponentObject<any, any>;
    variants?: {
        [key: string]: {
            [key: string]: ((a: any, b: any) => any) | {
                [key: string]: any;
            };
        };
    };
    componentName?: string;
    neverFlatten?: boolean | 'jsx';
    isText?: boolean;
    isInput?: boolean;
    validStyles?: {
        [key: string]: boolean;
    };
    validPropsExtra?: {
        [key: string]: any;
    };
    defaultProps?: any;
    deoptProps?: Set<string>;
    ensureOverriddenProp?: {
        [key: string]: boolean;
    };
    isZStack?: boolean;
    isReactNativeWeb?: boolean;
    memo?: boolean;
};
declare type SizeKeys = 'width' | 'height' | 'minWidth' | 'minHeight' | 'maxWidth' | 'maxHeight';
declare type FontKeys = 'fontFamily';
declare type FontSizeKeys = 'fontSize';
declare type FontWeightKeys = 'fontWeight';
declare type FontLetterSpacingKeys = 'letterSpacing';
declare type LineHeightKeys = 'lineHeight';
declare type ZIndexKeys = 'zIndex';
declare type ColorKeys = 'color' | 'backgroundColor' | 'borderColor' | 'borderBottomColor' | 'borderTopColor' | 'borderLeftColor' | 'borderRightColor' | 'shadowColor';
declare type SpaceKeys = 'space' | 'padding' | 'paddingHorizontal' | 'paddingVertical' | 'paddingLeft' | 'paddingTop' | 'paddingBottom' | 'paddingLeft' | 'paddingRight' | 'paddingEnd' | 'paddingStart' | 'margin' | 'marginHorizontal' | 'marginVertical' | 'marginLeft' | 'marginTop' | 'marginBottom' | 'marginLeft' | 'marginRight' | 'marginEnd' | 'marginStart' | 'x' | 'y' | 'scale' | 'scaleX' | 'scaleY' | 'borderTopEndRadius' | 'borderTopLeftRadius' | 'borderTopRightRadius' | 'borderTopStartRadius' | 'borderBottomEndRadius' | 'borderBottomLeftRadius' | 'borderBottomRightRadius' | 'borderBottomStartRadius' | 'borderBottomWidth' | 'borderLeftWidth' | 'borderRadius' | 'borderRightWidth' | 'borderTopEndRadius' | 'borderTopLeftRadius' | 'borderTopRightRadius' | 'borderEndWidth' | 'borderStartWidth' | 'borderTopStartRadius' | 'borderTopWidth' | 'borderWidth' | 'left' | 'top' | 'right' | 'bottom' | 'shadowOffset';
declare type CSSColorNames = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategray' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'gray' | 'green' | 'greenyellow' | 'honeydew' | 'hotpink' | 'indianred ' | 'indigo  ' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgrey' | 'lightgreen' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightsteelblue' | 'lightyellow' | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy' | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'purple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen';
export {};
//# sourceMappingURL=types.d.ts.map