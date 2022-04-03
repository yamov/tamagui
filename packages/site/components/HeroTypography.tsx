import Link from 'next/link'
import { Button, Card, H1, H2, H3, H4, H5, H6, Paragraph, Separator, XStack, YStack } from 'tamagui'

import { useTint } from './ColorToggleButton'
import { ContainerLarge } from './Container'
import { HomeH2, HomeH3 } from './HomeH2'

export const HeroTypography = () => {
  return (
    <YStack pos="relative">
      <YStack>
        <ContainerLarge h={750} position="relative" space>
          <YStack ai="center" space="$1">
            <HomeH2>Better Typography</HomeH2>
            <HomeH3>Plug-and-play fonts with ease.</HomeH3>
          </YStack>

          <YStack pos="relative" ov="hidden">
            <YStack pe="none" fullscreen bc="$background" opacity={0.4} zi={1} />
            <YStack pos="relative" scale={1.7} y={70} x={250} mb={70}>
              <XStack mb={100} p="$6" space $sm={{ flexDirection: 'column' }}>
                <YStack
                  ai="flex-end"
                  p="$6"
                  mw="50%"
                  x={50}
                  $sm={{ mw: '100%', ai: 'center' }}
                  f={2}
                  als="flex-start"
                >
                  <H1 theme="red_alt4">Hot-swappable</H1>
                  <H2 theme="orange_alt4" opacity={1}>
                    individually-styled
                  </H2>
                  <H3 theme="pink_alt4" opacity={0.9}>
                    typed and optimized
                  </H3>
                  <H4 theme="purple_alt4" opacity={0.7}>
                    premade or custom
                  </H4>
                  <H5 theme="blue_alt4" opacity={0.6}>
                    easy to author
                  </H5>
                  <H6 theme="teal_alt4" opacity={0.5}>
                    font themes
                  </H6>
                </YStack>
              </XStack>

              <XStack pos="absolute" h="100%" rotate="-58deg" left="32%" y={-60}>
                <Separator vertical />
              </XStack>

              <YStack
                mt={-300}
                x={-50}
                mb={150}
                ai="flex-start"
                p="$6"
                mw="50%"
                $sm={{ mw: '100%', ai: 'center' }}
                f={2}
                als="flex-start"
              >
                <H6 fontFamily="$mono" theme="red_alt4" opacity={0.5}>
                  font themes
                </H6>
                <H5 fontFamily="$mono" theme="orange_alt4" opacity={0.6}>
                  easy to author
                </H5>
                <H4 fontFamily="$mono" theme="pink_alt4" opacity={0.7}>
                  premade or custom
                </H4>
                <H3 fontFamily="$mono" theme="purple_alt4" opacity={0.9}>
                  typed and optimized
                </H3>
                <H2 fontFamily="$mono" theme="blue_alt4" opacity={1}>
                  individually-styled
                </H2>
                <H1 fontFamily="$mono" theme="teal_alt4">
                  Hot-swappable
                </H1>
              </YStack>
            </YStack>
          </YStack>
        </ContainerLarge>
      </YStack>

      <XStack pos="absolute" top="50%" left="50%" x={-200} y={-180} zi={100}>
        <OverlayCard />
      </XStack>
    </YStack>
  )
}

const OverlayCard = () => {
  const { tint } = useTint()

  // {/* TODO elevation not overriding? */}
  return (
    <Card br="$6" elevation="$4">
      <YStack jc="center" p="$6" space="$6" mw={400}>
        <Paragraph ta="left" fontSize="$8" lineHeight="$7">
          Typed fonts. Independent vertical rythyms. Fully custom styles for each size.
        </Paragraph>

        <Paragraph ta="left" size="$5" theme="alt2">
          Each font family can be styled fully independently with unique styles per-size, unlocking
          an easily shareable, swappable and customizable font system.
        </Paragraph>

        <Link href="/docs/intro/configuration" passHref>
          <Button tag="a" als="flex-end" theme={tint}>
            Learn more &raquo;
          </Button>
        </Link>
      </YStack>
    </Card>
  )
}
