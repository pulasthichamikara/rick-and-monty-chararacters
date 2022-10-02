import React, { Fragment, useState } from 'react';
import Close from '../../icons/Close';
import Heart from '../../icons/Heart';
import Episode from '../episodes/Episode';
import './character.css';

export default function Character({
  data,
  expanedItem,
  expanedItemhandler,
  favouriteHandler,
  favouriteRemoveHandler,
  type,
}) {
  const episodeData = data.episode.slice().reverse().slice(0, 3);
  const [favHeighlight, setFavHeighlight] = useState(false);
  return (
    <div className="character">
      {/* favourite */}
      {type !== 'fav' ? (
        <span
          className={favHeighlight ? 'favourite-icon hit' : 'favourite-icon'}
          onClick={() => {
            favouriteHandler(data);
            setFavHeighlight(true);
          }}
        >
          {<Heart />}
        </span>
      ) : (
        <>
          <span
            className="favourite-icon"
            onClick={() => favouriteRemoveHandler(data.id)}
          >
            <Close />
          </span>
        </>
      )}

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
