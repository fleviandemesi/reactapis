import React from 'react';
import '../index.css'; // Assuming you'll add CSS styles in this file

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1>404</h1>
        <p>Oops! The page you are looking for does not exist.</p>
        <a href="/comments" className="home-link">Go to Home</a>
      </div>
    </div>
  );
}

export default NotFound;
