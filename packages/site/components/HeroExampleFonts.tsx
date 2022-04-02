import { H1, H2, H3, H4, H5, H6, Paragraph, Separator, XStack, YStack } from 'tamagui'

import { ContainerLarge } from './Container'
import { HomeH2 } from './HomeH2'

export const HeroExampleFonts = () => {
  return (
    <ContainerLarge position="relative">
      <YStack ai="center" space="$2">
        <HomeH2>Typography</HomeH2>
      </YStack>

      <XStack p="$6" space $sm={{ flexDirection: 'column' }}>
        <YStack
          jc="center"
          ai="flex-end"
          p="$6"
          mw="50%"
          $sm={{ mw: '100%', ai: 'center' }}
          f={2}
          als="center"
          space
        >
          <H1 theme="red_alt3">Hot-swappable</H1>
          <H2 theme="orange_alt3" opacity={1}>
            individually-styled
          </H2>
          <H3 theme="pink_alt3" opacity={0.8}>
            typed and optimized
          </H3>
          <H4 theme="purple_alt3" opacity={0.6}>
            premade or custom
          </H4>
          <H5 theme="blue_alt3" opacity={0.4}>
            easy to author
          </H5>
          <H6 theme="teal_alt3" opacity={0.2}>
            font themes
          </H6>
        </YStack>
        <Separator vertical />
        <YStack jc="center" p="$6" space="$6" mw="50%" $sm={{ mw: '100%' }}>
          <Paragraph ta="left" fontSize="$8" lineHeight="$8" theme="alt1">
            Font themes that understand the needs of vertical rythym.
          </Paragraph>

          <Paragraph ta="left" fontSize="$6" lineHeight="$6" theme="alt2">
            Tamagui font tokens are designed to overcome limitations of existing design systems.
          </Paragraph>

          <Paragraph ta="left" fontSize="$4" lineHeight="$4" theme="alt2">
            Control each font individually for every prop from font-size to letter-spacing -
            specifically at every size.
          </Paragraph>
        </YStack>
      </XStack>
    </ContainerLarge>
  )
}
