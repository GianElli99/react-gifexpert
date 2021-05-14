import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

import GifGridItem from './GifGridItem';

function GifGrid({ category }) {
  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeInDownBig">{category}</h3>

      {loading && <p className="animate__animated animate__flash">Cargando</p>}

      <div className="card-grid">
        {data.map((x) => (
          <GifGridItem key={x.id} {...x} />
        ))}
      </div>
    </>
  );
}

export default GifGrid;
