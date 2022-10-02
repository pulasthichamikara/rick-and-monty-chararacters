import React from 'react';

export default function Footer() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', color: '#dba100' }}>
      &copy;{' '}
      <a
        style={{ color: '#dba100', textDecoration: 'none' }}
        href="https://rickandmortyapi.com/"
      >
        https://rickandmortyapi.com/
      </a>
    </div>
  );
}
