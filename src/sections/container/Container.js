import React, { Fragment } from 'react';
import { useEffect, useState } from 'react';
import Character from '../../components/charactors/Character';
import Loading from '../../components/loading/Loading';
import useFetch from '../../hooks/useFetch';
import './container.css';

export default function Container() {
  const { data, loading, error } = useFetch(
    `https://rickandmortyapi.com/api/character`
  );
  const [expanedItem, setExpanedItem] = useState(null);
  const expanedItemhandler = (id) => {
    console.log(id);
    setExpanedItem(id);
  };
  console.log(data);
  return (
    <section className="container-wrapper">
      {expanedItem}
      <div className="characters-wrapper">
        {loading ? (
          <Loading />
        ) : (
          <Fragment>
            {data &&
              data.results &&
              data.results.map((character) => (
                <div key={character.id} className="character-item-wrapper">
                  <Character
                    data={character}
                    expanedItem={expanedItem}
                    expanedItemhandler={expanedItemhandler}
                  />
                </div>
              ))}
          </Fragment>
        )}
      </div>
    </section>
  );
}
