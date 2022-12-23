import {
  WuiAlert,
  WuiTag,
  WuiButton,
  WuiScrollUp,
  WuiSelect,
  WuiInput,
  WuiCheckbox,
  WuiAvatar,
  WuiAvatarGroup,
  WuiArticle,
  WuiBadge,
  WuiDivider,
  WuiDrawer,
  WuiDropdown,
  WuiCollapse,
  WuiCollapseItem,
  WuiModal,
  WuiButtonDropdown,
  WuiTooltip,
  WuiButtonGroup,
  WuiPopover,
  WuiProgressBar,
  WuiPagination,
  WuiSwitch,
  WuiSpinnerOverlay,
  WuiTabNav,
  WuiTable,
  WuiTableCell,
  WuiCard,
  WuiComment,
  WuiQuickDialog,
  WuiHierarchy,
  WuiTextarea,
  WuiTransition,
  WuiTransitionPage,
  WuiRouteWrapper,
  WuiRadio,
  WuiLink,
  WuiNav,
  WuiSpinner,
  WuiDropArea,
  WuiNumberInput,
  WuiLoadMore,
  WuiCodeDemo,
  WuiCodeExample,
  WuiPropsTable,
} from '@as1024/components'
import { LoadingBar } from '@as1024/loading-bar'
import { Message } from '@as1024/message'
import { Notification } from '@as1024/notification'
import FloatingVue from 'floating-vue'
import type { App, Ref } from 'vue'
import 'floating-vue/dist/style.css'

/**
 * WyrdUI plugin
 *
 * @public
 */
export function install(app: App, options): void {
  app.use(FloatingVue)

  app.config.globalProperties.$Message = Message
  app.provide('$Message', Message)

  app.config.globalProperties.$Notification = Notification
  app.provide('$Notification', Notification)

  app.config.globalProperties.$LoadingBar = LoadingBar
  app.provide('$LoadingBar', LoadingBar)

  if (options?.components) {
    for (const [key, value] of options.components) {
      app.component(key, (value as any).default)
    }
  } else {
    app.component('WuiPropsTable', WuiPropsTable)
    app.component('WuiCodeExample', WuiCodeExample)
    app.component('WuiCodeDemo', WuiCodeDemo)

    app.component('WuiButtonDropdown', WuiButtonDropdown)
    app.component('WuiButtonGroup', WuiButtonGroup)
    app.component('WuiTooltip', WuiTooltip)

    app.component('WuiPopover', WuiPopover)
    app.component('WuiProgressBar', WuiProgressBar)
    app.component('WuiPagination', WuiPagination)
    app.component('WuiSwitch', WuiSwitch)
    app.component('WuiSpinnerOverlay', WuiSpinnerOverlay)
    app.component('WuiTabNav', WuiTabNav)
    app.component('WuiTable', WuiTable)
    app.component('WuiTableCell', WuiTableCell)
    app.component('WuiCard', WuiCard)
    app.component('WuiComment', WuiComment)
    app.component('WuiQuickDialog', WuiQuickDialog)
    app.component('WuiHierarchy', WuiHierarchy)
    app.component('WuiTextarea', WuiTextarea)
    app.component('WuiTransition', WuiTransition)
    app.component('WuiTransitionPage', WuiTransitionPage)
    app.component('WuiRouteWrapper', WuiRouteWrapper)
    app.component('WuiRadio', WuiRadio)
    app.component('WuiLink', WuiLink)
    app.component('WuiNav', WuiNav)
    app.component('WuiSpinner', WuiSpinner)
    app.component('WuiDropArea', WuiDropArea)
    app.component('WuiNumberInput', WuiNumberInput)
    app.component('WuiLoadMore', WuiLoadMore)

    app.component('WuiModal', WuiModal)
    app.component('WuiAlert', WuiAlert)
    app.component('WuiTag', WuiTag)
    app.component('WuiButton', WuiButton)
    app.component('WuiScrollUp', WuiScrollUp)
    app.component('WuiSelect', WuiSelect)
    app.component('WuiInput', WuiInput)
    app.component('WuiCheckbox', WuiCheckbox)
    app.component('WuiAvatar', WuiAvatar)
    app.component('WuiAvatarGroup', WuiAvatarGroup)
    app.component('WuiArticle', WuiArticle)
    app.component('WuiBadge', WuiBadge)
    app.component('WuiDivider', WuiDivider)
    app.component('WuiDrawer', WuiDrawer)
    app.component('WuiDropdown', WuiDropdown)
    app.component('WuiCollapse', WuiCollapse)
    app.component('WuiCollapseItem', WuiCollapseItem)
  }

  const $WyrdUI = {
    drawers: [] as Ref[],
    modals: [] as Ref[],
  }

  app.config.globalProperties.$WyrdUI = $WyrdUI
  app.provide('$WyrdUI', WyrdUI)
}

/**
 * WyrdUI plugin
 *
 * @public
 */
export const WyrdUI = { install }
