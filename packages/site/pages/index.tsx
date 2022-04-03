import { Community } from '@components/Community'
import { FeaturesGrid } from '@components/FeaturesGrid'
import { Hero } from '@components/Hero'
import { TitleAndMetaTags } from '@components/TitleAndMetaTags'
import { useMemo } from 'react'
import { Spacer, Theme, ThemeReset, XStack, YStack } from 'tamagui'

import { useTint } from '../components/ColorToggleButton'
import { ContainerLarge } from '../components/Container'
import { HeaderFloating } from '../components/HeaderFloating'
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
          <ContainerLarge>
            <XStack mt="$8" mb="$-4" jc="center" ai="center">
              <ThemeTint>
                <InstallInput />
              </ThemeTint>
            </XStack>
          </ContainerLarge>
          <SectionTinted>
            <HeroExampleThemes />
          </SectionTinted>
          <Section>
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
          <Spacer size="$10" />
          <PageSeparator />
          <Spacer size="$10" />
          <Community />
        </YStack>
      </YStack>
    </>
  )
}

const Section = ({ children }) => {
  return <YStack py="$9">{children}</YStack>
}

const SectionTinted = ({ children, ...props }: any) => {
  const { tint } = useTint()
  const childrenMemo = useMemo(() => children, [children])
  return (
    <YStack pos="relative" py="$9" {...props}>
      <YStack
        fullscreen
        zi={-1}
        bc={`$${tint}1`}
        btw={1}
        bbw={1}
        boc={`$${tint}4`}
        opacity={0.75}
      />
      {childrenMemo}
    </YStack>
  )
}
