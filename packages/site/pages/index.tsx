import { Community } from '@components/Community'
import { FeaturesGrid } from '@components/FeaturesGrid'
import { Hero } from '@components/Hero'
import { TitleAndMetaTags } from '@components/TitleAndMetaTags'
import { XStack, YStack } from 'tamagui'

import { ContainerLarge } from '../components/Container'
import { HeaderFloating } from '../components/HeaderFloating'
import { HeroExampleAnimations } from '../components/HeroExampleAnimations'
import { HeroExampleCode } from '../components/HeroExampleCode'
import { HeroExampleFonts } from '../components/HeroExampleFonts'
import { HeroExampleProps } from '../components/HeroExampleProps'
import { HeroExampleThemes } from '../components/HeroExampleThemes'
import { HeroPerformance } from '../components/HeroPerformance'
import { HeroResponsive } from '../components/HeroResponsive'
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
          <HeroExampleThemes />
          <PageSeparator />
          <HeroExampleAnimations />
          <PageSeparator />
          <HeroExampleCode />
          <PageSeparator />
          <HeroPerformance />
          <PageSeparator />
          <HeroResponsive />
          <PageSeparator />
          <HeroExampleFonts />
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
