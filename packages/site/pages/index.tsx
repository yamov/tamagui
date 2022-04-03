import { Community } from '@components/Community'
import { FeaturesGrid } from '@components/FeaturesGrid'
import { Hero } from '@components/Hero'
import { TitleAndMetaTags } from '@components/TitleAndMetaTags'
import { useMemo } from 'react'
import { Spacer, Theme, ThemeReset, XStack, YStack } from 'tamagui'

import { useTint } from '../components/ColorToggleButton'
import { ContainerLarge } from '../components/Container'
import { HeaderFloating } from '../components/HeaderFloating'
import { HeroBelow } from '../components/HeroBelow'
import { HeroExampleAnimations } from '../components/HeroExampleAnimations'
import { HeroExampleCode } from '../components/HeroExampleCode'
import { HeroExampleProps } from '../components/HeroExampleProps'
import { HeroExampleThemes } from '../components/HeroExampleThemes'
import { HeroPerformance } from '../components/HeroPerformance'
import { HeroResponsive } from '../components/HeroResponsive'
import { HeroTypography } from '../components/HeroTypography'
import { InstallInput } from '../components/InstallInput'
import { PageSeparator } from '../components/PageSeparator'
import { ThemeTint } from '../components/ThemeTint'

export default function Home() {
  return (
    <>
      <TitleAndMetaTags title="Tamagui — React Native + Web UI kit" />
      <HeaderFloating />
      <YStack>
        <YStack>
          <Hero />
          <YStack py="$7" pb="$10">
            <HeroBelow />
          </YStack>
          <ContainerLarge zi={100}>
            <XStack mb="$-4" jc="center" ai="center">
              <ThemeTint>
                <InstallInput />
              </ThemeTint>
            </XStack>
          </ContainerLarge>
          <SectionTinted gradient>
            <HeroExampleThemes />
          </SectionTinted>
          <Section below>
            <HeroResponsive />
          </Section>
          <SectionTinted gradient>
            <HeroPerformance />
          </SectionTinted>
          <Section>
            <HeroExampleCode />
          </Section>
          <SectionTinted>
            <HeroExampleAnimations />
          </SectionTinted>
          <Section>
            <HeroTypography />
          </Section>
          <SectionTinted gradient>
            <HeroExampleProps />
          </SectionTinted>
          <Section>
            <FeaturesGrid />
          </Section>
          <Community />
        </YStack>
      </YStack>
    </>
  )
}

const Section = ({ children, below }: any) => {
  return (
    <YStack contain="paint" pos="relative" ov="hidden" py="$12" zi={below ? 0 : 1}>
      {children}
    </YStack>
  )
}

const SectionTinted = ({ children, gradient, ...props }: any) => {
  const { tint } = useTint()
  const childrenMemo = useMemo(() => children, [children])
  const className = gradient ? `gradient-${tint}` : ''
  return (
    <YStack contain="paint" pos="relative" py="$12" {...props}>
      <YStack
        fullscreen
        className={className}
        // o={0.85}
        zi={-1}
        // @ts-ignore
        bc={`$${tint}1`}
        btw={1}
        bbw={1}
        // @ts-ignore
        boc={`$${tint}2`}
      />
      {childrenMemo}
    </YStack>
  )
}
