import { defineNuxtModule, createResolver, addImports } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  baseURL?: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@roshan-labs/http',
    configKey: 'http',
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public.http = {
      baseURL: '/',
      ...options,
    }

    addImports({ name: 'useHttp', from: resolve('./runtime/use-http') })
  },
})
