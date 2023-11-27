import { createGlobalState } from '@vueuse/core'

import { Http } from './http'
import { useRuntimeConfig } from '#imports'

export const useHttp = createGlobalState(() => {
  const config = useRuntimeConfig()
  const http = new Http(config.public.http)

  return http
})
