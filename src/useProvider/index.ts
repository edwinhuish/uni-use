import { resolveUnref } from '@vueuse/core';
import { reactive } from 'vue';
import type { MaybeComputedRef } from '../types';

export interface UniGetProviderOptions extends UniApp.GetProviderOptions {}
export type GetProviderOptions = MaybeComputedRef<UniGetProviderOptions>;
export type UseProviderOptions = GetProviderOptions;

/**
 * 返回一个方法，调用后获取服务供应商
 *
 * https://uniapp.dcloud.net.cn/api/plugins/provider?id=getprovider
 */
export function useProvider(options?: UseProviderOptions) {
  /**
   * 获取服务供应商
   *
   * https://uniapp.dcloud.net.cn/api/plugins/provider?id=getprovider
   */
  return function getProvider(newOptions?: GetProviderOptions) {
    return uni.getProvider(
      reactive({
        service: 'oauth',
        ...resolveUnref(options),
        ...resolveUnref(newOptions),
      }),
    );
  };
}
