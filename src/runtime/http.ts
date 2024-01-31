import { defu } from 'defu'

import type { FetchOptions, Params } from './types'

export class Http {
  #options: FetchOptions

  constructor(options: FetchOptions = {}) {
    this.#options = options
  }

  create(options: FetchOptions = {}) {
    return new Http(defu(options, this.#options))
  }

  request<T = any>(url: string, options?: FetchOptions) {
    return $fetch<T>(url, defu(options, this.#options))
  }

  get<T = any>(url: string, params?: Params, options?: FetchOptions) {
    const fetchOptions = defu(options, this.#options)

    return $fetch<T>(
      url,
      defu<FetchOptions, FetchOptions[]>(fetchOptions, {
        method: 'get',
        params,
      }),
    )
  }

  post<T = any>(url: string, params?: Params, options?: FetchOptions) {
    const fetchOptions = defu(options, this.#options)

    return $fetch<T>(
      url,
      defu<FetchOptions, FetchOptions[]>(fetchOptions, {
        method: 'post',
        body: params,
      }),
    )
  }

  put<T = any>(url: string, params?: Params, options?: FetchOptions) {
    const fetchOptions = defu(options, this.#options)

    return $fetch<T>(
      url,
      defu<FetchOptions, FetchOptions[]>(fetchOptions, {
        method: 'put',
        body: params,
      }),
    )
  }

  delete<T = any>(url: string, params?: Params, options?: FetchOptions) {
    const fetchOptions = defu(options, this.#options)

    return $fetch<T>(
      url,
      defu<FetchOptions, FetchOptions[]>(fetchOptions, {
        method: 'delete',
        body: params,
      }),
    )
  }

  head(url: string, params?: Params, options?: FetchOptions) {
    const fetchOptions = defu(options, this.#options)

    return $fetch(
      url,
      defu<FetchOptions, FetchOptions[]>(fetchOptions, {
        method: 'head',
        params,
      }),
    )
  }

  options<T = any>(url: string, params?: Params, options?: FetchOptions) {
    const fetchOptions = defu(options, this.#options)

    return $fetch<T>(
      url,
      defu<FetchOptions, FetchOptions[]>(fetchOptions, {
        method: 'options',
        params,
      }),
    )
  }

  patch<T = any>(url: string, params?: Params, options?: FetchOptions) {
    const fetchOptions = defu(options, this.#options)

    return $fetch<T>(
      url,
      defu<FetchOptions, FetchOptions[]>(fetchOptions, {
        method: 'patch',
        body: params,
      }),
    )
  }
}
