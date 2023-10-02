import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { useFetchTrending } from 'hooks';

const Home = () => {
  const { movies, loading, error } = useFetchTrending();
  return (
    <>
      {loading && <Loader />}
      {error && <p>Something went wrong...</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};

export default Home;
