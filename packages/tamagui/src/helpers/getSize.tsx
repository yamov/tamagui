import { VariantSpreadExtras, getVariableValue, isVariable } from '@tamagui/core'

// for use in button-like things

export const getSize =
  (sizeX = 0.8, sizeY = 0.333) =>
  (val: any, { tokens, props }: VariantSpreadExtras<any>) => {
    const size = tokens.size[val] ?? tokens.size['$4'] ?? val ?? 14
    const radius = tokens.radius[val] ?? tokens.radius['$4'] ?? size
    const px = Math.round(+(isVariable(size) ? size.val : size) * sizeX)
    const py = Math.round(+(isVariable(size) ? size.val : size) * sizeY)
    // keep buttons height aligned to the font used
    const font = tokens.font[props.fontFamily] || tokens.font['$body']
    const lineHeights = font.lineHeight
    const lineHeight = lineHeights[val] ?? lineHeights['$4']
    const minHeight = getVariableValue(lineHeight) + py * 2
    return {
      minHeight,
      paddingHorizontal: px,
      paddingVertical: py,
      borderRadius: radius,
    }
  }
