import React from 'react';
import useFetch from '../../hooks/useFetch';
import Loading from '../loading/Loading';

export default function Episode({ url }) {
  const { data, loading, error } = useFetch(url);

  return (
    <div>
      {data && error === false && (
        <>
          {loading ? (
            <Loading />
          ) : (
            <span className="list-style">{data.episode}</span>
          )}
        </>
      )}
      <div className="episode-wrapper"></div>
    </div>
  );
}
