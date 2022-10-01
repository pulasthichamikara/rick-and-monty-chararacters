import React, { Fragment } from 'react';
import './page-header.css';

export default function PageHeader({ handleShowAll, showFavorites }) {
  return (
    <Fragment>
      <div className="page-header">
        <div className="page-header__left">
          <h1>Rick and Monty - Characters</h1>
        </div>
        <div className="page-header__right">
          <button
            className={!showFavorites ? 'btn active' : 'btn'}
            onClick={() => {
              handleShowAll(false);
            }}
          >
            Show All
          </button>
          <button
            className={showFavorites ? 'btn active' : 'btn'}
            onClick={() => {
              handleShowAll(true);
            }}
          >
            Show Favorites
          </button>
        </div>
      </div>
    </Fragment>
  );
}
