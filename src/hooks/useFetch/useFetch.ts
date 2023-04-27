import { HttpHeader, StorageKey } from 'common/enums/enums';
import { useState, useEffect } from 'hooks/hooks';
import { useToken } from 'hooks/useFetch/useToken';
import { storage } from 'services/services';
type AuthToken = string | null;

const useFetch = (url: string, id = '') => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState<
    'idle' | 'pending' | 'succeeded' | 'failed'
  >('idle');
  useToken();
  const token: AuthToken = storage.getItem(StorageKey.TOKEN);
  const headers = new Headers();
  if (token) {
    headers.append(HttpHeader.CONTENT_TYPE, 'application/json');
    headers.append(HttpHeader.AUTHORIZATION, `Bearer ${token}`);
  }


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
  }, [id]);
  return { response, error, loading };
};
export { useFetch };
