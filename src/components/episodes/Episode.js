import React from 'react';
import useFetch from '../../hooks/useFetch';
import Loading from '../loading/Loading';
import './episode.css';
export default function Episode({ url }) {
  const { data, loading, error } = useFetch(url);
  return (
    <div>
      {data && error === false && (
        <>
          {loading ? (
            <Loading />
          ) : (
            <div className="episode-wrapper">
              <span>{data.episode}</span>
              <p>{data.name}</p>
              <span>{data.air_date}</span>
            </div>
          )}
        </>
      )}
    </div>
  );
}
