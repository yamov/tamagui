import { Circle, styled } from 'tamagui'

export const Glow = styled(Circle, {
  className: 'glow',
  rotate: '20deg',
  bc: '$green10',
  size: 500,
  scaleX: 1,
  scaleY: 1.8,
  o: 0.15,
})
