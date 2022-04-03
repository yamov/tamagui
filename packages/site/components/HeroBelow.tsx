import { Compass, Cpu, Layers } from '@tamagui/feather-icons'
import { memo } from 'react'
import { H3, Paragraph, Text, Theme, XStack, YStack } from 'tamagui'

import { ContainerLarge } from './Container'
import { IconStack } from './IconStack'

export const HeroBelow = memo(() => {
  return (
    <ContainerLarge>
      <XStack
        flex={1}
        overflow="hidden"
        maxWidth="100%"
        space="$8"
        flexWrap="nowrap"
        px="$2"
        $sm={{ flexDirection: 'column' }}
      >
        <YStack width="33%" $sm={{ width: 'auto', maxWidth: 500, mx: 'auto' }} flexShrink={1}>
          <IconStack theme="purple_alt2">
            <Cpu size={18} color="var(--colorHover)" />
          </IconStack>
          <H3 fontWeight="700" size="$6" mb="$2">
            Performant
          </H3>
          <Paragraph size="$3" theme="alt2">
            The fastest UI kit - thanks to an advanced compiler that handles styles, media queries,
            CSS variables, and tree&nbsp;flattening.
          </Paragraph>
        </YStack>

        <YStack width="33%" $sm={{ width: 'auto', maxWidth: 500, mx: 'auto' }} flexShrink={1}>
          <IconStack theme="green_alt2">
            <Compass size={18} color="var(--colorHover)" />
          </IconStack>
          <H3 fontWeight="700" size="$6" mb="$2">
            Easy to adopt
          </H3>
          <Paragraph size="$3" theme="alt2">
            Works with React Native and{' '}
            <Text tag="a" href="https://necolas.github.io/react-native-web/">
              Web
            </Text>
            . Use it as a style library or full component kit. Comes with beautiful themes, or bring
            your own.
          </Paragraph>
        </YStack>

        <YStack width="33%" $sm={{ width: 'auto', maxWidth: 500, mx: 'auto' }} flexShrink={1}>
          <IconStack theme="pink_alt2">
            <Layers size={18} color="var(--colorHover)" />
          </IconStack>
          <H3 fontWeight="700" size="$6" mb="$2">
            Productive
          </H3>
          <Paragraph size="$3" theme="alt2">
            Typed inline styles without performance downside. Themes, tokens, shorthands, media
            queries, and animations that run fast.
          </Paragraph>
        </YStack>

        {/* <YStack flexShrink={1}>
      <IconStack>
        <FastForward size={18} color="var(--colorHover)" />
      </IconStack>
      <H3 mb="$2">Native</H3>
      <Paragraph size="$3" theme="alt2">
        On the web Tamagui extracts styles to atomic CSS using CSS variables for themes and
        CSS media queries - even if you use hooks. On native, it extracts StyleSheet.
      </Paragraph>
    </YStack> */}
      </XStack>
    </ContainerLarge>
  )
})
