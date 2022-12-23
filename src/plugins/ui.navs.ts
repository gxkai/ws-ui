import type { WyrdNavItemDefinition } from '@as1024/types'

export const uiNavs: WyrdNavItemDefinition[] = [
  {
    to: { name: 'ui' },
    label: 'UI',
    icon: 'ph-presentation-light',
    nav: 'admin',
    sort: 990,
    meta: {
      auth: true,
    },
  },
]

export default uiNavs
