import { DEBUG_FLAG } from 'src/global';

type LogLevel =
  | 'FATAL'
  | 1
  | 'ERROR'
  | 2
  | 'WARN'
  | 3
  | 'INFO'
  | 4
  | 'DEBUG'
  | 5
  | 'TRACE'
  | 6;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function DEBUG(message: any, level?: LogLevel) {
  if (!level) {
    level = 'DEBUG';
  }
  if (DEBUG_FLAG) {
    if (level === 'FATAL' || level === 1) {
      console.error('[DEBUG_COS5][!!!FATAL!!!]', '\n', message);
    } else if (level === 'ERROR' || level === 2) {
      console.error('[DEBUG_COS5][ERROR]', '\n', message);
    } else if (level === 'WARN' || level === 3) {
      console.warn('[DEBUG_COS5][WARN]', '\n', message);
    } else if (level === 'INFO' || level === 4) {
      console.info('[DEBUG_COS5][INFO]', '\n', message);
    } else if (level === 'DEBUG' || level === 5) {
      console.log('[DEBUG_COS5][DEBUG]', '\n', message);
    } else if (level === 'TRACE' || level === 6) {
      console.trace('[DEBUG_COS5][TRACE]', '\n', message);
    }
  }
}
