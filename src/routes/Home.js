import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  if (loading) return 'loading...';
  if (data && data.movies)
    return data.movies.map((movie) => <li>{movie.id}</li>);
};

export default Home;
