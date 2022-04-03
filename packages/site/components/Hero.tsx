// //! debug

// import React from 'react'
// import { H3, H4, Paragraph, Text, YStack, useMedia } from 'tamagui'

// export function Hero() {
//   return <H4 size="$1">Input</H4>
// }

import { ArrowRight } from '@tamagui/feather-icons'
import NextLink from 'next/link'
import { memo } from 'react'
import {
  Button,
  Paragraph,
  Spacer,
  Text,
  Theme,
  Title,
  Tooltip,
  VisuallyHidden,
  XStack,
  YStack,
} from 'tamagui'

import { useTint } from './ColorToggleButton'
import { ContainerLarge } from './Container'
import { DiscordIcon } from './DiscordIcon'
import { GithubIcon } from './GithubIcon'
import { Header } from './Header'
import { SearchButton } from './Search'

export function Hero() {
  const { tint } = useTint()

  return (
    <>
      <Theme name={tint}>
        <HeroTop />
      </Theme>

      <XStack theme="alt1" mt={-28} ai="center" jc="center">
        <SearchButton width={350} size="$6">
          Search Docs...
        </SearchButton>
      </XStack>
    </>
  )
}

const HeroTop = memo(() => {
  return (
    <YStack className="hero-gradient" borderBottomWidth={1} borderColor="$borderColor">
      <ContainerLarge>
        <Header />

        <YStack
          space="$6"
          position="relative"
          pt="$8"
          $sm={{
            maxWidth: 550,
            mx: 'auto',
          }}
        >
          <YStack ai="flex-start" $gtSm={{ ai: 'center' }} space="$5">
            <Title
              size="$9"
              $gtSm={{
                size: '$10',
                ta: 'center',
                maxWidth: 700,
                mx: '$8',
              }}
              $gtMd={{
                size: '$11',
                maxWidth: 900,
                mx: '$4',
              }}
            >
              <Tooltip contents="Works the same on iOS, Android, and web">
                <span className="rainbow clip-text help">Universal</span>
              </Tooltip>{' '}
              React design systems made faster on native&nbsp;&&nbsp;web
            </Title>

            <YStack
              px={0}
              maxWidth={550}
              $gtSm={{
                px: 100,
                maxWidth: 900,
              }}
              $gtMd={{
                px: 90,
              }}
            >
              <Paragraph
                color="$color"
                opacity={0.7}
                size="$5"
                letterSpacing={0}
                $gtSm={{
                  ta: 'center',
                  size: '$6',
                  maxWidth: 600,
                  letterSpacing: 0,
                  fontWeight: '400',
                }}
                $gtMd={{
                  size: '$8',
                  maxWidth: 700,
                  fontWeight: '400',
                }}
              >
                Build faster apps faster with an optimizing compiler and UI kit.
                Better,&nbsp;simpler&nbsp;code + unmatched performance.
              </Paragraph>
            </YStack>
          </YStack>

          <XStack ai="center" jc="center" space="$2">
            <NextLink href="/docs/intro/introduction" passHref>
              <Button
                // TODO check why hoverStyle not overriding
                // hoverStyle={{
                //   backgroundColor: 'red',
                // }}
                borderRadius={1000}
                iconAfter={ArrowRight}
                tag="a"
                fontWeight="800"
              >
                Documentation
              </Button>
            </NextLink>

            <NextLink href="https://github.com/tamagui/tamagui" passHref>
              <YStack p="$2" opacity={0.65} hoverStyle={{ opacity: 1 }} tag="a" target="_blank">
                <VisuallyHidden>
                  <Text>Github</Text>
                </VisuallyHidden>
                <GithubIcon width={23} />
              </YStack>
            </NextLink>

            <NextLink
              href="https://discord.gg/4qh6tdcVDa"
              passHref
              // css={{ mr: '$5', '@bp2': { mr: '$7' } }}
            >
              <YStack
                p="$2"
                $sm={{ height: 0, width: 0, overflow: 'hidden', mx: -18 }}
                opacity={0.65}
                hoverStyle={{ opacity: 1 }}
                tag="a"
                target="_blank"
              >
                <VisuallyHidden>
                  <Text>Discord</Text>
                </VisuallyHidden>
                <DiscordIcon plain width={23} />
              </YStack>
            </NextLink>
          </XStack>
        </YStack>

        <Spacer size="$10" />
      </ContainerLarge>
    </YStack>
  )
})
