import { UserConfig } from '@unocss/core'

import { presets } from './presets'
import { theme } from './theme'
import { transformers } from './transformers'

export const config: UserConfig = {
  presets,
  theme,
  transformers,
}
