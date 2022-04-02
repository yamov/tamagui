import { memo, useMemo } from 'react'
import { Theme } from 'tamagui'

import { useTint } from '../components/ColorToggleButton'

export const ThemeTint = memo((props) => {
  const { tint } = useTint()

  const children = useMemo(() => props.children, [props.children])

  return <Theme name={tint}>{children}</Theme>
})
