import { Community } from '@components/Community'
import { FeaturesGrid } from '@components/FeaturesGrid'
import { Hero } from '@components/Hero'
import { TitleAndMetaTags } from '@components/TitleAndMetaTags'
import { Theme, ThemeReset, XStack, YStack } from 'tamagui'

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
            <XStack my="$3" ai="center">
              <PageSeparator />
              <ThemeTint>
                <InstallInput />
              </ThemeTint>
              <PageSeparator />
            </XStack>
          </ContainerLarge>
          {/* <PageSeparator /> */}
          <Theme name="alt2">
            <YStack bc="$background">
              <ThemeReset>
                <HeroExampleThemes />
              </ThemeReset>
            </YStack>
          </Theme>
          <PageSeparator />
          <HeroResponsive />
          <PageSeparator />
          <HeroExampleCode />
          <PageSeparator />
          <HeroPerformance />
          <PageSeparator />
          <HeroExampleAnimations />
          <PageSeparator />
          <HeroTypography />
          <PageSeparator />
          <HeroExampleProps />
          <PageSeparator />
          <FeaturesGrid />
          <PageSeparator />
          <Community />
        </YStack>
      </YStack>
    </>
  )
}
