import { useEffect, useRef } from 'react';
import { useSafeState, useMemoizedFn } from '@1money/hooks';
import { stableSerialize } from '../utils';
import type { ProFormRequestOption } from '../interface';

/**
 * Hook for async option fetching with param-based re-fetching.
 * Returns [loading, options].
 */
export function useFieldRequest(
  request: ((params?: Record<string, unknown>) => Promise<ProFormRequestOption[]>) | undefined,
  params: Record<string, unknown> | undefined,
): [boolean, ProFormRequestOption[]] {
  const [loading, setLoading] = useSafeState(false);
  const [options, setOptions] = useSafeState<ProFormRequestOption[]>([]);
  const requestRef = useRef(request);
  requestRef.current = request;

  const serializedParams = stableSerialize(params);

  const fetchOptions = useMemoizedFn(async () => {
    const fn = requestRef.current;
    if (!fn) return;
    setLoading(true);
    try {
      const result = await fn(params);
      if (Array.isArray(result)) {
        setOptions(result);
      }
    } finally {
      setLoading(false);
    }
  });

  useEffect(() => {
    if (!requestRef.current) return;
    fetchOptions();
  }, [serializedParams]);

  return [loading, options];
}

export default useFieldRequest;
