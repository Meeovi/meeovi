import { toRefs } from '@vueuse/shared';
import { computed } from 'vue';
import type { Ref } from 'vue';
import type { Maybe, SfShippingMethods } from '@vue-storefront/unified-data-model';
import type {
  UseCartShippingMethodsState,
  UseCartShippingMethodsReturn,
  GetShippingMethods,
} from './types';
import { useSdk } from '../../sdk';
import { useAsyncData, useState } from 'nuxt/app';
import { useHandleError } from '../useHandleError';

/**
 * @description Composable for getting shipping methods.
 * @example
 * const { data, loading, getShippingMethods } = useCartShippingMethods();
 */

export const useCartShippingMethods: UseCartShippingMethodsReturn = () => {
  const state = useState<UseCartShippingMethodsState>('useCartSippingMethods', () => ({
    data: null,
    loading: false,
  }));

  /**
   * @description Function for fetching shipping methods.
   * @example
   * getShippingMethods();
   */

  const getShippingMethods: GetShippingMethods = async () => {
    state.value.loading = true;
    const { data, error } = await useAsyncData<any>(() => useSdk().commerce.getShippingMethods());
    useHandleError(error.value);
    const result = (data.value && (data.value as any).methods) ? data.value : { methods: [] };
    state.value.data = result as any;
    state.value.loading = false;
    return computed(() => state.value.data) as unknown as Ref<Maybe<SfShippingMethods>>;
  };

  return {
    getShippingMethods,
    ...toRefs(state.value),
  };
};
