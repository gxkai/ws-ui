import { createHead } from '@vueuse/head'
import { createApp } from 'vue'
import {
  createRouter as createVueRouter,
  createWebHistory,
  createMemoryHistory,
} from 'vue-router'

import { WyrdUI } from '@as1024/plugins'

import App from './App.vue'
import { docsRoutes as routes } from './ui.docs.routes'

import '@unocss/reset/tailwind.css'
import '@as1024/styles/index.css'
// eslint-disable-next-line import/no-unresolved
import 'uno.css'

const history =
  import.meta.env.SSR === false ? createWebHistory() : createMemoryHistory()

const router = createVueRouter({
  history,
  routes,
})

const app = createApp(App)
app.use(WyrdUI)
app.use(router)
app.use(createHead())
app.mount('#app')
