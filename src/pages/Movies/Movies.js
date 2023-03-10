import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { toast } from 'react-toastify';

import { Loader } from 'components/Loader/Loader';
import { getMoviesSearch } from 'servises/movieApi';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { MovieCard } from 'components/MovieList/MovieList';


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const search = searchParams.get('query') ?? '';

  useEffect(() => {
    setMovies([]);
    if (!search) {
      return;
    }

    async function getImg() {
      setLoading(true);
      try {
        const movies = await getMoviesSearch(search);
        setMovies(movies);
      } catch (error) {
        toast(error.message);
      } finally {
        setLoading(false);
      }
    }
    getImg();
  }, [search]);

  const handleSubmit = query => {
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <div>
      {loading && <Loader />}
      <SearchBox onChange={handleSubmit} />
      {movies && <MovieCard movies={movies} />}
    </div>
  );
};

export default Movies;

