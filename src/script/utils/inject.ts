import { inject, InjectionKey } from 'vue';
import { DEBUG } from './DEBUG';

export function Inject<T>(key: InjectionKey<T> | string): T {
  const val = inject(key);
  if (!val) {
    DEBUG('[INJECTION]Store Undefined', 'FATAL');
    throw new Error('Store is not provided');
  }
  return val;
}
