import type { FetchOptions, Params } from './types'

export class Http {
  #options: FetchOptions

  constructor(options: FetchOptions = {}) {
    this.#options = options
  }

  create(options: FetchOptions = {}) {
    return new Http({
      ...this.#options,
      ...options,
    })
  }

  get<T = any>(url: string, params?: Params, options?: FetchOptions<T>) {
    return $fetch<T>(url, {
      method: 'get',
      params,
      ...this.#options,
      ...options,
    })
  }

  post<T = any>(url: string, params?: Params, options?: FetchOptions<T>) {
    const config = { ...this.#options, ...options }
    return $fetch<T>(url, {
      method: 'post',
      body: params,
      ...config,
    })
  }

  put<T = any>(url: string, params?: Params, options?: FetchOptions<T>) {
    const config = { ...this.#options, ...options }
    return $fetch<T>(url, {
      method: 'put',
      body: params,
      ...config,
    })
  }

  delete<T = any>(url: string, params?: Params, options?: FetchOptions<T>) {
    const config = { ...this.#options, ...options }
    return $fetch<T>(url, {
      method: 'delete',
      body: params,
      ...config,
    })
  }
}
