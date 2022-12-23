import {
  SourceCodeTransformer,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export const transformers: SourceCodeTransformer[] = [
  transformerVariantGroup(),
  transformerDirectives(),
  transformerCompileClass(),
]
