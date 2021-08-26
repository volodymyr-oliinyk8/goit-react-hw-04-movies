import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as moviesAPI from '../../components/api-service/movies-api';

const HomePage = () => {
  const { pathname } = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesAPI.fetchMoviesPopular().then(el => setMovies(el.results));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies &&
          movies.map(({ id, title, name }) => (
            <li key={id}>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  state: {
                    backUrl: pathname,
                  },
                }}
              >
                {title || name}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default HomePage;
