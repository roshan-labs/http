import type { FetchOptions } from './types'
import { Http } from './http'
import { useRuntimeConfig, effectScope } from '#imports'

const createGlobalState = <F extends (...args: any[]) => any>(func: F): F => {
  let init = false
  let state: any
  const scope = effectScope(true)

  return ((...args) => {
    if (!init) {
      state = scope.run(() => func(...args))
      init = true

      return state
    }
  }) as F
}

export const useHttp = createGlobalState((options: FetchOptions = {}) => {
  const config = useRuntimeConfig()
  const http = new Http({
    ...config.public.http,
    ...options,
  })

  return http
})
