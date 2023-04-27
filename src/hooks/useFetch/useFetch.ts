import { HttpHeader, StorageKey } from 'common/enums/enums';
import { useState, useEffect, useMemo } from 'hooks/hooks';
import { useToken } from 'hooks/useFetch/useToken';
import { storage } from 'services/services';

type AuthToken = string;

type UseFetchResult<T> = {
  response: T | null;
  error: Error | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
};

type StorageKey = {
  TOKEN: string;
};

const useFetch = <T>(url: string, id = ''): UseFetchResult<T> => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<
    'idle' | 'pending' | 'succeeded' | 'failed'
  >('idle');

  useToken();

  const token: AuthToken | null = storage.getItem(StorageKey.TOKEN) || null;

  const headers: HeadersInit = useMemo(() => {
    const result = new Headers();
    if (token) {
      result.append(HttpHeader.CONTENT_TYPE, 'application/json');
      result.append(HttpHeader.AUTHORIZATION, `Bearer ${token}`);
    }
    return result;
  }, [token]);

  useEffect(() => {
    const doFetch = async () => {
      setLoading('pending');
      try {
        const res = await fetch(url, { headers });
        if (!res.ok) {
          throw new Error(`Fetch error ${res.status}`);
        }
        const json = await res.json();
        setLoading('succeeded');

        setResponse(json);
      } catch (e: any) {
        setError(e);
        setLoading('failed');
      }
    };
    doFetch();
  }, [url, headers, id]);

  return { response, error, loading };
};

export { useFetch };
