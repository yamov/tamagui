import { Community } from '@components/Community'
import { FeaturesGrid } from '@components/FeaturesGrid'
import { Hero } from '@components/Hero'
import { TitleAndMetaTags } from '@components/TitleAndMetaTags'
import { useMemo } from 'react'
import { Theme, ThemeReset, XStack, YStack } from 'tamagui'

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
        <YStack space="$8">
          <Hero />
          <ContainerLarge>
            <XStack mt="$3" ai="center">
              <PageSeparator />
              <ThemeTint>
                <InstallInput />
              </ThemeTint>
              <PageSeparator />
            </XStack>
          </ContainerLarge>

          <TintedYStack>
            <HeroExampleThemes />
          </TintedYStack>

          <HeroResponsive />
          <PageSeparator />
          <HeroExampleCode />
          <TintedYStack>
            <HeroPerformance />
          </TintedYStack>
          <HeroExampleAnimations />
          <PageSeparator />
          <HeroTypography />

          <TintedYStack>
            <HeroExampleProps />
          </TintedYStack>

          <FeaturesGrid />

          <TintedYStack>
            <Community />
          </TintedYStack>
        </YStack>
      </YStack>
    </>
  )
}

const TintedYStack = ({ children, ...props }: any) => {
  const { tint } = useTint()
  const childrenMemo = useMemo(() => children, [children])
  return (
    <YStack py="$8" my="$4" bc={`$${tint}1`} btw={1} bbw={1} boc={`$${tint}4`} {...props}>
      {childrenMemo}
    </YStack>
  )
}
