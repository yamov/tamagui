import Link from 'next/link'
import { Button, H2, H3, Paragraph, Text, Theme, XStack, YStack } from 'tamagui'

import { colorSchemes } from '../constants/themes'
import { Code, CodeInline } from './Code'
import { ContainerLarge } from './Container'
import { MediaPlayer } from './MediaPlayer'

export function HeroExampleCarousel() {
  return (
    <YStack>
      <ContainerLarge position="relative">
        <YStack zi={1} space="$2">
          <H2 als="center">Truly flexible themes</H2>
          <H3 theme="alt2" als="center" fow="400">
            Unlimited sub-themes, down to the component.
          </H3>
        </YStack>

        {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
        <YStack mb={250}>
          {[{ name: null }, ...colorSchemes.slice(2, 5)].map(({ name }, index) => {
            return (
              <Theme key={name} name={name}>
                <XStack
                  pos="relative"
                  zi={100 - index}
                  px="$6"
                  mb={-250}
                  py="$4"
                  className="faded-container"
                  x={index * 50}
                  opacity={(4 - index) / 3}
                >
                  <MediaPlayer />
                  <MediaPlayer alt={1} />
                  <MediaPlayer alt={2} />
                  <MediaPlayer alt={3} />
                </XStack>
              </Theme>
            )
          })}
        </YStack>

        {/* </ScrollView> */}

        <YStack ai="center" als="center" maxWidth={480} space="$2">
          {/* <H4 size="$8">Nest sub-themes infinitely</H4> */}

          <Paragraph mb="$3" ta="center" size="$6">
            Dark and light themes.
            <br />
            For each, <span className="rainbow">color alts</span> that match.
            <br />
            For each alt, a <Text o={0.66}>few</Text> <Text o={0.5}>different</Text>{' '}
            <Text o={0.33}>shades</Text>.
            <br />
            Finally, a custom <CodeInline size="$6">&lt;Button /&gt;</CodeInline> or{' '}
            <CodeInline size="$6">&lt;Input /&gt;</CodeInline>.
          </Paragraph>

          <Link href="/docs/intro/themes" passHref>
            <Button theme="blue" tag="a">
              Themes that work &raquo;
            </Button>
          </Link>
        </YStack>
      </ContainerLarge>
    </YStack>
  )
}
