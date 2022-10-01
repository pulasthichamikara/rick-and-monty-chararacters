import React, { Fragment, useEffect, useState } from 'react';
import Heart from '../../icons/Heart';
import Episode from '../episodes/Episode';
import './character.css';

export default function Character({
  data,
  expanedItem,
  expanedItemhandler,
  favouriteHandler,
  isFavorite,
}) {
  const episodeData = data.episode.slice(0, 3).reverse();

  return (
    <div className="character">
      {/* favourite */}
      <span className="favourite-icon" onClick={() => favouriteHandler(data)}>
        <Heart />
      </span>

      <img src={data.image} alt={data.name} />
      <div className="bottom-section">
        <h3 className="title">{data.name}</h3>
        <div className="charactor__item">
          <span>Spadeis</span>
          {data.species}
        </div>
        <div className="charactor__item">
          <span>Gender</span>
          {data.gender}
        </div>
        <div className="charactor__item">
          <span>Origin</span>
          {data.origin.name}
        </div>
        <div className="charactor__item">
          <span>Status</span>
          {data.status}
        </div>
        <div>
          {expanedItem === data.id && (
            <>
              {data.episode &&
                episodeData.map((epi) => <Episode url={epi} key={epi} />)}
            </>
          )}
        </div>

        {/* See more */}

        {expanedItem === data.id ? (
          <button
            className="btn full-width mt-1 bg-sec"
            onClick={() => {
              expanedItemhandler(null);
            }}
          >
            See Less
          </button>
        ) : (
          <button
            className="btn full-width mt-1 bg-pr"
            onClick={() => {
              expanedItemhandler(data.id);
            }}
          >
            See more
          </button>
        )}
      </div>
    </div>
  );
}
