import { CastInfo } from 'components/CastInfo/CastInfo';
import { Loader } from 'components/Loader/Loader';
import { useFetchCast } from 'hooks';
import styled from 'styled-components';

const StyledText = styled.p`
  margin-left: 60px;
  font-size: 20px;
`;

const Cast = () => {
  const { cast, loading, error } = useFetchCast();
  return (
    <>
      {loading && <Loader />}
      {error && <p>Something went wrong...</p>}
      {cast.length > 0 ? (
        <CastInfo cast={cast} />
      ) : (
        <StyledText>We not found cast...</StyledText>
      )}
    </>
  );
};

export default Cast;
