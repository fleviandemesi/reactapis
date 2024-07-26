import React from 'react';

import '../index.css'; // Assuming you'll add CSS styles in this file

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
