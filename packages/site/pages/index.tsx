import { Community } from '@components/Community'
import { FeaturesGrid } from '@components/FeaturesGrid'
import { Hero } from '@components/Hero'
import { TitleAndMetaTags } from '@components/TitleAndMetaTags'
import Link from 'next/link'
import {
  Button,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Image,
  Paragraph,
  Separator,
  Text,
  XStack,
  YStack,
  debounce,
} from 'tamagui'

import { BenchmarkChart } from '../components/BenchmarkChart'
import { ContainerLarge } from '../components/Container'
import { Features } from '../components/Features'
import { HeaderFloating } from '../components/HeaderFloating'
import { HeroExampleAnimations } from '../components/HeroExampleAnimations'
import { HeroExampleCode } from '../components/HeroExampleCode'
import { HeroExampleThemes } from '../components/HeroExampleThemes'
import { HomeH2, HomeH3 } from '../components/HomeH2'
import { InstallInput } from '../components/InstallInput'
import { PageSeparator } from '../components/PageSeparator'
import { ThemeTint } from '../components/ThemeTint'

export default function Home() {
  // return <HeroExampleAnimations />

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
          <Performance />
          <PageSeparator />
          <HeroExampleFonts />
          <PageSeparator />
          <FeaturesItems />
          <PageSeparator />
          <FeaturesGrid />
          <PageSeparator />
          <Community />
        </YStack>
      </YStack>
    </>
  )
}

const HeroExampleFonts = () => {
  return (
    <ContainerLarge position="relative">
      <YStack ai="center" space="$2">
        <HomeH2>Typography</HomeH2>
      </YStack>

      <XStack p="$6" space $sm={{ flexDirection: 'column' }}>
        <YStack
          jc="center"
          ai="flex-end"
          p="$6"
          mw="50%"
          $sm={{ mw: '100%' }}
          f={2}
          als="center"
          space
        >
          <H1>Hot-swappable</H1>
          <H2 opacity={1}>individually-styled</H2>
          <H3 opacity={0.8}>typed and optimized</H3>
          <H4 opacity={0.6}>premade or custom</H4>
          <H5 opacity={0.4}>easy to author</H5>
          <H6 opacity={0.2}>font themes</H6>
        </YStack>
        <Separator vertical />
        <YStack jc="center" p="$6" space="$6" mw="50%" $sm={{ mw: '100%' }}>
          <Paragraph ta="left" fontSize="$8" lineHeight="$8" theme="alt1">
            Font themes that understand the needs of vertical rythym.
          </Paragraph>

          <Paragraph ta="left" fontSize="$6" lineHeight="$6" theme="alt2">
            Tamagui font tokens are designed to overcome limitations of existing design systems.
          </Paragraph>

          <Paragraph ta="left" fontSize="$4" lineHeight="$4" theme="alt2">
            Control each font individually for every prop from font-size to letter-spacing -
            specifically at every size.
          </Paragraph>
        </YStack>
      </XStack>
    </ContainerLarge>
  )
}

const FeatureItem = ({ label, children }) => {
  return (
    <Paragraph>
      <Text fow="800">{label}</Text>&nbsp;&nbsp;—&nbsp;&nbsp;
      <Paragraph theme="alt3">{children}</Paragraph>
    </Paragraph>
  )
}

const FeaturesItems = () => {
  return (
    <ContainerLarge position="relative">
      <YStack ai="center" space="$2">
        <HomeH2>More to every component</HomeH2>
        <HomeH3>Time-saving props on every view</HomeH3>
      </YStack>

      <XStack p="$6" space="$4" $sm={{ flexDirection: 'column' }}>
        <YStack w="50%" $sm={{ w: '100%' }}>
          <Features
            items={[
              <FeatureItem label="Press & hover events">
                onHoverIn, onHoverOut, onPressIn, and onPressOut.
              </FeatureItem>,
              <FeatureItem label="Pseudo styles">
                hoverStyle, pressStyle, and focusStyle. Works in combination with media queries.
              </FeatureItem>,
              <FeatureItem label="Media queries">
                Every style can be adjusted based on screen sizes, written inline without losing
                performance.
              </FeatureItem>,
            ]}
          />
        </YStack>
        <YStack w="50%" $sm={{ w: `100%` }}>
          <Features
            items={[
              <FeatureItem label="Themes">
                Change themes with a single prop on all components.
              </FeatureItem>,
              <FeatureItem label="Animations">
                One line animations, easy to configure down to the property.
              </FeatureItem>,
              <FeatureItem label="DOM escape hatches">
                Pass className and HTML attributes directly. On native they are ignored.
              </FeatureItem>,
            ]}
          />
        </YStack>
      </XStack>
    </ContainerLarge>
  )
}

function Performance() {
  return (
    <ContainerLarge position="relative">
      <YStack ai="center" zi={1} space="$4">
        <YStack ai="center" space="$2">
          <HomeH2>Dramatically better performance</HomeH2>
          <Paragraph maxWidth={580} ta="center" size="$6" theme="alt2">
            Tamagui makes all styles - even inline styles - far faster than any other UI kit thanks
            to an advanced, multi-stage optimizing compiler.
          </Paragraph>
        </YStack>

        <YStack
          // borderStyle="dashed"
          // borderWidth={1}
          // borderColor="$colorTranslucent"
          p="$2"
          br="$8"
          width="100%"
          ai="stretch"
        >
          <BenchmarkChart
            large
            data={[
              { name: 'Tamagui', value: 0.02 },
              { name: 'react-native-web', value: 0.063 },
              { name: 'Dripsy', value: 0.108 },
              { name: 'NativeBase', value: 0.73 },
              { name: 'Stitches', value: 0.037 },
              { name: 'Emotion', value: 0.069 },
              { name: 'SC', value: 0.081 },
            ]}
          />
        </YStack>

        <Paragraph theme="alt3" size="$3">
          Lower is better. As of February 2022.
        </Paragraph>

        <Link href="/docs/intro/benchmarks" passHref>
          <Button theme="blue" tag="a">
            See the benchmarks
          </Button>
        </Link>
      </YStack>
    </ContainerLarge>
  )
}
