import { presetIcons, presetTypography, presetWind } from 'unocss'

export const presets = [
  presetWind(),
  presetTypography({}),
  presetIcons({
    prefix: 'icon-',
    extraProperties: {
      display: 'inline-block',
      'vertical-align': 'middle',
      color: 'inherit',
    },
  }),
]
