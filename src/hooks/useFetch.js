import React, { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getCaractersRequset = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const resposeJson = await response.json();
      setData(resposeJson);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCaractersRequset();
  }, [url]);

  return { data, loading, error };
}
export default useFetch;
