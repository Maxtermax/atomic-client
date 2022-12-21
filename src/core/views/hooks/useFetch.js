import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, { ...options, signal: controller.signal });
        const result = await res.json();
        setData(result);
        setIsLoading(false);
      } catch (exception) {
        const isRequestAborted = exception.name === 'AbortError';
        if (isRequestAborted) {
          return;
        }
        setError(error);
      }
    };
    fetchData();
    return () => {
      controller.abort();
    }
  }, []);

  return { response: data, error, isLoading };
};
