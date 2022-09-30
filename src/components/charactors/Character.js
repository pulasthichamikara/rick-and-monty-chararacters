import React, { Fragment, useEffect, useState } from 'react';
import Episode from '../episodes/Episode';
import './character.css';

export default function Character({ data, expanedItem, expanedItemhandler }) {
  const episoceData = data.episode.slice(0, 3).reverse();

  return (
    <div className="character">
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
                episoceData.map((epi) => <Episode url={epi} key={epi} />)}
            </>
          )}
        </div>

        {/* See more */}

        {expanedItem === data.id ? (
          <button
            onClick={() => {
              expanedItemhandler(null);
            }}
          >
            See Less
          </button>
        ) : (
          <button
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
