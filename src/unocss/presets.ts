import { Preset, presetIcons, presetTypography, presetWind } from 'unocss'

export const presets: Preset[] = [
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
