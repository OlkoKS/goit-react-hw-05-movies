import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useFetchMoviesByQuery } from 'hooks';

const Movies = () => {
  const { movies, loading, error, handleSubmit } = useFetchMoviesByQuery();
  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && <p>Something went wrong...</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};

export default Movies;
