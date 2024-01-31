import { defineNuxtModule, createResolver, addImports } from '@nuxt/kit'
import { defu } from 'defu'

import type { ModuleOptions } from './runtime/types'

export type { ModuleOptions }

const defaultOptions = {
  baseURL: '/',
} satisfies ModuleOptions

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@roshan-labs/http',
    configKey: 'http',
  },
  setup(userOptions, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    const options = defu(userOptions, defaultOptions)

    nuxt.options.runtimeConfig.public.http = options

    addImports({ name: 'useHttp', from: resolve('./runtime/use-http') })
  },
})
