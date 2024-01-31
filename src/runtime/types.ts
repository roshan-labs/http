import type { $Fetch } from 'nitropack'

export type FetchOptions = NonNullable<Parameters<$Fetch>[1]>

export type Params = Record<string, any>

export interface ModuleOptions {
  /**
   * 请求地址前缀
   *
   * @default '/'
   */
  baseURL?: string
}
