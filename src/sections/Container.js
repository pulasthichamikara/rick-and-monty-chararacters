import React from 'react';
import { useEffect, useState } from 'react';
import Character from '../components/Character';
import Loading from '../components/Loading';
import useFetch from '../hooks/useFetch';

export default function Container() {
  const { data, loading, error } = useFetch(
    `https://rickandmortyapi.com/api/character`
  );
  console.log(data);
  return (
    <section>
      <div className="caractors">
        {loading ? (
          <Loading />
        ) : (
          <div className="charactor-wrapper">
            {data &&
              data.results &&
              data.results.map((character) => (
                <div key={character.id}>
                  <Character data={character} />
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
}
