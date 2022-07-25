import { mauve, sage, slate, olive, sand } from '@radix-ui/colors'
import { colors } from '@unocss/preset-wind'
import {
  defineConfig,
  presetWind,
  presetTypography,
  presetIcons,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export function createConfig({ strict = true, dev = true } = {}): any {
  return defineConfig({
    envMode: dev ? 'dev' : 'build',
    theme: {
      colors: {
        primary: colors?.indigo,
        secondary: colors?.blue,
        accent: colors?.sky,
        neutral: colors?.zinc,
        success: colors?.lime,
        warning: colors?.amber,
        danger: colors?.rose,
        link: colors?.sky,
        info: colors?.sky,
        mauve,
        sage,
        slate,
        olive,
        sand,
      },
    },
    presets: [
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
    ],
    transformers: [
      transformerVariantGroup(),
      transformerDirectives(),
      transformerCompileClass(),
    ],
  })
}

export default createConfig()
