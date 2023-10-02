import { CastInfo } from 'components/CastInfo/CastInfo';
import { Loader } from 'components/Loader/Loader';
import { useFetchCast } from 'hooks';

const Cast = () => {
  const { cast, loading, error } = useFetchCast();
  return (
    <>
      {loading && <Loader />}
      {error && <p>Something went wrong...</p>}
      {cast.length > 0 ? <CastInfo cast={cast} /> : <p>We not found cast...</p>}
    </>
  );
};

export default Cast;
