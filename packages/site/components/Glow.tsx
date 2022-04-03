import { Circle, styled } from 'tamagui'

export const Glow = styled(Circle, {
  className: 'glow',
  rotate: '20deg',
  bc: '$green10',
  size: 680,
  scaleX: 1.5,
  scaleY: 1.8,
  y: 0,
  o: 0.075,
  pe: 'none',
})
