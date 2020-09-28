import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ id }) => {
  return (
    <div>
      <li>
        <Link to={`/${id}`}>{id}</Link>
      </li>
    </div>
  );
};

export default Movie;
