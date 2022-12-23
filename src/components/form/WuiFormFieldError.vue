<template>
  <div class="bg-red-50 text-red-600 border-red-200 border px-4 py-2 rounded">
    <span>{{ error.message }}</span>
    <em class="text-sm leading-relaxed float-right ml-2">{{ error.type }}</em>
  </div>
</template>

<script lang="ts">
import type { FormMessage } from '@as1024/types'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    error: {
      required: true,
      type: Object as () => FormMessage,
    },
  },
})
</script>
