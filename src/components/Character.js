import React, { Fragment, useEffect, useState } from 'react';
import Episode from './Episode';

export default function Character({ data }) {
  return (
    <>
      <img src={data.image} alt={data.name} />
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
        {data.episode.map((epi) => (
          <Episode url={epi} key={epi} />
        ))}
      </div>
    </>
  );
}
