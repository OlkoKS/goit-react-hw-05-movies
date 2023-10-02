import { Loader } from 'components/Loader/Loader';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useFetchMovieDetails } from 'hooks';
import { Suspense, useRef } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  margin: 40px 0 20px 60px;
  font-weight: 600;
  font-size: 24px;
  color: rgb(14 84 70);
`;

const StyledTitle = styled.h2`
  margin: 40px 0 -16px 60px;
  font-size: 28px;
`;

const MovieDetails = () => {
  const { movie, loading, error } = useFetchMovieDetails();
  const location = useLocation();
  const goBackLink = useRef(location.state?.from ?? '/');
  return (
    <>
      <StyledNavLink to={goBackLink.current}>Go back</StyledNavLink>
      {loading && <Loader />}
      {error && <p>Something went wrong...</p>}
      {movie && <MovieInfo movie={movie} />}
      <StyledTitle>Additional information</StyledTitle>
      <StyledNavLink to="cast">Cast</StyledNavLink>
      <StyledNavLink to="reviews">Reviews</StyledNavLink>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
