import { TitleAndMetaTags } from '@components/TitleAndMetaTags'
import { Image, Square, XStack, YStack } from 'tamagui'

import img1 from '../public/photo1.webp'
import img2 from '../public/photo2.webp'
import img3 from '../public/photo3.webp'

export default function ResponsiveDemo() {
  return (
    <>
      <TitleAndMetaTags title="Tamagui — Responsive Demo" />
      <YStack p="$4">
        <YStack space="$6">
          <XStack space>
            <Image y={0} br="$4" width={100} height={200} src={img1.src} />
            <Image y={0} br="$4" width={100} height={200} src={img2.src} />
            <Image y={0} br="$4" width={100} height={200} src={img3.src} />
          </XStack>
        </YStack>
      </YStack>
    </>
  )
}
