<template>
  <component :is="elType" v-bind="customProps">
    <slot>{{ text }}</slot>
  </component>
</template>

<script lang="ts">
import { RouteLocationRaw } from '@as1024/types'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'WuiLink',
  props: {
    to: {
      type: [Object as () => RouteLocationRaw, String],
      required: true,
    },
    text: {
      type: String,
      default: undefined,
    },
  },
  setup(props) {
    const elType = computed(() => {
      return typeof props.to === 'string' && props.to.startsWith('http')
        ? 'a'
        : 'router-link'
    })

    const customProps = computed(() => {
      if (elType.value === 'a') {
        return {
          href: props.to,
        }
      }
      return {
        to: props.to,
      }
    })

    return {
      elType,
      customProps,
    }
  },
})
</script>
