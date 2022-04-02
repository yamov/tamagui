- make sure @tamagui/core doesn't require theme keys exactly

- styled() fix types with react native web
  - fix not needing `isText`, `isInput`, `isReactNativeWeb`

- document $body being default font family
- document injectCSS, mediaQueryDefaultActive, cssStyleSeparator, maxDarkLightNesting

- toggle/switch

- note in starter kit adding react-native at version 0 + latest @types/react-native gives autocomplete

- override react native web color values and add in types for css colors "red" etc

- already have the themeParent.listener pattern just need to restore/fix it
- can memoize <Theme /> children so only the specific middle nodes render
- <Button /> dont have to re-render (expensive) due to above CSS


- // TODO this is grabbing blue_alt it shold jsut be alt2
- remove onClick just keep onPress (from types)
- dev mode global Tamagui to see things
  - all classnames: Tamagui.classes['_borderBottomColor-1go1dts'] => style
- // TODO fix variant merge type
- OmitShorthands<> helper (see ActiveCirlce in site)

- useTheme in createComponent could be in a feature save a ton of render perf
- document fullscreen elevation onHoverIn onHoverOut onPress etc
- fix types on color, not showing all
- fix type autocomplete not showing in menu on some
- fix image w/h shorthand not translating to width/height runtime
- extracted theme="" components will change how ThemeReset/Theme work with finding parent context, we'll need to have the equivalent web versions for all of them. something like MutationObserver(querySelector.closest('.theme--parent'))
- github sponsor
- tell b about "strict tokens"
- split fonts into packages
- document ThemeReverse

- tabs, label, togglegroup

- test component theme + alt theme (plus with compiled)

- theme="" prop on any createComponent
  - easy part is useTheme()
  - decision:
    - faster/simpler is non-contextual, but maybe not desirable
    - a bit more complex it passes it to children, but maybe slow
  - either way compiler probably wants to also handle theme prop

- need to release a default theme
  - `@tamagui/tamacolo`

- createTamagui({ defaultProps: { Button: {} } }) for any component

- site demo with toggles for animations:
  - https://blog.maximeheckel.com/posts/framer-motion-layout-animations/

- not adding data-displayname

- can speed up non-flattened a lot by having compiler inject `disableTheme` prop when it detects no spread + no theme prop set
  - because useTheme() hook has gotten heavy

- document <SizableFrame />
- document <EnsureFlexed />
- fix theming
- space => gap
- ~button textProps => child selectors~

- animations
	- reanimated
	- css

- create-tamagui-app

- <Scale />

- @tamagui/cli: 
  - tamagui test ./packages/site/components/OffsetBox.tsx
  - tamagui sandbox ./packages/site/components/OffsetBox.tsx
  - tamagui compile ./packages/site/components/OffsetBox.tsx

- <Group />
- <Selectable />
- <Draggable />

- floating-ui

- <Menu />
- <MenuDrawer />
- <List /> (works with drawer + draggable + selectable)
- <List.Item />

- See if this isn't too terribly hard:
- childStyle={{
    [Text]: {
      color: 'green',
      hoverStyle: {
        color: 'red'
      }
    }
  }}

- <Checkbox /> / <Switch />
- popover add safety checks around using Popover.Content
- fix: tooltip size bug

- extract gap to css (+ work with visually hidden)

- <Combobox />
  - like vercel, make it adapt into a drawer on mobile
    - option to render as native combo on ios/android

- kitchen sink app
- helper fns docs

- <LinearGradient />
  - fix using theme values
  - make extractable to css

- fix: media queries in styled() not working
- fix: <Paragraph size={} /> not accepting simple numbers

- Text selectColor

- themes: mobile sizing separate :)

- document: getTokens, useThemeName

- static compilation can go further with variants because it knows they always only accept certain values... see mount-deep-tree

- array shorthand values?

- basic styled() extraction to css at compile time

- type variants [number] / [string] (test Text numberOfLines)

- catchall: { variants: '...' => {} } / styled(Text, () => ({}))

- escape hatch for html props `htmlProps` or tag={} => as={} + work better?

- bring back `onLayout` via features hooks
  - press events?

- focusStyle, focusWithinStyle

- container queries

- auto skeleton components
