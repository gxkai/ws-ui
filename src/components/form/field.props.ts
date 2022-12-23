import type { FormMessage } from '@as1024/types'
import type { PropType } from 'vue'

export const wuiFormInputWrapperPropsBase = {
  isRequired: {
    type: Boolean,
    default: false,
  },
  messages: {
    type: Array as PropType<FormMessage[]>,
    default: (): FormMessage[] => [],
  },
  isValid: {
    type: Boolean,
    default: true,
  },
  customClass: {
    type: String,
    default: null,
  },
}

export const wuiFormInputPropsBase = {
  ...wuiFormInputWrapperPropsBase,
  value: {
    type: [String, Number],
    default: null,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  onChange: {
    type: Function as PropType<(payload: Event) => void>,
    required: true,
  },
  onFocus: {
    type: Function as PropType<(payload: Event) => void>,
    required: true,
  },
  onBlur: {
    type: Function as PropType<(payload: Event) => void>,
    required: true,
  },
}
