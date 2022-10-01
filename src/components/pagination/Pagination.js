import React from 'react';
import './pagination.css';

export default function Pagination({ data, setBaseUrl }) {
  const goNextPage = () => {
    setBaseUrl(data.info.next);
  };
  const goPrevPage = () => {
    setBaseUrl(data.info.prev);
  };
  return (
    <div>
      <div className="pagination">
        {data && data.info.prev && (
          <button className="btn" onClick={goPrevPage}>
            prev
          </button>
        )}

        {data && data.info.next && (
          <button className="btn" onClick={goNextPage}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}
