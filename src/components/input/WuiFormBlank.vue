<template>
  <WuiFormFieldWrapper
    v-bind="{
      schema,
      isValid,
      messages,
    }"
    class="input-blank"
  >
    <slot />
  </WuiFormFieldWrapper>
</template>

<script lang="ts">
import { wuiFormInputPropsBase } from '@as1024/form'
import { FormFieldText } from '@as1024/types'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    schema: {
      type: Object as PropType<FormFieldText>,
      required: true,
    },
    ...wuiFormInputPropsBase,
  },
})
</script>
