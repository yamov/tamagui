import { ChevronLeft, ChevronRight, Lock, Monitor } from '@tamagui/feather-icons'
import throttle from 'lodash.throttle'
import { memo, useRef, useState } from 'react'
import { Circle, Image, Paragraph, Spacer, Theme, XStack, YStack } from 'tamagui'

import favicon from '../public/favicon.svg'
import { ContainerLarge } from './Container'
import { Glow } from './Glow'
import { HomeH2 } from './HomeH2'
import { IconStack } from './IconStack'
import { useOnIntersecting } from './useOnIntersecting'

export const HeroResponsive = memo(() => {
  const [isDragging, setIsDragging] = useState(false)
  const [move, setMove] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)
  const safariRef = useRef<HTMLElement | null>(null)

  useOnIntersecting(ref, ({ isIntersecting, dispose }) => {
    if (isIntersecting) {
      const node = safariRef.current
      if (!node) return
      const left = node.offsetWidth + node.offsetLeft
      const onMove = throttle((e: MouseEvent) => {
        if (!isDragging) return
        const move = Math.min(500, Math.max(0, e.pageX - left))
        setMove(move)
      }, 16)
      window.addEventListener('mousemove', onMove)
      return () => {
        window.removeEventListener('mousemove', onMove)
      }
    } else {
      dispose?.()
    }
  })

  const width = `calc(400px + ${move}px)`

  return (
    <YStack overflow="hidden" y={0} my="$-10" py="$10" pos="relative">
      <ContainerLarge>
        <Header />

        <Spacer size="$6" />
        <div ref={ref} />

        <XStack f={1} space>
          <YStack
            className="unselectable"
            pe={isDragging ? 'none' : 'auto'}
            w={width}
            mw={width}
            f={1}
            ref={safariRef}
          >
            <Safari />
          </YStack>

          <YStack
            jc="center"
            cursor="ew-resize"
            onPressIn={() => {
              setIsDragging(true)
            }}
            onPressOut={() => {
              setIsDragging(false)
            }}
          >
            <YStack
              bc="$color"
              opacity={0.35}
              hoverStyle={{ opacity: 0.4 }}
              br="$8"
              w={8}
              height={34}
            />
          </YStack>
        </XStack>
      </ContainerLarge>

      <YStack pos="absolute" zi={-1} t="50%" l={0} r={0} b={0} ai="center" jc="center">
        <YStack pos="absolute" top={-100} right={0}>
          <Glow backgroundColor="red" />
        </YStack>
        <YStack zi={-1} f={1} h="100%" w="100%" className="bg-grid" />
      </YStack>
    </YStack>
  )
})

const Header = memo(() => {
  return (
    <XStack f={1} ov="hidden">
      <XStack $sm={{ display: 'none' }}>
        <IconStack theme="purple_alt2" p="$4">
          <Monitor />
        </IconStack>
        <Spacer size="$6" />
      </XStack>

      <YStack f={1} mt={-10} space="$2">
        <HomeH2 als="flex-start">Responsive done right</HomeH2>
        <Paragraph maxWidth={580} size="$5" theme="alt2">
          Responsive hooks resize slowly - every component runs expensive JS on the main thread on
          every frame.
        </Paragraph>

        <Paragraph maxWidth={580} size="$5" theme="alt2">
          Tamagui compiles inline responsive styles and hooks into CSS Media Queries on the web, and
          hoists to StyleSheet.create on native.
        </Paragraph>
      </YStack>
    </XStack>
  )
})

const height = 400

const Safari = memo(() => {
  return (
    <YStack
      bc="$background"
      f={1}
      ov="hidden"
      elevation="$1"
      br="$3"
      boc="$borderColor"
      borderWidth={1}
      w="100%"
    >
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

      <XStack bbw={1} boc="$borderColor">
        <Tab btlr={0}>Tamagui - React Native & Web UI kits</Tab>
        <Tab active>Tamagui - React Native & Web UI kits</Tab>
        <Tab btrr={0}>Tamagui - React Native & Web UI kits</Tab>
      </XStack>

      <YStack bc="$backgroundHover" h={height}>
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
        bc="$backgroundHover"
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
  return (
    <YStack>
      <iframe width="100%" height={height} src="/responsive-demo" />
    </YStack>
  )
})
