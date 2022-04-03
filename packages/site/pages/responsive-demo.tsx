import { TitleAndMetaTags } from '@components/TitleAndMetaTags'
import { Image, Square, XStack, YStack } from 'tamagui'

import img1 from '../public/photo1.webp'

export default function ResponsiveDemo() {
  return (
    <>
      <TitleAndMetaTags title="Tamagui — Responsive Demo" />
      <YStack>
        <YStack space="$6">
          <XStack>
            <img width={100} height={200} src={img1} />
          </XStack>
          <Square bc="red" size={100} />
        </YStack>
      </YStack>
    </>
  )
}
