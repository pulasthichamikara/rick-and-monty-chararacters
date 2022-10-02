import React, { Fragment } from 'react';
import { useEffect, useState } from 'react';
import Character from '../../components/charactors/Character';
import Loading from '../../components/loading/Loading';
import PageHeader from '../../components/page-header/PageHeader';
import Pagination from '../../components/pagination/Pagination';
import useFetch from '../../hooks/useFetch';
import './container.css';

export default function Container() {
  const [baseUrl, setBaseUrl] = useState(
    `https://rickandmortyapi.com/api/character`
  );

  const { data, loading, error } = useFetch(baseUrl);
  const [favourite, setFavourite] = useState([]);
  console.log(data);
  console.log(favourite);
  /* expanded infomation item */
  const [expanedItem, setExpanedItem] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false);
  const expanedItemhandler = (id) => {
    setExpanedItem(id);
  };

  useEffect(() => {
    const localStoredFavorites = localStorage.getItem('rm-favorites');
    if (localStoredFavorites) {
      setFavourite(JSON.parse(localStoredFavorites));
    }
  }, []);

  /* pagination*/

  /* set favorites  */
  const favouriteHandler = (favObj) => {
    const tempfavourites = [...favourite, favObj];
    setFavourite(tempfavourites);
    localStorage.setItem('rm-favorites', JSON.stringify(tempfavourites));
  };

  /* remove favorites */
  const favouriteRemoveHandler = (id) => {
    const tempRmfavourites = favourite.filter((item) => {
      return item.id !== id;
    });
    setFavourite(tempRmfavourites);
    localStorage.setItem('rm-favorites', JSON.stringify(tempRmfavourites));
  };

  const handleShowAll = (show) => {
    setShowFavorites(show);
  };

  const pageItems = (pageItemData, type = '') => {
    return (
      <div className="characters-wrapper">
        <Fragment>
          {pageItemData &&
            pageItemData.map((character) => (
              <div key={character.id + type} className="character-item-wrapper">
                <Character
                  data={character}
                  expanedItem={expanedItem}
                  expanedItemhandler={expanedItemhandler}
                  favouriteHandler={favouriteHandler}
                  favouriteRemoveHandler={favouriteRemoveHandler}
                  type={type}
                />
              </div>
            ))}
        </Fragment>
      </div>
    );
  };

  return (
    <section className="container-wrapper">
      {/* page header */}
      <PageHeader handleShowAll={handleShowAll} showFavorites={showFavorites} />

      {/* Faverite Items */}
      {showFavorites && pageItems(favourite, 'fav')}

      {/* Default character data */}
      <div className="characters-wrapper">
        {!showFavorites && (
          <>
            {loading ? (
              <Loading />
            ) : (
              <>
                <div className="full-width">
                  <Pagination data={data} setBaseUrl={setBaseUrl} />
                </div>

                {data && pageItems(data.results)}

                <div className="full-width">
                  <Pagination data={data} setBaseUrl={setBaseUrl} />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
}
