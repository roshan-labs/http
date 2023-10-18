import type { NitroFetchRequest } from 'nitropack'

export type FetchOptions<
  T = any,
  R extends NitroFetchRequest = NitroFetchRequest
> = Parameters<typeof $fetch<T, R>>[1]

export type Params = Record<string, any>
