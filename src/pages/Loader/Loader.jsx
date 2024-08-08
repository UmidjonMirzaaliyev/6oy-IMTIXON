import React from 'react';
import loaderGif from './loader.gif'; // Loader gif faylini import qilyapmiz

const Loader = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <img src={loaderGif} alt="Loading..." />
    </div>
  );
};

export default Loader;
