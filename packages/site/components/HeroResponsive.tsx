import { ChevronLeft, ChevronRight, Lock, Monitor } from '@tamagui/feather-icons'
import { memo, useState } from 'react'
import { Circle, Image, Paragraph, Spacer, Theme, XStack, YStack } from 'tamagui'

import favicon from '../public/favicon.svg'
import { ContainerLarge } from './Container'
import { HomeH2 } from './HomeH2'
import { IconStack } from './IconStack'

export const HeroResponsive = memo(() => {
  const [width, setWidth] = useState(70)

  return (
    <ContainerLarge>
      <YStack>
        <Header />

        <Spacer size="$6" />

        <XStack ai="center" f={1} w={`${width}%`} space>
          <Safari />

          <YStack
            bc="$color"
            opacity={0.35}
            hoverStyle={{ opacity: 0.4 }}
            br="$8"
            w={8}
            height={34}
          />
        </XStack>
      </YStack>
    </ContainerLarge>
  )
})

const Header = memo(() => {
  return (
    <XStack f={1} ov="hidden" space="$6">
      <Theme name="purple_alt2">
        <IconStack p="$4">
          <Monitor />
        </IconStack>
      </Theme>

      <YStack f={1} mt={-10} space="$2">
        <HomeH2 als="flex-start">Responsive, everywhere</HomeH2>
        <Paragraph maxWidth={580} size="$6" theme="alt2">
          Resizing React Native Web apps is often incredibly slow as every component on screen runs
          JavaScript on the main thread.
        </Paragraph>
      </YStack>
    </XStack>
  )
})

const Safari = memo(() => {
  return (
    <YStack f={1} ov="hidden" elevation="$1" br="$3" boc="$borderColor" borderWidth={1}>
      <YStack
        px="$4"
        jc="center"
        btrr="$2"
        btlr="$2"
        borderBottomWidth={0}
        h={50}
        bc="$backgroundHover"
      >
        <XStack pos="relative" ai="center" space="$4">
          <XStack space="$2">
            <Circle bc="$red10" size={10} />
            <Circle bc="$yellow10" size={10} />
            <Circle bc="$green10" size={10} />
          </XStack>

          <XStack space="$1">
            <ChevronLeft size={20} color="var(--colorPress)" />
            <ChevronRight size={20} color="var(--colorPress)" />
          </XStack>

          <XStack fullscreen ai="center">
            <XStack f={1} />
            {/* @ts-ignore */}
            <XStack
              h={30}
              f={2}
              br="$1"
              borderWidth={1}
              boc="$borderColor"
              bc="$backgroundPress"
              ai="center"
              px="$2"
              jc="center"
              space
            >
              <Lock color="var(--colorPress)" size={12} />
              <Paragraph theme="alt1" size="$2">
                tamagui.dev
              </Paragraph>
            </XStack>
            <XStack f={1} />
          </XStack>
        </XStack>
      </YStack>

      <XStack bbw={1} boc="$borderColor" bc="$backgroundHover">
        <Tab btlr={0}>Tamagui - React Native & Web UI kits</Tab>
        <Tab active>Tamagui - React Native & Web UI kits</Tab>
        <Tab btrr={0}>Tamagui - React Native & Web UI kits</Tab>
      </XStack>

      <YStack h={200}>
        <BrowserPane />
      </YStack>
    </YStack>
  )
})

const Tab = memo(({ active, children, ...props }: any) => {
  return (
    <Theme name={active ? null : 'alt3'}>
      <XStack
        btw={1}
        boc={active ? 'transparent' : '$borderColor'}
        blw={1}
        brw={1}
        btlr={active ? 0 : 4}
        btrr={active ? 0 : 4}
        bc="$background"
        ov="hidden"
        f={1}
        py="$1"
        px="$2"
        ai="center"
        {...props}
      >
        <Image width={16} height={16} src={favicon} />
        <Spacer size="$2" />
        <Paragraph cursor="default" size="$3" ellipse>
          {children}
        </Paragraph>
      </XStack>
    </Theme>
  )
})

const BrowserPane = memo(() => {
  return <YStack></YStack>
})
