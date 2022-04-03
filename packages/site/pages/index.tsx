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
          <ContainerLarge>
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
          <SectionTinted>
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
          <SectionTinted>
            <HeroExampleProps />
          </SectionTinted>
          <Section>
            <FeaturesGrid />
          </Section>
          <PageSeparator />
          <Spacer size="$10" />
          <Community />
        </YStack>
      </YStack>
    </>
  )
}

const Section = ({ children, below }: any) => {
  return (
    <YStack pos="relative" ov="hidden" py="$11" zi={below ? 0 : 1}>
      {children}
    </YStack>
  )
}

const SectionTinted = ({ children, gradient, ...props }: any) => {
  const { tint } = useTint()
  const childrenMemo = useMemo(() => children, [children])
  return (
    <YStack pos="relative" py="$11" {...props}>
      <YStack
        fullscreen
        className={gradient ? `gradient-${tint}` : ''}
        zi={-1}
        // @ts-ignore
        bc={`$${tint}1`}
        btw={1}
        bbw={1}
        // @ts-ignore
        boc={`$${tint}4`}
      />
      {childrenMemo}
    </YStack>
  )
}
