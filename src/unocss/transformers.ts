import {
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export const transformers = [
  transformerVariantGroup(),
  transformerDirectives(),
  transformerCompileClass(),
]
