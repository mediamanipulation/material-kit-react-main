import { useState, useEffect } from 'react';

const useApi = (apiFunc) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Outer scope error variable

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiFunc();
        setData(result);
        setLoading(false);
      } catch (apiError) { // Renamed to apiError to avoid no-shadow error
        setError(apiError);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiFunc]);

  return { data, loading, error };
};

export default useApi;
